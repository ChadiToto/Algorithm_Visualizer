# Algorithm Visualizer !

This is a web app made using react to visualize multiple algorithm such as sorting and path finding algorithms it also contains some mini apps to visualize other algorithms such as Backtracking and A\* in order to solve the 8 Queen problem and The 8 Puzzle Game.

The app is currently hosted using AWS Amplify , you can try it out [here](https://master.d38gbcaqs634eq.amplifyapp.com/).

## Installation

To run this app locally follow the steps below :

    git clone https://github.com/ChadiToto/Algorithm_Visualizer
    cd Algorithm_Visualizer
    npm install
    npm start

You can also run this app using docker by using the command below :

    docker run -it -p 3000:3000 container_name

Also make sure to add a .env file in which you'll need to put your Mapbox Token for the PathFinder Visualizer to actually display a map :

    REACT_APP_TOKEN=YOUR_TOKEN

## Screenshots

![Queen Visualizer](https://im7.ezgif.com/tmp/ezgif-7-a78269d5cede.gif =300x300) ![Puzzle Visualizer](https://im7.ezgif.com/tmp/ezgif-7-d5827d36836f.gif =300x300) ![Sorting Visualizer](https://im7.ezgif.com/tmp/ezgif-7-06bd87d938a6.gif =300x300) ![Path Finder](https://im7.ezgif.com/tmp/ezgif-7-22f089dac808.gif =300x300)
