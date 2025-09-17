    Overview

Ye project ek Gym Management System hai jisme Admin aur Members ke liye alag-alag dashboards banaye gaye hain.

Admin → Members, Bills, Products, Diet Plans add kar sakta hai.

Members → apna profile, bills, diet plans aur products dekh sakte hain.

     Features

Firebase Authentication (Login/Register with Email & Password)

Role-based Access (Admin / Member)

Firestore Database Integration

Secure Firestore Rules (only logged-in users can access data)

Separate dashboards for Admin & Member

      Technologies Used

HTML, CSS, JavaScript

Firebase Authentication

Firebase Firestore Database

      How to Run Project

Project folder ko VS Code me open karo.

index.html file ko Live Server extension se run karo (ya double click karke browser me open karo).

Register Page se ek Admin account banao (Role = Admin).

Login karo as Admin → dashboard-admin.html khulega.

Member add karo

Bills add karo

Products add karo

Diet plans add karo

Logout karke Member ke account se login karo → dashboard-member.html khulega.

Yahan member apna data dekh sakta hai.

      Firestore Rules

Firestore ko secure karne ke liye rules lagaye gaye hain:

rules_version = '2'; service cloud.firestore { match /databases/{database}/documents { match /{document=**} { allow read, write: if request.auth != null; } } }

Isse sirf logged-in users hi data read/write kar sakte hain.

       Author

Harsh 
