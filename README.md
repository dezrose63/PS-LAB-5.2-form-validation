# Interactive Registration Form with Validation

## Project Description
This project is an interactive web-based registration form that implements comprehensive client-side validation using JavaScript. The form validates user input in real-time, including username requirements, email format validation, and strong password enforcement. It demonstrates modern form handling practices by preventing default submission behavior and providing user-friendly custom error messages.

## School/Program
**Per Scholas** - Software Engineering Program

## Date Completed
2024

## Programming Languages
- HTML5
- CSS3
- JavaScript (ES6+)

---

## Reflection Questions

## How did event.preventDefault() help in handling form submission?

Prevent default helped by preventing the default form values from automatically processing the form, allowing me to custom define what I wanted the forme to do, which in this case, was to create custom error messages. 

## What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML Validation is simple to use and doesn't require any additional customizations, it handles the error codes and highlighting. On the other hand, javascript does allow you to cusomize error messages, which often is necessary in order to give special instructions to the user - or even just to make the prompts more friendly and inviting to your page. 

## Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

localStorage is used to remember a logged-in user's name, pre-fill out form fields, and saves user preferences. THe limitations are that it is not secure for storing sensative information because it's not encrypted.

## Describe a challenge you faced in implementing the real-time validation and how you solved it.

I was trying to figure out the code that was given to us, but kept getting errors. So, I googled how to create forms and found a few solutions on mdn and w3schools, and I was able to figure it out that way. 

## How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I created the user messages myself in javascript and I used a if statement to verify that that the form was entered by user correctly, which displayed an error prompt to the user telling them what needs to be changed if their entry was incorrect, and if everything was entered correctly, and alert was triggered with the message "registration successful". 
