# 🧩 Next.js Authentication Project

This project is a modern **Next.js (App Router)** application built with TypeScript, Flowbite React, and React Hot Toast.  
It includes authentication guard logic, protected routes, and page-specific configurations.

---

## 🚀 Features
- 🔐 **AuthGuard** using JWT token stored in localStorage
- 🧠 **Client/Server Components** separation
- 💅 **Google Fonts Integration (Poppins, Geist, Geist Mono)**
- ⚡ **Hot Toast Notifications**
- 🎨 **TailwindCSS + Flowbite React UI**
- ✅ **Form Validation with Formik & Yup**
- 🧭 **Dynamic Routing with next/navigation**

---

## 📂 Project Structure
```
src/
├── app/
│   ├── (Auth)/
│   │   ├── login/
│   │   ├── verify/
│   │   └── register/
│   ├── _Components/
│   │   └── (auth)/Auth/
│   ├── _utils/
│   │   └── gurad/AuthGuard.tsx
│   └── layout.tsx
└── styles/
    └── globals.css
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/nextjs-auth-app.git
cd nextjs-auth-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your environment variables if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```


## 🧱 UI Stack
| Library | Purpose |
|----------|----------|
| **Next.js 15+** | Framework |
| **TypeScript** | Strong typing |
| **TailwindCSS** | Styling |
| **Flowbite React** | Components |
| **Formik + Yup** | Form handling |
| **React Hot Toast** | Notifications |

---


## 👨‍💻 Author
**Mostafa Mnesey**  
Frontend Developer (React.js / Next.js)  
🗓️ *2025*  
📧 [GitHub](https://github.com/your-username)

---


