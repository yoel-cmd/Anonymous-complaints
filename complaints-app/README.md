# 📬 Anonymous Complaints System for Military Bases

A Node.js + Express project simulating an anonymous complaint box in a military base. Soldiers can submit anonymous complaints, which are stored in a cloud database (Supabase). Only authorized commanders with the correct password can view the complaints.

---

## 🎯 Project Goals

- Allow soldiers to submit complaints anonymously  
- Enable password-protected access for commanders to view all complaints  
- Work with HTML forms and request bodies  
- Store data in a cloud database (Supabase)  
- Organize code using modular folder structure  

---

## 🛠 Technologies Used

- Node.js + Express  
- Static HTML (no CSS yet)  
- Supabase (cloud database)  
- dotenv (for secrets)  
- Modular file structure (routes, controllers, models)  

---


## 📁 Folder Structure

complaints-app/
│
├── public/
│ ├── index.html
│ ├── complaint.html
│ └── style.css
│
├── routes/
│ └── complaints.js
│
├── controllers/
│ └── complaintsController.js
│
├── models/
│ └── complaint.model.js
│
├── db/
│ └── connect.js
│
├── .env
├── app.js
├── package.json


---

## 🌐 Run Locally

1. Install dependencies:
   ```bash
   npm install
