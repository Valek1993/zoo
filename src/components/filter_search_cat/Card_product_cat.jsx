import React, {useContext, useEffect, useState} from "react"
import {useLocation} from "react-router";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import Nav from "../Nav";
import Dog_list from "../filter_search_dog/Dog_list";
import Pagination from "../Pagination";
import Footer from "../Footer";
import config from "bootstrap/js/src/util/config";
import Basket from "../Basket";
import CustomContext from "../../context/Context";
import {setItemInCart} from "../../redux/cart/reducer";



function Card_product_cat (props) {

    const [product, setProduct] = useState([])
    const {item_id} = useParams()
    const API_URL = 'http://127.0.0.1:8000/cat_food/' + item_id + '/'
    const data = JSON.parse(localStorage.getItem('basket') || [])


    const handleClick = () => {
         localStorage.setItem("basket", JSON.stringify([...data, product]))
         props.setLoaded(false)
     }


    useEffect(() => {

         (axios.get(API_URL)).then(response => {
            setProduct(response.data)

        })

    }, [])

        // const {basket, setBasket} = useContext(CustomContext)


  return (
      <>

          <Nav name={props.name} len_basket={props.len_basket}/>
          <li className="d-inline-block"></li>
          <h2 className="card-title text-center">{product.title}</h2>
          <li className="d-inline-block"></li>
          <div className="row justify-content-lg-center">
              <div className="col-11 col-md-6 col-lg-3 mx-5 mb-4">
                  <div className="card p-0 overflow-hidden h-100 shadow">
                      <img src={"/image/image_cat/" + product.id_image + ".png"} className="card-img-top img-fluid"/>
                  </div>
              </div>

              <div className="col-11 col-md-6 col-lg-4 mx-5 mb-4">
                  <div className="card p-0 overflow-hidden h-100 shadow">
                      <div className="card-body">
                          <h6 className="card-title">Цена товара: {product.price} р.</h6>
                          <h6 className="card-title">Вес товара(кг): {product.weight}</h6>
                          <h6 className="card-title">Доступность: {product.availability}</h6>
                          <h6 className="card-title">Возраст животного: {product.age_of_the_animal}</h6>
                          <h6 className="card-title">Размер животного: {product.animal_size}</h6>
                          <h6 className="card-title">Производитель: {product.manufacturer}</h6>
                          <button type="button" className="btn btn-outline-danger"><i className="bi bi-twitter">Купить</i></button>
                          <button type="button" className="btn btn-outline-danger"><i className="bi bi-twitter" onClick={() => handleClick()}>Добавить в корзину</i></button>
                      </div>
                      <ul><li><h7 className="card-title">Бесплатная доставка в пределах Минска при сумме заказа от 50 BYN.</h7></li></ul>
                      <ul><li><h7 className="card-title">Возможен наличный и безналичный расчет, а также оплата пластиковой картой.</h7></li></ul>
                  </div>
              </div>
          </div>
          <li className="d-inline-block"></li>
          <div className="html_text active" ><ul><h3>Подробное описание</h3></ul>
            <ul><p>{product.description}</p></ul>
              </div>
          <li className="d-inline-block"></li>
          <Footer/>
      </>
  )
}


export default Card_product_cat;