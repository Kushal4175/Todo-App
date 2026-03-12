# ✅ TaskFlow - Dynamic Todo App

A stylish, interactive Todo application that welcomes you based on the time of day and keeps your tasks organized using persistent local storage.

## 🌟 Key Features

- **🕒 Time-Aware Greetings:** Dynamic greeting system that changes between **Morning, Afternoon, and Evening based on your system clock.**
- **💾 LocalStorage Persistence:** Your tasks are automatically saved to your browser. Even if you refresh the page or close the tab, your data stays safe.
- **⚡ Keyboard Shortcuts:** Added accessibility—simply press the **Enter** key to add a task quickly.
- **✨ Smooth UI Transitions:** Uses timed delays (`setTimeout`) to transition beautifully from a greeting screen to your todo dashboard.
- **🗑️ Task Management:** One-click "Done" functionality to remove tasks from both the screen and the database.

## 🛠️ Built With

- **HTML5:** Semantic structure for better SEO and accessibility.
- **CSS3:** Custom animations, Flexbox for centering, and a modern dark-blue aesthetic.
- **JavaScript (ES6+):** 
  - `localStorage` for data persistence.
  - `JSON.parse` & `JSON.stringify` for array handling.
  - `DOM Manipulation` for dynamic element creation.
  - `Event Listeners` for keyboard interactions.

## 🚀 How to Use

1. **Wait for the Greeting:** When you open the app, you'll see a personalized greeting.
2. **Access Dashboard:** After a few seconds, the greeting clears and the "Your Todo's" dashboard appears.
3. **Add a Task:** 
   - Type your task in the input box.
   - Pick a date.
   - Click **Add** or press **Enter**.
4. **Complete a Task:** Click the **Done** button to remove a task once it's finished.

## 📂 Project Structure

- `index.html` - The core layout.
- `todo.css` - Styles and keyframe animations.
- `todo.js` - Main application logic and storage management.
