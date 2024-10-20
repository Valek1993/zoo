import React, {useEffect, useState} from "react"
import Nav from "./Nav";
import Carousel from "./Carousel"
import Footer from "./Footer"
import Pre_footer from "./Pre_footer";
import Recomended from "./Recomended";
import Category from "./Category";


const HomePage = (props) => {

    useEffect(() => {

        (
            async () => {
                const response = await fetch('http://localhost:8000/user', {
                    method: "GET",
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                })
                const content = await response.json()
                if (props.redirect && localStorage.getItem(content.name) !== null)  localStorage.setItem('basket',JSON.stringify(JSON.parse(localStorage.getItem(content.name))))
                if (props.redirect && localStorage.getItem(content.name) === null) localStorage.setItem('basket',JSON.stringify([]))
                props.setLoaded(false)
            }
        )();
    });


    return (
        <div>
            <div>
                <Nav name={props.name} len_basket={props.len_basket}/>
                <li className="d-inline-block"></li>
                <Carousel/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Pre_footer/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Category/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Recomended/>
                <li className="d-inline-block"></li>
                <li className="d-inline-block"></li>
                <Footer/></div>
        </div>

    )
}

export default HomePage;