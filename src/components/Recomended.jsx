import React from "react"


 const Recomended = () =>{

    return (

        <div>


        {/*<div className="products_wrapper">*/}
        {/*    <div className="nav nav-tabs" id="nav-tab" role="tablist">*/}
        {/*        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"*/}
        {/*           aria-controls="nav-home" aria-selected="true">Хиты продаж</a>*/}
        {/*        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"*/}
        {/*           aria-controls="nav-profile" aria-selected="false">Товары со скидкой</a>*/}
        {/*        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"*/}
        {/*           aria-controls="nav-contact" aria-selected="false">Новинки</a>*/}
        {/*    </div>*/}
        {/*    </div>*/}

            <div>
                <ul><h3>Товары для домашних животных - Интернет зоомагазин
                    “PetShop”</h3></ul>

                   <ul> <p className="text-md-start">На сайте нашего интернет-магазина любой владелец домашнего питомца в
                        Беларуси может получить всемерную
                        помощь с компетентной поддержкой. Используя каталог зоомагазина «PetShop» можно быстро, а также
                        полноценно обустроить среду обитания для собак, кошек, птиц, аквариумных рыбок или грызунов.
                        Ассортимент
                        зоотоваров облегчит уход на каждый день за животными, составление рациона питания, даже
                        организацию игр
                        с элементами дрессировки.</p></ul>
            </div>

     <div id="main_manufacturers" className="container">
         <h2>Рекомендованные производители</h2>
         {/*<a href="/brands/" className="all_manufacturers">Все производители</a>*/}
         <div className="row row-small">

             <div className="col-6 col-md-2">
                 <div className="manufacturer">
                     <a href="https://zoobaza.by/gemon/"><img width="150" height="50"
                                            src="https://zoobaza.by/image/cache/catalog/brands/gemon-150x50.jpg"
                                            alt="Gemon"/></a>
                 </div>
             </div>


             <div className="col-6 col-md-2">
                 <div className="manufacturer">
                     <a href="https://zoobaza.by/brit/"><img width="150" height="50"
                                           src="https://zoobaza.by/image/cache/catalog/brands/brit-150x50.png"
                                           alt="Brit"/></a>
                 </div>
             </div>


             <div className="col-6 col-md-2">
                 <div className="manufacturer">
                     <a href="https://zoobaza.by/royal-canin/"><img width="150" height="50"
                                                  src="https://zoobaza.by/image/cache/catalog/brands/royal-canin-150x50.png"
                                                  alt="Purina"/></a>
                 </div>
             </div>


             <div className="col-6 col-md-2">
                 <div className="manufacturer">
                     <a href="https://zoobaza.by/meglium/"><img width="150" height="50"
                                              src="https://zoobaza.by/image/cache/catalog/brands/meglium-logo-150x50.jpg"
                                              alt="Meglium"/></a>
                 </div>
             </div>


             <div className="col-6 col-md-2">
                 <div className="manufacturer">
                     <a href="https://zoobaza.by/reks/"><img width="150" height="50"
                                           src="https://zoobaza.by/image/cache/catalog/brands/reks-150x50.jpg"
                                           alt="Рэкс"/></a>
                 </div>
             </div>


             <div className="col-6 col-md-2">
                 <div className="manufacturer">
                     <a href="https://zoobaza.by/arion/"><img width="150" height="50"
                                            src="https://zoobaza.by/image/cache/catalog/brands/images-150x50.png"
                                            alt="Arion"/></a>
                 </div>
             </div>
         </div>
     </div>
            </div>

    )
}

export default Recomended;