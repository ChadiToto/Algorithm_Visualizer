# Algorithm Visualizer !

This is a web app made using react to visualize multiple algorithm such as sorting and path finding algorithms it also contains some mini apps to visualize other algorithms such as Backtracking and A* in order to solve the 8 Queen problem and The 8 Puzzle Game.

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

<table>
<tr>
    <td><img src="https://imgur.com/sFcvluX.gif" width=400 height=400/> </td>
        <td><img src="https://imgur.com/EUFRVL0.gif" width=400 height=405/> </td>
  </tr>
  <tr>
    <td><img src="https://imgur.com/PRpKvb0.gif" width=400 height=400/> </td>
        <td><img src="https://imgur.com/af3YfTN.gif" width=400 height=400/> </td>
  </tr>
 </table>



