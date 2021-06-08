Created by: Laurin Penland
Date: 5/5/2021

To populate the mongo database, you can import the included csv file into mongo.
1. In your terminal, navigate to to the project directory.
2. Run $ mongod
3. Enter the following command:
    $ mongoimport --type csv -d penland-final-project -c products --headerline --drop productDescription.csv
4. To learn more about this, see https://kb.objectrocket.com/mongo-db/how-to-import-a-csv-into-mongodb-327

To start the api:
1. First you'll need to install the node modules and start node. Navigate to the directory in your terminal, and type the following commands:
    $ npm install
    $ node .
2. Open a new terminal tab, navigate to the api directory. You need to start MongoDB. Type the following command:
    mongo

To start the client:
1. You'll need to install the node modules and start angular. Open a new terminal tab, navigate to the client directory, and type the following commands:
    $ npm install
    $ npm start

Unresolved problems and things I wished that I had done:
1. I tried to disable the form submit buttons until the forms were valid; however, even when the forms seemed valid the button was still disabled. So, I did not add this feature.
2. I would like for the forms to be more user friendly. I had hoped to add more interaction and messages when the user clicked on the submit, update, and delete buttons.
3. I'm not sure that I should be using ngModel to pre-fill my updateProductForm, but it works?
4. I had originally planned for the database to have more collections. I would like to have more control over data, especially product type.
5. I would like for the product detail page to be more responsive for smaller screens.
6. I still remain confused about where to import modules. I attempted to only import them into the module.ts files, but I kept getting errors. So, I have imported modules into the module.ts files and the component.ts files.
7. My api has some unused endpoints.
8. Some of the data that I imported from my csv file was not good; some of the image links are broken.
9. I still need to make an svg image for the mylar avatar.
10. I would like to add an error route and perhaps an about view.
11. My navbar menus are a little dim and needs more contrast.
