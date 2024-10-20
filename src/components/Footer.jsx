import React from "react"


 const Footer = () =>{

    return (


        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-5">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">О нас<span></span></h5>
                                <p>На сайте нашего интернет-магазина любой владелец домашнего питомца в Беларуси может получить всемерную помощь с компетентной поддержкой. Используя каталог зоомагазина «ЗООБАЗА» можно быстро, а также полноценно обустроить среду обитания для собак, кошек, птиц, аквариумных рыбок или грызунов. Ассортимент зоотоваров облегчит уход на каждый день за животными, составление рациона питания, даже организацию игр с элементами дрессировки. </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Категории<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="/search/all/dog">Собаки</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="/search/all/cat">Кошки</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#">Грызуны</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#">Птицы</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#">Рыбы</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#">Акции</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#">О нас</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*<div className="col-xs-12 col-sm-6 col-md-3">*/}
                        {/*    <div className="widget no-box">*/}
                        {/*        <h5 className="widget-title">Get Started<span></span></h5>*/}
                        {/*        <p>Get access to your full Training and Marketing Suite.</p>*/}
                        {/*        <a className="btn" href="#" target="_blank">Register Now</a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="col-xs-12 col-sm-6 col-md-4">

                            <div className="widget no-box">
                                <h5 className="widget-title">Наши контакты<span></span></h5>

                                <p><a href="mailto:info@pet-shop.com" title="glorythemes">info@pet-shop.com</a></p>
                                <ul className="social-footer2">
                                    <li className=""><a title="youtube" target="_blank" href="https://www.youtube.com/watch?v=9taj4TuR3VA">
                                        <img alt="youtube" width="25" height="25" src="/image/background/logo/logo_youtube.png"/>  Youtube</a></li>
                                    <li className=""><a href="" target="_blank" title="Viber">
                                        <img alt="Facebook" width="20" height="20" src="/image/background/logo/logo_viber.jpg"/>    Viber</a></li>
                                    <li className=""><a href="/" target="_blank" title="Twitter">
                                        <img alt="Twitter" width="20" height="20" src="/image/background/logo/telegram_logo.png"/>   Telegram</a></li>
                                    <li className=""><a title="instagram" target="_blank" href="https://www.instagram.com/zoobaza.by/">
                                        <img alt="instagram" width="20" height="20" src="/image/background/logo/instagram_logo.png"/>  Instagram</a></li>
                                    <li className=""><a>
                                        <img  width="20" height="20" src="/image/background/logo/watch_logo.jpg"/>   C 9:00 до 21:00 работаем без выходных</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div
                            className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
                            style={{width: "50%"}}
                        >
                            <a href="#" className="d-flex align-items-center p-0 text-dark">
                                <img alt="logo" src="/image/background/logo/logo.jpg" width="70" height="70"/>
                                <span className="ms-4 h5 font-weight-bold">Pet Shop</span>
                            </a>


                            <small>&copy; Pet shop, 2024. All rights reserved.</small>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;