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

We can concurrenctly start the dev server (client & server) by running:
```
npm run dev
```


The first thing you'll need to do is login as an administrator and create

areas and rooms.

The default authentication scheme uses a database table in the MRBS

database. To create the first user click the "User list" link in the

top-right of the page. If there aren't any users defined in your database

yet, you will be able to create the first administrator.

Once you have logged in as an administrator you can click on "Rooms" and

create first an "Area", and then a "Room" within that area.

There are other ways to configure authentication in MRBS, see the

file AUTHENTICATION for a more complete description.

The latest version was tested with PHP 5.3.3, Apache 2.4, and either

MySQL 5.6+ or PostgreSQL 8.2+. It should work on just about anything

that's got PHP 5.3.3+ with MySQL 5.1+ or PostgreSQL 8.2+.

It should be pretty easy to adjust it to your corporate colours - you can

modify the themes under "Themes" or (preferably) copy an existing theme

to a new directory and modify the new theme.

See COPYING for licensing info.

See NEWS for a history of changes.

See AUTHENTICATION for information about user authentication/passwords.

-------------

Requirements:

-------------

- Node.js v14.15.4

Recommended:

- JavaScript-enabled browser

- CSS-enabled browser

- PHP module connection to the server (also called SAPI) if you want to use any

  of the basic http authentication schemes provided.

(If you are considering porting MRBS to another database, see README.sqlapi)

Warning:

- Some users reported errors using some accelerators (APC, PHP Accelerator).

  If you get messages like this : "Internal Zend error - Missing class

  information for ...", your accelerator is the cause.

