"use strict";

var Nightmare = require("nightmare");
var should = require("chai").should();

var nightmare = Nightmare({
  show: true
});

// STORY: As a developer nerd, I want to be able to take courses on web tech.
nightmare
// Visit login page
  .goto("https://www.codecademy.com/login")
  // Enter username.
  .type("#user_login", "ResilD")
  // Enter password.
  .type("#user_password", "dummy*password")
  // Take a screenshot of the login form.
  .screenshot("login.png")
  // Click login button. Always check if you've done this where necessary!
  // It's easy to forget.
  .click("#user_submit")
  // Wait until the  link to the course catalog renders.
  .wait("a[href='/learn/all']")
  // Click course catalog link.
  .click("a[href='/learn/all']")
  // Scroll down a few hundred pixels.
  .scrollTo(500, 0)
  // Take a screenshot and save it to the current directory.
  .screenshot("courses.png")
  // End test
  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })
  // Catch errors
  .catch(function (err) {
     console.log(err)
   })
