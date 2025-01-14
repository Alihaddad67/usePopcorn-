import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StartRating from './StarRating.js';
// function Test() {
//   const[movieRating , setmovieRatin] = useState(0)
//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSetRating = {setmovieRatin}/>  
//       <p>This movie was rated {movieRating} stars</p>
//     </div>https://github.com/Alihaddad67/usePopcorn
//    )
//    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating maxRating={5} messages={ ["Bad" , "notbad", "norml" ,"good" , "verygood"] } />
    <StartRating maxRating={5} color='red' size={20} defaultRating={3} />
    <Test/> */}
  </React.StrictMode>
);
