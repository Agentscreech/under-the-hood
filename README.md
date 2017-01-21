Under-the-hood
===============

Webapp that lets you track your car maintenance

If you are cloning this to work on a local server, just clone and then run `npm install` to get all the dependencies up and running.

If you want to use it live, it's available at:

http://under-the-hood.herokuapp.com  

This is hosted by Heroku in a developer tier so it might take a few seconds for it to spin up and serve the site.

### Usage

You can either Sign Up or Log In in the top right corner of the page.


If you would like to see a user profile without going through the sign up process, you can use a test account that I have set up.

Email: test@test.com
Password: tempword

If you want to add a new car to your garage, simply press Add Car and then follow the drop down menus.

![garage](/public/img/garage.png)

Logging a maintenance item is just as easy.

In the log page, all the buttons are self explanatory.

![log](/public/img/log.png)


### Technologies

This is running a [Node.js](https://nodejs.org/en/) with [Express]http://expressjs.com/ and [Sequelize](http://docs.sequelizejs.com/en/v3/) backend.

Front end is [jQuery](https://jquery.com/) and styled with [Boostrap](https://getbootstrap.com/).

API used is [Edmunds.com](http://developer.edmunds.com/api-documentation/overview/)

### Future Features

* Add more types of services to be logged with an Other option to fill in your own.
* Expand API limit.  Edmunds only grants you 25cpd initially. Selecting a car makes 2 calls, so the app could run out of calls in a hurry.  
* Use data from API to recommend next service based on last mileage logged.
* Update visual styling and reduce load times.
