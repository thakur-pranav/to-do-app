# 📋 TODO App

A simple, responsive, and persistent task management application built with **HTML**, **CSS**, and **JavaScript**.  
The app allows users to add, edit, and delete tasks, with all data stored in the browser's **localStorage** so tasks remain after page refresh.

---

## 🚀 Features
- **Add tasks** with a title, due date, and description.
- **Edit tasks** directly from the task list.
- **Delete tasks** and update the task list instantly.
- **Persistent storage** using localStorage — tasks stay even after refreshing.
- **Responsive design** styled with Bootstrap 4.
- **Icons** from Font Awesome for better UI.

---

## 🛠️ Technologies Used
- **HTML5** – Structure
- **CSS3** – Custom styling + Bootstrap 4 for layout
- **JavaScript (ES6)** – App logic
- **Bootstrap 4** – Modal, responsive layout
- **Font Awesome** – Icons

---

## 📂 Project Structure
├── index.html # Main HTML file
├── style.css # Custom CSS
├── main.js # App logic
└── README.md # Documentation

---

## 📖 How to Use

### 1️⃣ Clone or Download
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
### 2️⃣ Open in Browser
Simply open index.html in your favorite browser.

---

## 🖱️ Usage Instructions

1. **Add a Task**
   - Click on **"Add New Task"**
   - Fill in the title, due date, and description.
   - Click **"Add"** to save it.
   
2. **Edit a Task**
   - Click the ✏️ (edit) icon next to the task.
   - The task details will load into the modal form.
   - Make changes and click **"Add"** again.

3. **Delete a Task**
   - Click the 🗑️ (trash) icon to remove it.
   - The task is deleted from the DOM and localStorage.

4. **Persistence**
   - All tasks are stored in your browser's localStorage, so they remain after refreshing the page.
   - Clearing browser data will remove stored tasks.
