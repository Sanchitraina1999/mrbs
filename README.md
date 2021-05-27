# mrbs - MEETING ROOM BOOKING SYSTEM

Meeting Room Booking System

[(https://mrbsapp.herokuapp.com)](https://mrbsapp.herokuapp.com/)

-------------------------------

The Meeting Room Booking System (MRBS) is a MERN-based application for
booking meeting rooms. 

------

To Use

------
Make sure Node.js is installed in your system. If its not, kindly refer [here](https://nodejs.org/en/download/) to install for your OS.

You can download this project or git clone it by running from your terminal:

```
git clone https://github.com/Sanchitraina1999/mrbs
```

Make sure that you are in the project folder:

```
ls
```

should yield you :
```
backend  frontend  package.json  package-lock.json  Procfile  README.md
```


Once it's downloaded, install all the dependencies for backend, by:
```
npm i
```

To install all the dependencies for frontend:
```
cd frontend
npm i
cd ..
```

Create .env file by:
```
  mkdir .env
```
Append these details to .env file:
```
NODE_ENV = development
PORT = 5000
MONGO_URI = 'YOUR MONGO URI STRING'
JWT_SECRET = ANY_SECRET_ALPHANUMERIC_STRING
```

Now, that node modules that installed.

Initialize the database with:
```
node backend/seeder
```

We can now start the dev server (concurrenctly, client & server) by running:
```
npm run dev
```

The landing page will open at http://localhost:3000

![](screenshots/landingPage.png)

Click on SIGN IN

![](screenshots/signinPage.png)

Click on Register Here

![](screenshots/signupPage.png)

Register here and yoila you are signed up!

![](screenshots/homepage.png)

Now, to book any room you have to hover over that room and click.

![](screenshots/bookingPage.png)

Check the availability and book room, if applicable.

If you have successfully booked the room, check the booked meeting room in my profile section.

![](screenshots/profilePage.png)

You can edit user details in this section as well as delete any booked meeting room.

Forgot your password?:

![](screenshots/passwordRecoveryPage.png)

Check out your email for the new generated password

![](screenshots/passwordRecoveryEmail.png)

-------------

Requirements:

-------------

- Node.js v14.15.4

Recommended:

- JavaScript-enabled browser

- CSS-enabled browser


-------------

Contributors:

-------------
Sanchit Raina @[sanchitraina1999@gmail.com](mailto:sanchitraina1999@gmail.com) [LandingPage, HomePage, Profile Screen, Backend]<br/>
Sahil Singh [Booking Page Screen]<br/>
Rajwinder Singh [SignIn, SignUp, ForgotPassword]

-------------

Technologies used:

-------------

MongoDB<br/>
Express.js<br/>
React.js<br/>
Node.js<br/>


-------------

Set of Dependencies:

-------------

Backend:

![](screenshots/backendDependencies.png)

Frontend:

![](screenshots/frontendDependencies.png)