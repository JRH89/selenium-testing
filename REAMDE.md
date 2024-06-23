# Selenium Testing

This project provides a suite of Selenium tests for automated browser testing. It includes various tests such as form submission, navigation, and smoke tests. The project is designed to be easily configurable and extendable to meet different testing needs.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
    - [Editing the Configuration](#editing)

## Installation

Follow these steps to install and set up the project:

    1. **Clone the repository**: First, you need to clone the repository to your local machine.

    ```bash
    git clone https://github.com/jrh89/selenium-testing.git
    ```

    2. **Navigate to the project directory**: Change your current directory to the project directory.

    ```bash
    cd selenium-testing
    ```

    3. **Install dependencies**: Install all the necessary dependencies using npm.

    ```bash
    npm install
    ```

## Usage

To run the tests, use the following command:

```bash
npm test
```

## Configuration

The project includes a config.js file where you can set various configuration options to customize the tests according to your needs. This file includes URLs, credentials, and other parameters used in the tests.

### Editing the Configuration

To customize the tests, follow these steps:

    1. **Open the config.js file**: Locate and open the config.js file in the project directory. This file contains configuration settings for various tests.

    2. **Modify the configuration settings**: Update the values in the `config.js` file to suit your testing requirements. Below is an example config.js file with explanations of each field:

    ```javascript
    // config.js
    export const config = {
    url: 'http://www.hookerhillstudios.com/Login', // URL of the login page
    validCredentials: {
        email: 'testuser@testuser.com', // Email for login
        password: 'Testing123!', // Password for login
    },
    loginButtonText: 'Login', // Text of the login button
    expectedUrl: 'https://www.hookerhillstudios.com/', // Expected URL after login

    google: {
        url: 'http://www.google.com', // URL for Google homepage
        searchQuery: 'Selenium WebDriver', // Search query for Google
        expectedTitle: 'Selenium WebDriver', // Expected title after search
        homeTitle: 'Google' // Expected title of the Google homepage
    },

    navigationTest: {
        baseUrl: 'https://www.hookerhillstudios.com', // Base URL for navigation test
        linkText: 'Request A Quote', // Text of the link to navigate
        expectedUrlPart: 'Quote' // Part of the URL expected after navigation
    },

    formSubmissionTest: {
        url: 'http://www.hookerhillstudios.com/Login', // URL of the form submission page
        credentials: {
        email: 'testuser@testuser.com', // Email for form submission
        password: 'Testing123!' // Password for form submission
        },
        loginButtonText: 'Login', // Text of the login button
        expectedUrl: 'https://www.hookerhillstudios.com/' // Expected URL after form submission
    }
    };
    ```

    3. **Example Customization:** If you need to test a different login page with different credentials, update the `config.js` as follows:

    ```javascript
    // config.js
    export const config = {
    url: 'http://www.example.com/Login', // Update URL
    validCredentials: {
        email: 'your-email@example.com', // Update email
        password: 'YourPassword123!', // Update password
    },
    loginButtonText: 'Sign In', // Update button text
    expectedUrl: 'http://www.example.com/dashboard', // Update expected URL

    google: {
        url: 'http://www.google.com', // URL for Google homepage
        searchQuery: 'Selenium WebDriver', // Search query for Google
        expectedTitle: 'Selenium WebDriver', // Expected title after search
        homeTitle: 'Google' // Expected title of the Google homepage
    },

    navigationTest: {
        baseUrl: 'http://www.example.com', // Update base URL
        linkText: 'Contact Us', // Update link text
        expectedUrlPart: 'contact' // Update expected URL part
    },

    formSubmissionTest: {
        url: 'http://www.example.com/Login', // Update URL
        credentials: {
        email: 'your-email@example.com', // Update email
        password: 'YourPassword123!' // Update password
        },
        loginButtonText: 'Sign In', // Update button text
        expectedUrl: 'http://www.example.com/dashboard' // Update expected URL
    }
    };
    ```

    4. **Save the config.js file**: After making the necessary changes, save the file.

    5. **Run the tests**: 

    ```bash
    npm test
    ```

    By following these steps, you can customize the Selenium tests to work with different websites, credentials, and other parameters, making the testing framework versatile and adaptable to various use cases.

