import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from ".";
import ResultListPageDry from "./components/filter_search_dog/ResultListPageDry";
import ResultListPageWet from "./components/filter_search_dog/ResultListPageWet";
import ResultListDry from "./components/filter_search_cat/ResultListDry";
import ResultListWet from "./components/filter_search_cat/ResultListWet";
import ResultListALLDog from "./components/filter_search_dog/search_all";
import ResultListALLCat from "./components/filter_search_cat/search_all";
import Card_product_dog from "./components/filter_search_dog/Card_product_dog";
import Search from "./components/Search";
import Card_product_cat from "./components/filter_search_cat/Card_product_cat";
import Basket from "./components/Basket";
import {Provider} from "react-redux";
import {store} from "./redux";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import {useEffect, useState} from "react";
import Profile_Page from "./components/Profile_Page";
import uniqBy from 'lodash/uniqBy';
import Bad_request from "./components/Bad_request_order";
import Sucsess_request from "./components/Sucsess_request";
import Bad_request_register from "./components/LoginRegister/Bad_request_register";



function App(props) {


    const [name, setName] = useState('')
    const [id, setID] = useState('')
    const [email, setEmail] = useState('')
    const [date_joined, setDate_joined] = useState('')
    const [last_login, setLastlogin] = useState('')

    const items = JSON.parse(localStorage.getItem('basket'))
    const _ = require("lodash")
    const lenBasket = _.uniqBy(items, 'id')
    const [len_basket, setlenBasket] = useState(lenBasket)
    const [loaded, setLoaded] = useState(false)

    const [redirect, setRedirect] = useState(false)

    useEffect(() => {

        (
            async () => {
                const response = await fetch('http://localhost:8000/user', {
                    method: "GET",
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                })
                const content = await response.json()
                setName(content.name)
                setID(content.id)
                setEmail(content.email)
                setDate_joined(content.date_joined)
                setLastlogin(content.last_login)
            }
        )();
    });


    useEffect(() => {
        if (loaded) (setlenBasket(lenBasket))
        setLoaded(true)
    }, [loaded]);


  return (

      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path="/" element={<Home name={name}  setName={setName} setLoaded={setLoaded} len_basket={len_basket} redirect={redirect} setRedirect={setRedirect}/>}/>
                  <Route path="/login" element={<Login name={name} redirect={redirect} setRedirect={setRedirect}/>}/>
                  <Route path="/register" element={<Register name={name}/>}/>
                  <Route path="/search/sychoy/dog" element={<ResultListPageDry name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/search/wet/dog" element={<ResultListPageWet name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/search/sychoy/cat" element={<ResultListDry name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/search/vlazhny/cat" element={<ResultListWet name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/search/all/dog" element={<ResultListALLDog name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/search/all/cat" element={<ResultListALLCat name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/product/dog/:item_id" element={<Card_product_dog name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/product/cat/:item_id" element={<Card_product_cat name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/product/search/:description" element={<Search name={name} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/product/basket_product" element={<Basket name={name} id={id} len_basket={len_basket} setLoaded={setLoaded}/>}/>
                  <Route path="/profile" element={<Profile_Page len_basket={len_basket} name={name} email={email} date_joined={date_joined} last_login={last_login}/>}/>
                  <Route path="/bad_request" element={<Bad_request name={name} id={id} len_basket={len_basket}/>}/>
                  <Route path="/bad_request_register" element={<Bad_request_register name={name} id={id} len_basket={len_basket}/>}/>
                  <Route path="/success_request" element={<Sucsess_request name={name} id={id} len_basket={len_basket}/>}/>
              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
