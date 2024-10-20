import React from "react"


 const Category = () =>{



    return (
        <>
            <ul><h2>Категории</h2></ul>
        <div className="card-group">
            <div className="card">
                <h5 className="card-title">Для Собак</h5>
                <a href="/search/all/dog"><img src="/image/background/background_4.jpg" height="400"  className="card-img-top" alt="..."/></a>
            </div>
            <div className="card">
                <h5 className="card-title">Для кошек</h5>
                <li className="d-inline-block"></li>
                <a href="/search/all/cat"><img src="/image/background/background_5.jpg" height="400"  className="card-img-top" alt="..."/></a>

            </div>
            <div className="card">
                <h5 className="card-title">Для птиц</h5>
                <a href="#"><img src="/image/background/background_6.jpg" className="card-img-top" alt="..."/></a>
            </div>
        </div>
            </>
    )
}

export default Category;