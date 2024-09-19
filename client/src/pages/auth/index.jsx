import Background from "../../assets/login2.png";
import Victory from "../../assets/victory.svg";
import Im from "../../assets/image5.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import Chatapp from "@/components/ui/Chatapp";
import ChatFeatureSection from "@/components/ui/ChatFeatureSection";
import Footer from "@/components/ui/Footer";
import AiFeatureSection from "@/components/ui/AiFeatureSection";
import apiClient from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";
import Greetings from "./Greetings";
import "@/style/intro_page.css";
import validator from "email-validator"

const Auth = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if(!validator.validate(email)){
      toast.error("Enter a valid email address");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password.length<8) {
      toast.error("Password must contain atleast 8 characters");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be the same.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      if (validateLogin()) {
        const response = await apiClient.post(
          LOGIN_ROUTE,
          { email, password },
          { withCredentials: true }
        );
        if (response.data.user.id) {
          setUserInfo(response.data.user);
          if (response.data.user.profileSetup) navigate("/chat");
          else navigate("/profile");
        } else {
          console.log("error");
        }
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        toast("No Acoount found")
        // alert("No Account Found"); // Show alert on error 404
      }
      if (error.response && error.response.status === 400) {
        toast("Enter Correct Password");
        // alert("Password Mismatched"); // Show alert on error 404
      }
    }
  };

  const handleSignup = async () => {
    try {
      if (validateSignup()) {
        const response = await apiClient.post(
          SIGNUP_ROUTE,
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        if (response.status === 201) {
          setUserInfo(response.data.user);
          navigate("/profile");
        }
      }
    } catch (error) {
      if(error.response && error.response.status ===404){
        
        toast("Account Already Registered");
      }
    }
  };

  return (
    <div className="relative">
      <Header />

      {/* Chatapp and other sections */}
      <Chatapp navigate={navigate} />
      <ChatFeatureSection />
      <AiFeatureSection />

      {/* Alert Section */}


      {/* Login/Signup Section */}
      <div id="auth-section" className="h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl flex items-center">
          {/* Left Side: Login/Signup */}
          <div className="flex flex-col gap-10 items-center justify-center w-full xl:w-1/2 h-full">
            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-center">
                <h1 className="welcomelogin">Welcome</h1>
                <img src={Victory} className="h-[100px]" alt="Victory" />
              </div>
              <p className="font-medium text-center">
                Fill in the details to get started!
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <Tabs defaultValue="login" className="w-3/4">
                <TabsList className="bg-transparent rounded-none w-full">
                  <TabsTrigger
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                    value="login"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                    value="signup"
                  >
                    Signup
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleLogin}>
                    Login
                  </Button>
                </TabsContent>
                <TabsContent value="signup" className="flex flex-col gap-5">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-full p-6"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleSignup}>
                    Signup
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Side: Greetings */}
          <div className="hidden xl:flex items-center justify-center w-1/2 h-full relative">
          <div className="flex justify-center ">
           <img src={Im} alt="LOGIN"   />

          </div>


          </div>
        </div>
      </div>

      <Footer/>

    </div>
  );
};

export default Auth;
