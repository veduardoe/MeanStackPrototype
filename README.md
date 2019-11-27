# AngularNodejsMongoose Prototype
Technical Test Angular6 + Nodejs + Mongoose

# How to make this project works
In this repository there are 2 folders named "Client Component" and "Server Component", one include de "Frontend App" implemented with Angular 6 + Angular Material Design and the another one include "The Services in Nodejs" using Express and Moongose.

# Installations necessary to run the Aplication or Deploy for Testing
1. Install Nodejs + NPM from https://nodejs.org/
2. Install Angular Cli from https://cli.angular.io/. Follow the instruction using NPM. Note: Be sure that you are downloading the latest versión for Angular 6.

# Steps to run Aplication

# Starting Nodejs Service

Once you made the Pull from Repository, using the PC Console, go to that folder and execute "node index.js" to start the service in the port 3000 by default. if everything is Ok, maybe you'll see deprecation warning but omit them. You must see "Listening on Port 3000"

Node use 3 services:

http://localhost:3000/createCollection to copy the data from HN and insert in the MongoDB Remote Server that I have created for testing and don't make you create a Local Server. Note: I did it, it's not necessary deploy the API again, if you do it, the data will copy to collection may duplicated, because I am assuming that HN Api return only new posts.

http://localhost:3000/getNews to retrieve the data from MongoDB using Moongoose.

http://localhost:3000/delete to delete one item from MondoDB Collection.

# Starting Angular Server or Deploy 

Doing the same steps from Nodejs Service, go to console, find the folder "Client Component" and execute "npm install" to install the dependences necessary to deploy Frontend App.

After that in the same folder, execute the command "ng serve" to start the Deployment of Angular in the port 4200 added by default. The console should show a message "Compiled successfully". If you want to deploy, just make "ng build --prod" to create a dist folder with the files, but I think it is not necessary.

# Ready for testing

So, Go to: http://localhost:4200 to test the Application

Note:
- Some styles maybe they're not how you show in the instructions, but it's because Angular Material.
- If you're experiencing an error. Please, let me know to give you support.
- Please contact to my email veduardoe@gmail.com if you have any questions or issues.

Greetings.
