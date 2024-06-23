// config.js
export const config = {
  url: 'http://www.hookerhillstudios.com/Login',
  validCredentials: {
    email: 'testuser@testuser.com',
    password: 'Testing123!',
  },
  loginButtonText: 'Login',
  expectedUrl: 'https://www.hookerhillstudios.com/',
  google: {
    url: 'http://www.google.com',
    searchQuery: 'Selenium WebDriver',
    expectedTitle: 'Selenium WebDriver',
    homeTitle: 'Google'
  },
  navigationTest: {
    baseUrl: 'https://www.hookerhillstudios.com',
    linkText: 'Request A Quote',
    expectedUrlPart: 'Quote'
  },
  formSubmissionTest: {
    url: 'http://www.hookerhillstudios.com/Login',
    credentials: {
      email: 'testuser@testuser.com',
      password: 'Testing123!'
    },
    loginButtonText: 'Login',
    expectedUrl: 'https://www.hookerhillstudios.com/'
  }
};
