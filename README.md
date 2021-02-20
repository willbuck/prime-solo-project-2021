
# Prime Digital Academy Solo Project: Virtual Zendo


## Description
I think the world is a wild and wonderful place, and it’s important to find a quiet space as a respite from the infinite cacophony of now. I found a quiet place, and I found it in zen meditation. Before COVID, I’d just begun to sit at different zen centers in the metro with others, searching for community. When I sat with a group, I felt myself bolstered by the invisible strength of others.


A lot of centers adapted to the pandemic by hosting sessions on zoom. I can say confidently, that while I appreciate what video conferencing does to help keep us connected, I am dissatisfied with it as a tool in this specific application. So, I built something quiet, a virtual zendo we could share while we sit, one that emulates the physical experience of sitting with others, one that doesn’t open a window into our own lives but pulls back the curtain on the space we occupy together.

The tool is the virtual zendo. An online portal where users can join a meditation.
A series of timers will control what the user sees displayed on their screen, to let them know they’re
waiting for a session to start or that the session is already under way or that they’ve finished and
it's time to dust off their cushion and put it away.
And, all the while, this application shows you how many people are sitting with you.
To help show that in a time of isolation, even when we’re by ourselves that we are part of something bigger,
that we are not alone.

## Screenshots
Landing page after you first open the app
![Home page](/public/zendo/home.png)
User portal
![User portal](/public/zendo/portal.png)
Admin Add Event Page
![Admin add event page](/public/zendo/add.png)
About page
![About page](/public/zendo/about.png)

### Prerequisites
 - This project uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation
1. Type `npm install` to install all dependencies
1. Create Postgres/Postico database per information in `database.sql`
1. Type `npm run server` to start your NodeJS server
1. Type `npm run client` to launch the react app on your browser

## Built With
* NodeJS
* Postgres/Postico
* React
* Redux
* Express
* Passport

### Usage
* As a User
1. After logging in, a user will see a list of the most recent upcoming events. They can join an event by clicking the corresponding button.
1. A series of timers will run the next three views.
  1. The first view tells the user when their session will begin and at what time. When the session beins, a tone will sound.
  1. The second view will show the user how many people are sitting in meditation with them. When the session is done, another tone will sound.
  1. The third view will show the user a koan and allow them to save it to their own library. A button will navigate them back to their portal.
1. From the portal, the user can view a list of all upcoming events or view the koans they've previously saved.

* As an Admin:
1. After logging in, the admin can create/delete events and koans as well as viewing all the records from the zendo.
1. In the 'event' view, the admin can set the time for the event to start, as well as the duration of the session.
1. In the 'koan' view, the admin can add additional koans to the library accessed by the user after a meditation.
1. The 'records' view will show the admin how many people have joined a session, and how many have left early


### Acknowledgements
Huge thanks to everyone at [Prime Digital Academy](http://primeacademy.io)for teaching me the skills I needed to build something like this. Huge thanks especially to [Dane Smith](https://github.com/drhowser), [Kris Szafranski](https://github.com/kdszafranski), and [Edan Schwartz](https://github.com/eschwartz).

Thanks also to my classmates, the whole Zhu Cru, you're always thoughtful, inquisitive, helpful!





## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account.



## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
