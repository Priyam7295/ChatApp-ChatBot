import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";
import { compare } from "bcrypt";

export const goToChatSection=(req ,res)=>{
    console.log("got call");
    try {
        const token = req.cookies.jwt; 
        console.log(token)

        if (!token) {
          return res.status(401).json({ message: "No token provided" });
        }
    
        // Verify the token
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
          if (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
          }
          
          // Token is valid, proceed to chatbot logic
          res.status(200).json({ message: "Chatbot endpoint accessed successfully", user: decoded });
        });
        
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
      }

}