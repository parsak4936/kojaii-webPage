 ##کجایی

کجایی برنامه ایی برای ملاقات و موقیت یابی دوستان خود در هنگام ملاقات هست.دیگر وقت خود را برای انتظارهای طولانی هدر ندهید!

## نکات مهم

برای اجرای برنامه در محیط لوکال در فایل package.json 
قسمت scripts قرار دهید :
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  
  ------------------------------------
  برای اجرا در محیط هیروکو هم قرار دهید :
   "scripts": {
    "dev": "react-scripts start",
    "start": "serve -s build",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "heroku-postbuild": "npm run build"
  },
  در غیر این صورت در هین اجرا به مشکل خواهید خورد و در دامنه دیپلوی نمیشود!

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
