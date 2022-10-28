<h1>King of the Hill</h1>

<img src="kingofthehill.gif" alt="gif of webpage" href="https://kingofthehill.cyclic.app/">


** WARNING - this repo contains some ugly code. Proceed with caution **

King of the Hill is a full stack web application that allows user to keep track of the "king" based on their personal interests. The original app was created to keep track of movies, cafes, and diners. Users can add items to their list and see a ranking of where each spot stands. The current "king" is shown on the main page underneath each collection.

Link to project: https://kingofthehill.cyclic.app/

<h1>How It's Made:</h1>

Tech used: HTML, CSS, JavaScript, Node.js, EJS, MongoDB, Tailwind CSS, Daisy UI

The original idea for King of the Hill was actually a movie tracker. My girlfriend and I wanted a way to keep track of our combined ratings of the movies we had watched. As we continued to rate diners, cafes, concerts, etc. - I decided to change the movie tracker into a way to rank a variety of categories. For now it is being used mostly on a personal level. Other tools used include:

session, mongoose, passport, passport-local, bcrypt, validator, morgon, nodemon, dotenv, flowbite, method-override

<h1>Optimizations:</h1>

There are many things that still need to be tweaked on this app. The biggest optimization is allowing users to add new collections. Allowing a user to create a new rank list and the criteria to be tracked for each list member. Some other things include:

- fixing the client side Javascript (bad baddddd code)
- adding a modal button for users who add a movie using the API (instead of the current form that is inside the table)
- getting the Tailwind CSS and Daisy UI installed with the project. Right now I am using CDN script tags (a big no no for production, I know) because after weeks of trying to get it to work, I had to move on. 

<h1>Lessons Learned:</h1>

This project was ROUGH and UGLY. I learned so many hard lessons. First, I learned the importance of coming in with a solid framework for the project. What started as a simple movie tracker using an API quickly became an ever evolving project. As the goalposts continued to move, I failed to take the time to really etch out the new vision.

I was enjoying Tailwind CSS and Daisy UI so much until I broke something and it completely stopped working. I spent days, probably at least a week, trying to get the output.css file to render. No luck. In the end, I had to cut my loses, use the CDN script (I know), and live to see another day. How much time is TOO much time to spend on a problem?

Production vs. Development. Most of my other projects seemed to run pretty smoothly once they were hosted on Netlfiy, Render, etc. This one was a nightmare. It seems like a million things broke and continued to break once the application went 'live'. 

Mobile first design. I have heard how important mobile first design is many a times. It hit me like a brick wall this time. I decided to enter media queries at the very end of production and paid the price. Between Daisy UI and whatever other weird CSS problems I created, I ended up having to use the *gasp* !important tag to make any of them work. I know....BAD practice. 

This whole project felt like a masterclass in what not to do. I can honestly say I hate most of the code I wrote and it is hard to even look at it. That being said...this app does what it's meant to do. I am going to take all the lessons I learned here moving forward. Hoping to find the resolve to come back and fix the code sometime in the future....