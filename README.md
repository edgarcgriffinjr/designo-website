# Frontend Mentor - Designo agency website solution

This is an incompplete solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). It is still currently in development and will be completed soon

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![](./assets/screensho.png)


### Links

- Solution URL: [Github Repo](https://github.com/edgarcgriffinjr/designo-website)
- Live Site URL: [Vercel Site](https://designo-fem.vercel.app/)

## My process

### Built with

- CSS Grid
- [React](https://reactjs.org/) - JS library
- [SCSS](https://sass-lang.com/) - CSS Preprocesser

### What I learned

I learned a ton from this project because I decided to test myself in some concepts I didnt feel very strong in. 

##### CSS Grid
I had a ton of different challenges with it due to formatting and swapping from a column structure to a row structure and sizing. In reaseach I found that using 'fr' units makes things a ton easier and it also makes it so the gap you implement will not be an issue with max-width. When I used rems for the templating I was getting some overflow which was frustrating so towards the end of the project I was able to use 'fr' units. This also allowed me to split my sections and cards into more fractioned of sections like 2/5th or 3/5ths.

###### SCSS
SCSS was a topic I wanted to get mor into simply becuase of the possibilties of nesting and the usability of it. With this being a larger project, I researched some of the ways to create a structure to write some of the SASS. I found multiple different ways to do this including the 7-1 method and also the 5-1 method, and in the end I decided on a hybird which including just 3 folders. 

Using SASS also gave me alot of ways to reuse code so that I wasn't coding the button format everytime and overall they stayed very uniform. I was able to code how small cards, large cards, top cards, etc.. in one instance and then cover those bases from everywhere else using simply a classname.

###### React Principles
Although I think I am pretty well versed in some of the concepts in React, React was really able to flex its muscles in this project due to the reuse of components. I was able to reuse the bottom Contact card on all of the pages will only writing the code once, i was also able to use the Locaction Buttons component throughout About and Contact page. 

React is a great tool for these larger projects because in the end, it keeps the files that matter simple and easy to process. This being a multi-page project, I was worried that I would be writing code for every page over and over and this greatly shortened the time it took to do this because of the fact that I could react things. 

Finally, the use of ReactComponents and static objects to import into the design pages was extremely helpful and useful. I was able to create almsot a sudo-database that could be easily added to and display all of the contents on to a seperate component with a few words and duplication


### Continued development

From here, there is a lot to be done and they could be improved upon should I come back to this project in the future. 

One of the first things cthat could be improved upon is my approach and preparation. Although I felt as if I was able to write less code, I feel this could've been done in many more places to make the code base a lot cleaner than it is 

The second point is the SASS folder structure, although it is my first time using it on such a large app, getting more comfortable with the structure will be extremely pivotal in writing less code for more components.

Another point would be how I approach backgrounds and designs through CSS or directly in the HTML markup.

My final point of future improvement would be how my work flow on future projects, I felt that I could complete this in about 3 days or about 18 hours. I finished it in about 25 hours and I felt this could've been shortened significantly if I set up a workflow from component to component instead of jumping around and getting distracted on different  parts of the website.

## Author

- Website - [Edgar Griffin](https://www.edgargriffin.com)
- Frontend Mentor - [@edgarcgriffinjr](https://www.frontendmentor.io/profile/edgarcgriffinjr)
- LinkedIn - [Edgar Griffin](https://www.linkedin.com/in/edgarcgriffinjr/)

