# Building App

Simple management app.  

Has a Dashboard, Buildings and Contact page.

## Requirements

- NPM
- Node

## Running instructions

Open two terminals.

In one of the terminals run:

```bash
cd backend
npm i
npm start
```

and in the other:

```bash
cd frontend
npm i
npm run dev
```

Then navigate to http://localhost:3000 in the browser.

## Backend

A node application using the express framework.

## Frontend

A react application built of top of nextjs, scss for styling.

## Considerations

There's quite a bit I could have done on this project but simply ran out of time.

- Backend side validation of data using 'class-validator' or 'express-validator' packages.
- Could have used a css framework like material UI or tailwind but feel it goes against the nature of this.
- More testing on backend, and a few front end tests.
- Dockerised mongodb or postgre server for data persistance.
