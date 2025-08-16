# 🔗 Minx-URL  

A minimal and modern **URL Shortener** built with **Next.js 13, MongoDB, and TailwindCSS**.  
 

---

## 🚀 Features  
- Shorten long URLs instantly  
- Create custom aliases (e.g., `minx-url.com/my-link`)  
- Copy & share short links easily  
- Redirect short URLs to the original link  
- Responsive and modern UI  
- MongoDB database for persistence  

---

## 🛠️ Tech Stack  
- [Next.js 13 (App Router)](https://nextjs.org/) – Full-stack React framework  
- [MongoDB](https://www.mongodb.com/) – NoSQL Database  
- [TailwindCSS](https://tailwindcss.com/) – Styling  
- [React Hot Toast](https://react-hot-toast.com/) – Notifications  

---

## 📂 Project Structure  
minx-url/
│── app/
│ ├── page.js # Homepage with URL form
│ ├── [url]/page.js # Dynamic route for short URL redirect
│── app/api/generate/route.js # API endpoint for generating short links
│── public/ # Public assets (favicon, logo, etc.)
│── lib/mongodb.js # MongoDB connection utility

---

## ⚡ Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/minx-url.git
cd minx-url
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Setup Environment Variables
Create a .env.local file in the root:

MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
4️⃣ Run the Development Server
bash
Copy
Edit
npm run dev
Visit 👉 http://localhost:3000

📸 Demo Flow
Enter a long URL

(Optional) Add a custom alias

Click Shorten URL

Get your new link like:

bash
Copy
Edit
http://localhost:3000/myalias
🔮 Future Enhancements
User authentication & dashboard

Link analytics (clicks, locations, devices)

Expiry dates for short links

QR code generator for each short link

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a PR or suggest improvements.

📜 License
This project is licensed under the MIT License – free to use and modify.

⭐ Support
If you like this project, please give it a ⭐ on GitHub!