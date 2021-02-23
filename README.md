
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
- [Docker](https://docs.docker.com/engine/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

## Installation
1. Run `docker-compose up` to start your postgres server
1. Type `npm install` to install all dependencies
1. Type `APP_DB_USER=zendo_app APP_DB_PASSWORD=todo_changeme_find_your_seat npm run server` to start your NodeJS server
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




## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy
