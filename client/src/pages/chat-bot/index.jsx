import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import '@/style/bot.css'; // Import the CSS file
import Logo from "@/components/common/logo";

function App() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const chatContainerRef = useRef(null); // Ref for chat container

  async function generateResponse(question) {
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          "AIzaSyCH5dziKTJHiDdZFwelw8ah_sOejy7iDro"
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const candidates = response?.data?.candidates || [];
      const answer = candidates.length > 0 ? candidates[0]?.content?.parts[0]?.text || "" : "No response received.";

      setMessages((prev) => [
        ...prev,
        { type: "bot", text: answer },
      ]);

    } catch (error) {
      console.log(error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry - Something went wrong. Please try again!" },
      ]);
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") return;

    const newMessage = { type: "user", text: inputText };
    setMessages((prev) => [...prev, newMessage]);
    generateResponse(inputText);
    setInputText(""); // Clear input field
  };

  // Scroll to the bottom of the chat container whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Set initial message when the component mounts
  useEffect(() => {
    setMessages([
      { type: "bot", text: "Hello! I am your chatbot. How can I assist you today?" },
    ]);
  }, []);

  return (
    <>  
      <div className="header-bot" >
        <Logo  />
      </div>
      <div className="bg-dark h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl h-[70vh]  shadow-lg rounded-lg flex flex-col overflow-hidden chatbot-section ">
          <div
            ref={chatContainerRef}
            className="flex-1 p-4 overflow-y-auto"
          >
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                <div className={`message-bubble ${msg.type}`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className=" p-4 flex items-center">
            <textarea
              className="flex-1 rounded p-2 mr-2 focus:outline-none prompt"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              rows={1}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg transition-all duration-300 sendchat button-chatbot"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
