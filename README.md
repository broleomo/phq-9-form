# phq-9-form
PHQ-9 Form


Instructions for running the code locally: (It might be helpful to have 2 terminal tabs open, one for client and one for server)
- git clone this repo
- From the root of the project run yarn
- cd client
- run yarn
- run yarn start
- client: cd ..
- run node server.js

You should then be able to view the application at localhost:3000. Keep your dev tools open and click on the Network tab before submitting the form. After submission, you should see a post request and all of the submitted answer data that is getting sent to my MongoDB instance. You should also be able to see this information in your running terminal that is running the node server.


Description of the problem and solution

Problem:
- Client needed a UX for administering a diagnostic screener as a multiple-choice questionnaire that determines symptom severity for disorders such as depression, anxiety, etc.
- Client needed a way to easily suggest standardized clinical assessments after completing a screener.

Solution:
- I created a multistep form to track answers to and returns the results of the PHQ-9 questionare with React.
- I created an answers service and route with express and hooked up a MongoDB to store all submitted answers to my db.
- Answers are submitted after clicking the "Submit" button at the end of the form

Reasoning behind technical choices
- I decided to keep it all within my stronger wheelhouse (javascript - Node/Express & React) for client and server
- I created a MongoDB database to storing answer submissions with a post request. (I can demo this portion.)
- I utilized Material UI to quickly be able to quickly produce React components
- Utilized CSS modules to create styling that adds unique IDs to classes, to avoid any overriding of className variables


How would ensure the application is highly available and performs well?
- I would ensure my application ran some accessibility testing, and might also add in my components to a Storybook instance (this tool has a lot of built in accessibility tools that are really nice)
- I'd also add some tests to my code, likely using react testing library and run these tests with jest, and connect them to a CI with a dashboard for logs for troubleshooting errors, build fails, etc.

How would you secure it?
- I would secure this application with something like Oauth to add in checks (and likely a login of sorts) before rendering and granting access the form

What would you add to make it easier to troubleshoot problems while it is running live?
- I'd add in react testing library tests to make sure my state management is up to snuff and updating as I'd expect while stepping through the form

Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
- I left out creating a way for the screener to suggest different assessments, and instead I created the full UX for one of the assessments
- What I'd have done with more time, would be to have fleshed out the API further to store more of the data for multiple assessments
- I also could have added some error handling to the form and persisted the "selected Item" for each question when stepping through the form

Link to your resume or public profile
- LinkedIn profile: https://www.linkedin.com/in/brooklynnmoor/
- Github profile: https://github.com/broleomo
