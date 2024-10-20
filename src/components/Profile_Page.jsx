import React, {useEffect, useState} from 'react';
import Nav from "./Nav";

const ProfilePage = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav name={props.name} len_basket={props.len_basket}/>
                    <div className="container d-flex justify-content-center mt-5">

                        <div className="card">

                            <div className="top-container">


                                <img src="/image/profile_image/profile_img_1.jpg" className="img-fluid profile-image"
                                     width="600" alt="Нет изображения"/>
                            </div>
                            <div className="wishlist-border pt-2" className="card text-center">
                                <span className="wishlist">Имя: {props.name}</span>
                            </div>

                            <div className="fashion-studio-border pt-2" className="card text-center">
                                <span className="fashion-studio">Email: {props.email}</span>
                            </div>

                            <div className="fashion-studio-border pt-2" className="card text-center">
                                <span className="fashion-studio">Дата регистрации: {props.date_joined}</span>
                            </div>
                            <div className="fashion-studio-border pt-2" className="card text-center">
                                <span className="fashion-studio">Последний вход: {props.last_login}</span>
                            </div>

                            <div className="recent-border mt-4" className="card text-center">
                                <span className="recent-orders">В вашей корзине: {props.len_basket.length} товара(ов)</span>
                            </div>
                            <div className="wishlist-border pt-2" className="card text-center">
                                <span className="wishlist">Предварительная стоимость: {125} р.</span>
                                <a type="button" className="btn btn-outline-danger" href="/product/basket_product"><i
                                        className="bi bi-twitter" >Оформить заказ</i>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;