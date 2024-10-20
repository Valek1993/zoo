import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import CustomContext from "./context/Context";


function Main(){



    const [basketCatDry, setBasketCatDry] = useState("Привет")


    return (
        <CustomContext.Provider value={{basketCatDry, setBasketCatDry}}>
            <App/>
        </CustomContext.Provider>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <Main/>

);

