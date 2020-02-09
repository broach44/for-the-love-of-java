# For the Love of Java

## Description
This application was designed to assist users in finding a coffee shop that matched their needs and allow them to review and rate coffee shops they visit based on a few different features that many people look for in a coffee shop.  I was inspired by a few issues experienced while trying to work on group projects at a coffee shop where the environment was extremely loud and made it very difficult to collaborate with team members.

Within this app a user can view current coffee shops in the database.  They can view the visits other users have logged, log a visit of their own, and if desired they can filter down to just view their own entries.  If a user makes a mistake or would like to delete an entry they have control to alter their own entries as they see fit.

As the application grows users can search through the list of coffee shops to return the one they are looking for. If the shop they are looking for does not appear in the list then the user has the option to look for more shops through the Yelp Fusion API or they can manually add a shop of their choosing.

## Technologies Used

- Single page web application created using **React**
- **React routing** was used to navigate throughout the application
- Full **CRUD** is completed on the log visit collection using Firebase as the database
- **Reactstrap** was used to create the popup modal for the user profile creation
- **Yelp Fusion API** is used through an **axios** call to return more coffee shop results to the user
- **Bootstrap** for grid layout control and simple margins
- **Sass** for all other styling
- **Moment.js** is used for correct date structure on the visit logs

#### Versions:
- React: 16.12.0
- Reactstrap: 8.4.0
- Axios:  0.19.0
- Bootstrap:  4.4.1
- Firebase: 7.6.1
- Moment: 2.24.0
- Node-sass: 4.13.0

## Screenshots

#### Login View: 
Users will login using Google popup 
<Insert login view>

#### Profile Creation:
Users will be prompted through an automatic modal to complete a profile in order to use the application.  
<Insert profile creation view>

#### Home View:
Users will be brought to the home/welcome page after creating their profile.
<Insert homeView>

#### Shops View:
Users can look through the shops that are currently in the database.  As the list grows there is a search box to find the shop they would like based on shop name and address.
<Insert shopsView>

#### Results Not Found/Yelp Results:
If a user does not find a shop that they are looking for they will be presented with an option to further search which calls to the Yelp Fusion API and returns additional results based on a 20 mile radius from the zip entered into the user's profile.
<insert noResultsView>
<insert yelpResultsView>

#### Add New Shop:
In some cases a user may not be able to pull back shops that have not been reviewed on yelp.  In this case the user can manually add a new shop by clicking the button which will prompt them to fill out the form for the new shop.
<Insert addNewShopFormView>

#### Single Shop View:
If a user clicks on a shop they are taken to a page where they can see how many users have logged a visit and an average rating of the visits on a total basis and by each feature.
<Insert singleShopView>

#### Log View:
When a user scrolls down on the single shop view, if any users logged a visit to that show they will see information for their log on a card.
<Insert logView>

#### Log Visit Form View:
Users may choose to log a visit of their own and rate the shop based on the various different features offered.
<Insert logVisitFormView>
<Inser logVIsitiFormView2>

#### My Logs Only View:
As more data is entered users may wish to filter down just to view their personal data entries.  They may click a button on the single shop view to view their entries only.
<insert myLogsOnlyView>

#### Profile View:
This part of the project is still in progress.  In this section the user would have the option to further detail out what they find is important when they visit shops.  Once they have selected what is important to them they would be provided with recommendations that match what they look for in a coffee shop.  If tech and wifi are important they would indicate this in their preferences so they would be matched up with shops that rate higher in this area.
<Insert screenshot for profile view here>

## Live Demo

Click [here](https://for-the-love-of-java.firebaseapp.com/) to try out the live demo.

## How to Run

- Clone down the project
- In the terminal run `npm install`
- Create a firebase project [here](https://console.firebase.google.com/)
- Create `src/helpers/apiKeys.json` file and add in your firebase keys that were created in the new firebase project.  Feel free to reference the `apiKeys.example.json` file in the project for the correct structure.
- Once set up to run enter the following in the terminal `npm start`

## Future Features

- User Preference section complete to allow users to define what is important to them
- Users to be able to change their location to return results based on where they are located, not their home address
- Recommended shops to be shown in the user profile
- Advanced search option so user can manually select the ratings they are looking for in case their recommended shops did not return locations that they wish to visit.
- Photos of the shops to be added to the cards

## Contributors

[Crystal Broach](https://github.com/broach44)