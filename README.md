# Keep-It-Secret
##Keep-It-Secret is a secure and user-friendly password manager application built with React and Firebase. It helps you store, manage, and retrieve your passwords safely.

Table of Contents
Features
Installation
Usage
Project Structure
Contributing
License
Features
User Authentication with Firebase
Securely store passwords with encryption
Generate strong passwords
Categorize and organize passwords
Responsive design
Installation
To get started with Keep-It-Secret, follow these steps:

Clone the repository:

Install dependencies:

```
npm install
```
Set up Firebase:

Create a Firebase project at Firebase Console.
Add a web app to your Firebase project.
Copy your Firebase config object.
Create a .env file in the root of your project and add your Firebase config:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
Start the development server:

```
npm start
```
The app should now be running on http://localhost:3000.

Usage
Sign Up / Login:

Users can sign up or log in using their email and password.
Add Password:

Once logged in, users can add a new password entry with details such as the site name, URL, username, and password.
View Passwords:

Users can view their saved passwords in a list format, categorized as needed.
Generate Password:

Users can generate strong, random passwords.
