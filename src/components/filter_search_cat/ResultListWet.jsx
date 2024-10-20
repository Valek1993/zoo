import React, {useEffect, useState} from "react"
import Nav from "../Nav";
// import Carousel from "./Carousel"
import Footer from "../Footer"
import axios from "axios";
import Dog_list from "../filter_search_dog/Dog_list";
import CatList from "./Cat_list";
import Pagination from "../Pagination";
import Preloginpage from "../LoginRegister/Preloginpage";


const ResultListWet = (props) =>{

    const [cats, setCats] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(12)

    useEffect( () => {
         axios.get("http://127.0.0.1:8000/cat_food/").then(data =>{setCats(data.data)})


    }, [])

    const filteredCats = cats.filter(cat =>{
        return cat.title.toLowerCase().includes("влажный корм")
    })

    const lastProductIndex = currentPage * productPerPage
    const firstProductIndex = lastProductIndex - productPerPage
    const currentCat = filteredCats.slice(firstProductIndex, lastProductIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev+1)
    const prevPage = () => setCurrentPage(prev => prev-1)

    return (

        <>
            {(props.name !== undefined) ? (
                <>
                    <Nav name={props.name} len_basket={props.len_basket}/>
                    <h1 className="text-center mt-3">Влажный корм для Кошек</h1>
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                            {currentCat.length ? (currentCat.map((item, index) => {
                                return (<CatList setLoaded={props.setLoaded} item={item} id={item.id} id_image={item.id_image} image={item.image}
                                                 title={item.title} description={item.description} price={item.price}
                                                 weight={item.weight} availability={item.availability}/>)
                            })) : (<h2 className="text-center">Поиск не дал результатов!</h2>)}
                        </div>
                    </section>
                    <Pagination productPerPage={productPerPage} totalProduct={filteredCats.length} paginate={paginate}/>
                    <Footer/>
                </>
            ) : (<div><Preloginpage/></div>)}
        </>
    );
};

export default ResultListWet;