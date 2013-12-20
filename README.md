Sample-Nodejs-WebApi-app
========================
Node js App to hit Web Apis and autheticate with Github using express ejs and angular js

The app has 3 features:

1. Basic usage of Node app using express ejs, to hit an open source Web Api. Api used in this app is from myweather2.com. 

  Description:
    	- Its a weather api that returns the current day's weather and also 2 days weather forecast.
	    - It accepts a US zip code as a parameter and an api key that can be obtained by registering at the site.
	Functionality	
      - Render an html page with a textbox and submit button to accept zip. Validate zip on client-side using           javascript. 
      - If zip is valid then only post should occur.
	  - On post, hit the weather api with the associated zip and api key.(Call weatherDetails func of weatherController.js)
	  - Accept that data and parse to json and store. 
	  - Render this data in a proper format to ui. 
  
     * Note: All your views are stored in views folder. Need to define that in app.js as express specifies that structure. Run the app using node app.js
	 
	  Requirements:  
	  - Install Node js and npm.
	  - Install express, ejs
	
	  
2.	Github Authentication with Nodejs using Passport Module using OAuth Github Strategy.
    
	Description:
	 - A user should be able to login using github credentials and a 3rd party app(i.e. your app)
	   that has been authenticated by github should be able to access user's github profile if the user allows access.
	 - Hit a github api to get that authenticated user's github profile.  
	   
	Functionality:   
	
	    - Passport requires a strategy- we use OAuth Strategy with github.
	    - OAuth uses a 2-step web authentication flow. It lets external apps request authorization to private details in a user’s GitHub account without getting their password.
        - To know more about the oauth flow, go through http://developer.github.com/v3/oauth/#web-application-flow
        -- Create an app on github 
	       - Go to github.com - Go to account settings - Applications - Register new application - enter the details n register.		
        - You will get a Client Id and Secret that is used with passport to authenticate the user .
		- Initialise passport with githubstrategy and define the client is, secret and callback url.
		- Use passport.authenticate to authenticate the user to github and then to authenticate with app.		
		- To use Passport in an Express application, configure it with the required passport.initialize() middleware.
        - To use persistent login sessions  passport.session() middleware is used.
        - To maintain session - use serializeUser and deserializeUser functions.
		- Once the authentication is done, you receive an accessToken, that can be used to access the user's profile.
		- When the user has logged in the app - use his GithubId to hit the api to call his profile. 
		  (You can even get his profile after authentication.Need not hit another api. We are hitting the api for demo)
	      -- To hit GithubApi - we use request module - we can make https requests also.
		  -- Send headers for this api - User-Agent.
          -- Get the data returned from api, parse it to json and send it to ui.
		  
	Requirements:
	- Install passport-github
	- Install request module
	
3. Use Angular Js with Node js and Express ejs to create single page application. Avoid postbacks.
     Description:
	 - When the user enters any valid GithubId, that user's profile is displayed on the same page.
	  
	 Functionality:
	 - When the user enters a GithubId, rather than a post, angular controller function is called that hits the api to access the profile.
	 - This all happens on the client side. As these files are stored on client-side and not on the server. We are not using node controllers here!
	 - The data returned is saved as json in the model.
	 - This data model is binded to the view that called this controller.
	 
	 Implementation:
	 - Create a public folder and angular folder inside it. Include all the angular js files here.
	 -  Create an app.js that defines angular app and routes to controllers .
	 -  Create a Controllers.js that defines all your controllers.
	 - You can define your models and functions inside this controller.
	 - Inside the function, use $http module of angular js to hit the githubApi
	   - On success - Data returned can be stored in the model and displayed on the view. 
	   - On Error - display a proper error message
	 - Include all these files in your view. 
	   - Add ng-app and ng-controller tags to refer to the app and controller respectively
       - Use ng-model to bind the view in the model. - bind the entered githubid to model.
       - Use ng-click to call the function to hit api - send githubid as parameter.
	  
	   
    Requirements:
	- Include angularjs files in your source code.
	
