## To start the project:

1. Clone the repository
2. Run `npm install` in the root
3. Run `npm start`

## Project

This small prototype app fetches a list of sites, which the user can sort by name or size/power on the Portfolio/Home page. The user can click on a site to bring them to a Site page, which displays the site on a fullscreen map.

The project is built with React and TypeScript.

## Data

I have returned data from custom hooks, along with loading and error states which mimic React Query. This is how I would handle data fetching and state management in a real world scenario.

## Styling

I have used plain CSS to demonstrate my skills in the fundamentals and for more control to achieve a more pixel perfect implementation. I have chosen CSS Modules as this helps in scoping CSS in frameworks like React.

The app is responsive down to 220px width screens.

## UX choices

I have tried to keep the UX as convenient and straight forward for the user as possible. Some choices made to this effect include:

- Closing navigation menu automatically on scroll
- Being able to click through to the Site page by clicking the map markers
- Making the SiteList component a clickable link, while disabling the navigation when clicking on the clock icon. This enables the user to see the tooltip with the start and end times on mobile where hover is not available.

## Deployment

[The live app can be seen here](https://main.djrevr18pucrj.amplifyapp.com/). It is deployed on AWS Amplify with my own Google API key.
