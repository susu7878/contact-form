# 📬 Contact Form Project

This project is a responsive contact form built using **HTML**, **CSS**, and **JavaScript**.

Users can:

- Enter their first and last name
- Provide an email address
- Select a query type
- Write a message
- Give consent before submitting

The form validates all fields before submission and shows error messages when something is missing or incorrect.

---

## 🎯 Project Purpose

The goal of this project is to practice:

- Building forms with HTML
- Styling layouts with CSS
- Making responsive designs
- Validating user input with JavaScript

---

## 📁 Project Structure

- `index.html` → Form structure and layout
- `style.css` → Styling, colors, and responsive rules
- `index.js` → Form validation logic

---

## ⚙️ Configuration (Easy to Change Rules)

You can control the validation rules from JavaScript.

Example (in `index.js`):

```js
const config = {
  minNameLength: 2,
  minMessageLength: 12,
};
```
