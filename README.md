## Description

This app has a simple React front end with buttons that allow me to clock in, clock out, take a day off, and save shift data to Google spreadsheet. I can then submit my time with a Puppeteer script that automatically crawls my employers Banner time sheet web app.

### `npm run dev`

Runs the express server and React client concurrently.

## Goals:

-Restructure Components to have each button be an individual component
-Refactor TimeStamp to be a functional piece of state in the client rather than a vanilla JS class
-Merge autoBanner.js and sheet.js to create a more extensive server that serves sheet data and serves the puppeteer script
-Add more UI components like an on screen timer, display of the time sheet in app\
-Track gross income based on hours, other use of data etc...\
-Host project\
-Host project as mobile app
