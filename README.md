# Sustainable Development Goals (SDGs) project

## Setup
    Below is the steps rerquired to get the project up and running

### Requirements
- Nodejs
- Typescript
- MongoDB

### Getting started
- Clone the project from github repository
- Run **npm install** or **yarn instatll** from the root directory of the project
- Create **.env** file, and copy the content of **.env.example** to it, then supply the information

### Development
- use the command **npm run start:dev** to run the application in development

### Production
- use the command **npm run start** to run the application in production

### Logging

- Use winston (instead of `console.log`) to log all errors, make use of the exported logger in (src/helpers/logger). 

You can log error base on their levels:

-   error
-   warn
-   info
-   verbose
-   debug
-   silly

For example: `logger.error("An error just occured")`