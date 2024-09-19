# ChatBot integrated ChatApp 

## 🚀 Content
1. [📜 Personal Information](#personal-information)
2. [🎥 Project Showcase](#project-showcase)
3. [💻 Tech Used](#tech-used)
4. [🔧 System Design and Flowchart](#sys-design)
5. [⚙️ Installation](#installation)
6. [✨ Features](#)

## 📜 Personal Information

![Name Badge](https://img.shields.io/badge/Name-PRIYAM-blue)  
![University Badge](https://img.shields.io/badge/University-Indian%20Institute%20of%20Technology%20Mandi%20(IIT%20Mandi)-green)  
![Department Badge](https://img.shields.io/badge/Department-Data%20Science%20and%20Engineering%20(DSE)-orange)


## 🎥 Project Showcase

### Video Walkthrough

Watch the video walkthrough of the chat application to get a detailed overview of its features:

[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)


### Screenshots

Below are some small screenshots of the chat application:

**LANDING PAGE**

<img src="https://github.com/user-attachments/assets/224bd978-fa3f-4781-b507-5f02b45fb2ea" width="300" />
<img src="https://github.com/user-attachments/assets/3e6eb75b-f4d9-4944-9bfc-d7b54c89a76d" width="300" />
<img src="https://github.com/user-attachments/assets/44bb9ac5-d4ab-4ec6-b99c-304c15cd95d6" width="300" />

**CHAT INTERFACE**

<img src="https://github.com/user-attachments/assets/14bff2c0-9ffb-4a02-bee5-5fe37025c999" width="300" />
<img src="https://github.com/user-attachments/assets/819c6ce4-900c-414d-8fe2-2e3ed0751070" width="300" />
<img src="https://github.com/user-attachments/assets/07b7a31b-2cb1-449f-b8dd-3869ec501942" width="300" />

**CHAT BOT INTEGRATED**

<img src="https://github.com/user-attachments/assets/a33b7fdf-0c52-4c81-8d1e-5ad82a2b862a" width="300" />







---

## 💻 Tech Used

- **Frontend**: ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)  
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)  
- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)  
- **File Upload**: ![Multer](https://img.shields.io/badge/Multer-ff5c5c?style=flat&logo=npm&logoColor=white)  
- **Chatbot**: ![ChatGPT](https://img.shields.io/badge/OpenAI%20ChatGPT-00B2FF?style=flat&logo=openai&logoColor=white)

---
## 📄🛠️ System Design Document 

### 1. Introduction

**Purpose**: This document outlines the design of a chat application, detailing its features and how they interact.

**Scope**: The document covers authentication, profile setup, user search, chat functionalities, file sharing, group chat, and chatbot integration.

### 2. System Overview

The chat application consists of several interconnected components:

- **Frontend 🎨**: User interface for interacting with the application.
- **Backend ⚙️**: Server-side logic and database interactions.
- **Database 🗄️**: Stores user data, chat history, and file information.
- **Authentication 🔍**: Handles user login and token management.
- **Chatbot 🤖**: Provides AI-driven assistance.

### 3. Components and Interaction

### **Authentication**

**Description**: Users start on the authentication page where they log in using JWT-based authentication.

**Interaction**:
- **Frontend**: User submits login credentials.
- **Backend**: Verifies credentials and generates a JWT token.
- **Database**: Authenticates user details.
- **Next Step**: Redirects to profile setup.

### **Profile Setup**

**Description**: Post-authentication, users set up their profile by entering their name and uploading a display picture.

**Interaction**:
- **Frontend**: Provides form for name and profile picture.
- **Backend**: Stores user profile information and updates the database.
- **Database**: Saves the user's name and profile picture URL.
- **Next Step**: Redirects to the main chat interface.

### **User Search and Chat**

**Description**: Users can search for other users by email ID and initiate one-on-one chats.

**Interaction**:
- **Frontend**: Provides search functionality and chat interface.
- **Backend**: Searches for users by email and retrieves chat history.
- **Database**: Stores user details and chat messages.
- **Next Step**: Opens chat window with selected user.

### **Group Chat Creation**

**Description**: Users can create chat groups and invite multiple participants.

**Interaction**:
- **Frontend**: Allows group creation and user invitations.
- **Backend**: Manages group creation and membership.
- **Database**: Stores group details and participant information.
- **Next Step**: Opens group chat interface.

### **File and Image Sharing**

**Description**: Users can send files and images within chats.

**Interaction**:
- **Frontend**: Provides file upload and image sharing options.
- **Backend**: Handles file storage and message updates.
- **Database**: Stores file references and message content.
- **Next Step**: Displays files/images in chat.

### **Chatbot Integration**

**Description**: Users can interact with an integrated AI chatbot for support and information.

**Interaction**:

- **Frontend**: Provides a chat interface for chatbot interaction.
- **Backend**: Processes chatbot queries and provides responses.
- **Chatbot**: Uses AI to generate responses.
- **Next Step**: Provides support without leaving the chat platform.

## 4. System Architecture Diagram

The system design of the chat application is illustrated by the following diagram:

<img src="https://www.mermaidchart.com/raw/49a6fc30-b667-4f33-8e84-27465aa9bb52?theme=light&version=v0.1&format=svg" alt="System Architecture Diagram" style="width:40%;"/>






---

## ⚙️ Installation

### Step 1: Clone the repository

To clone the chat application repository, run the following command:

```bash
1. git clone https://github.com/Priyam7295/ChatApp-ChatBot.git
2. cd .\ChatApp-ChatBot\
```
### Step 2:
**NOTE:- For evaluation ease I am providing my key for gemini (so you donot need to do anything here.) 
I will remove it otherwise**. 
```
get key from gemini(I have added for now for ease)
```
### Step 3: 

Create a **.env** file inside the **client** directory.

Copy =the below content inside the .env .
```bash
VITE_SERVER_URL="http://localhost:8747"
VITE_SOCKET_URL="http://localhost:8747"
CHATBOT_URL ="AIzaSyCH5dziKTJHiDdZFwelw8ah_sOejy7iDro"
```
### Step 4: 

Create a **.env** file inside the **server** directory.
Copy the below content inside the .env accordingly.
```bash
PORT=8747
JWT_KEY="2asasadasdasdadsa%$#secretkey"
ORIGIN="http://localhost:5173"

DATABSE_URL="mongodb+srv://rajpriyam857885:R2ZBUhqrNGZQDT5I@cluster0.red2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
```
### Step 5:
In one terminal ,
Run the following command to start client
```
cd .\client\
npm i
npm run dev
```
### Step 6:
Open other terminal ,
Run the following command to open backend server

```
cd .\server\
npm i
node .\index.js
```

### Step 7:
On browser open the following link:
```
 http://localhost:5173
```

---
## Features
1. Authentication and Authorisation using JWT tokens.
2. Fully responsive design .
3. Chat application to stay connected.
4. Real time message updates and notifications.
5. User can share the images and documents personally or in group chats.
6. Create chat groups and channels to communicate in groups.
7. Integrated AI powered chatbot for ease—no need to switch between platforms.

