# Project Name
Training for testing with Jest

## Description
This project is a starting point for building web applications using Webpack as the build tool and Bootstrap for styling. You can use this as a template and add more dependencies and features as your project evolves.

## Getting Started
Follow these instructions to validate the exercises.

- Exercise0: Create simple functions and write tests to validate them.
- Exercise1 to Exercise5:  Follow instructions below.
- Exercise6: Create more complex functinos and write tests to validate them.

## Prerequisites
- Node.js and npm should be installed on your machine.

## Installation
### Clone the repository:
```
git clone https://github.com/your-username/your-project.git
```


### Navigate to the project directory:
```
cd your-project
```

### Install the dependencies:
```
npm install
```

## Usage
### Development
If you want to make changes to the project, you can run the development server:

```
npm run dev
```
This will start a development server with hot-reloading enabled.

### Build
To build your project for production, run:
```
npm run build
```
This will create a dist directory with optimized and minified assets.

# Exercises

## Exercises Zero
- Create a function that adds two numbers and write a test case for it
- Create a function that subtracts two numbers and write a test case for it
- Create a function that multiplies two numbers and write a test case for it
- Create a function that checks if a string contains a specific substring and write a test case for it
- Create a function that reverses a string and write a test case for it
- Create a function that capitalizes the first letter of a string and write a test case for it
- Create a function that checks if a number is even and write a test case for it 
- Create a function that converts temperatures from Fahrenheit to Celsius and write a test case for it

## Exercise 1
### Instructions:

- In the index.html file, there is a button with the ID add-class-button and a <div> with the ID element. The <div> already has an initial CSS class named initial-class.

- In the script.js file, write the addClassToElement function to add a CSS class to the element div when the button is clicked. Use the classList property to add the class.

- Make sure the class is applied correctly, and the element's appearance changes when the button is clicked.

## Exercise 2
### Instructions:

- In the index.html file, there is a button with the ID click-me-button and a <p> with the ID message.

- In the script.js file, write the showMessage function to change the text content of the message paragraph when the button is clicked.

- Verify that clicking the button triggers the event handler and updates the message as expected.

## Exercise 3

### Instructions

- In the index.html file, there is a form with the ID email-form, an email input field with the ID email-input, and a validation message paragraph with the ID validation-message.

- In the script.js file, write the validateEmail function to validate the email entered by the user. You can use regular expressions or simple checks for this exercise.

- When the form is submitted (by clicking the "Submit" button), prevent the default form submission behavior, and call the validateEmail function to display a validation message based on whether the email is valid or not.


## Exercise 4
### Instructions:

- In this exercise, you'll work with an API module (api.js) and a script file (script.js).

- In the api.js file, there is an fetchData function that should perform an API request to retrieve data (you can use a fictional API URL or mock data for testing purposes).

- In the script.js file, import the fetchData function and use it to fetch data when the page loads (DOMContentLoaded). Display the fetched data on the page.

## Exercise 5
### Instructions

- In the index.html file, there is a <div> with the ID hover-area and a <p> with the ID interaction-result. The <div> represents an area that users can hover over.

- In the script.js file, write an event listener to track when the user hovers over the hover-area. Update the text content of the interaction-result paragraph to provide feedback when the user hovers over the area.


## Exercise 6: 

- Create a function that finds the maximum value in an array of numbers and write a test case for it
- Create a function that removes duplicate values from an array and write a test case for it
- Create a function that checks if an array includes a specific value and write a test case for it 
- Create a function that sorts an array of numbers in ascending order and write a test case for it
### License
- This project is licensed under the MIT License.

### Acknowledgements
- Bootstrap: https://getbootstrap.com
- Webpack: https://webpack.js.org
- Other acknowledgements or credits go here.
