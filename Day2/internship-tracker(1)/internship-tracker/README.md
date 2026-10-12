# Internship Tracker

Track internship applications from wishlist to offer. Frontend only; data is saved in the browser with localStorage.

## Features
- Add applications (company, role, status, date, link, notes) with validation
- Change status from a dropdown on each card, or delete an application
- Search by company or role and filter by status
- Summary counts per status
- Data persists after refresh (`internshipApplications` key)

## Tech
React, Vite, JavaScript (JSX), Tailwind CSS, localStorage

## React concepts
Components, props, useState (lazy initial state), useEffect (save to localStorage), controlled forms, map() with keys, filter(), conditional rendering, lifting state up

## Run
```
npm install
npm run dev
```

## Structure
- `src/App.jsx` – holds all state (applications, search, filter)
- `src/components/` – StatsBar, ApplicationForm, FilterBar, ApplicationCard
- `src/data/statuses.js` – status names and badge colours
