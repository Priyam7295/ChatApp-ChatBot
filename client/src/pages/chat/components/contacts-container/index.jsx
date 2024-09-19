import ContactList from "@/components/common/contact-list";
import Logo from "@/components/common/logo";
import ProfileInfo from "./components/profile-info";
import AiLogo from "@/assets/ai-logo.png";
import apiClient from "@/lib/api-client";
import "@/style/ai-intro.css";
import {
  GET_CONTACTS_WITH_MESSAGES_ROUTE,
  GET_USER_CHANNELS,
} from "@/lib/constants";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store";
import NewDM from "./components/new-dm/new-dm";
import CreateChannel from "./components/create-channel/create-channel";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader"; // Correct import for BounceLoader

const ContactsContainer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    setDirectMessagesContacts,
    directMessagesContacts,
    channels,
    setChannels,
  } = useAppStore();

  useEffect(() => {
    const getContactsWithMessages = async () => {
      const response = await apiClient.get(GET_CONTACTS_WITH_MESSAGES_ROUTE, {
        withCredentials: true,
      });
      if (response.data.contacts) {
        setDirectMessagesContacts(response.data.contacts);
      }
    };
    getContactsWithMessages();
  }, [setDirectMessagesContacts]);

  useEffect(() => {
    const getChannels = async () => {
      const response = await apiClient.get(GET_USER_CHANNELS, {
        withCredentials: true,
      });
      if (response.data.channels) {
        setChannels(response.data.channels);
      }
    };
    getChannels();
  }, [setChannels]);

  const openAiTab = async () => {
    setLoading(true); // Start loader before making the API call
    try {
      const response = await apiClient.get("/api/chatbot", { withCredentials: true });
      if (response.status === 200) {
        // Navigate immediately after the API call succeeds
        navigate("/CHATBOT");
      }
      console.log(response.status);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Stop loader regardless of success or failure
    }
  };

  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full">
      <div className="pt-3">
        <Logo />
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Direct Messages" />
          <NewDM />
        </div>
        <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden">
          <ContactList contacts={directMessagesContacts} />
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Channels" />
          <CreateChannel />
        </div>
        <div className="max-h-[37vh] overflow-y-auto scrollbar-hidden pb-5">
          <ContactList contacts={channels} isChannel />
        </div>

        <div className="ai-chat-head">
          {loading ? (
            <BounceLoader loading={loading} size={50} />
          ) : (
            <>
              <p onClick={openAiTab}>AI CHAT</p>
              <img src={AiLogo} alt="AI" onClick={openAiTab} />
            </>
          )}
        </div>

      </div>
      <ProfileInfo />
    </div>
  );
};

export default ContactsContainer;

const Title = ({ text }) => {
  return (
    <h6 className="uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm">
      {text}
    </h6>
  );
};
