#Investment Calculator

##Introduction
This project is designed to help with calculating the Mutual fund investment. The primary logic is for user to provide amount that needs to be invested along with start date and end date for the calculation. Based on the dates/time difference the new value of fund is calculated and presented back as result.

##Technologies
This application is developed with ReactJs-v 16.13.1, along with it two library references have been added 
1-react-bootstrap = This allows us to use the bootstrap classes and unify the styling across the application
2-react-date-picker = This help with predesigned datepicker with aditional methods and attributes that can be used.

##Launch
The requirements to launch/work this application are NodeJs and Git
Once the application folder is setup, need to run the command "npm install" this will install all the node_modules that are required/used for the project.
After that from the root folder location , run command "npm start" this will start the application on localhost. By default the Port 3000 is used, if its busy the application will prompt for using different port.

##Approach
The logic for this application starts from App.js file inside src folder.
This file references the root component that is shown on the screen "InvestmentForm", InvestmentForm consists of the basic for design that in HTML. Along with that the initial state is also set in this file, this state holds value for the input fields and on change this value is updated.
When the user clicks on "Calculate" button , validation is set to check the Amount that is added , it should not be 0 or an error is thrown.
When the form values are correct the start-date , end-date are formated to required date formate. Then these dates and investment amount are passed as parameter to "CalculateInvestment" function. This function is setup in a different file to perform the calculation logic and return back the result.
In CalculateInvestment.js file when the parameters are received it looks through the initial.json file data, to parse through the dates and match the fromt-date and end-date and pick up the Net Assest Value for those respective dates.
If the NAV for from-date and to-date are available the calculation is done and final amount is returned.
If any of the provided date does not have a NAV value assosited with it then and error message is thrown to inform that particular date does not have NAV value , to user has to change date and submit again.