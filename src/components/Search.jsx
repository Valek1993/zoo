import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import Dog_list from "./filter_search_dog/Dog_list";
import Pagination from "./Pagination";
import Footer from "./Footer";
import CatList from "./filter_search_cat/Cat_list";


 const Search = (props) =>{

     const [dogs, setDogs] = useState([])
     const [cats, setCats] = useState([])
     const {description} = useParams()
     const [currentPage, setCurrentPage] = useState(1)
     const [productPerPage] = useState(12)

     useEffect( () => {
         axios.get("http://127.0.0.1:8000/dog_food/").then(data =>{setDogs(data.data)})
         axios.get("http://127.0.0.1:8000/cat_food/").then(data =>{setCats(data.data)})



    }, [])

     const arr = [...dogs, ...cats]

     const filteredItem = arr.filter(item => {
         return item.title.toLowerCase().includes(description.toLowerCase())
     })


     const lastProductIndex = currentPage * productPerPage
     const firstProductIndex = lastProductIndex - productPerPage

     const currentItem = filteredItem.slice(firstProductIndex, lastProductIndex)



     const paginate = pageNumber => setCurrentPage(pageNumber)
     const nextPage = () => setCurrentPage(prev => prev + 1)
     const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
    <>
            <Nav name={props.name} len_basket={props.len_basket}/>
            <h2 className="text-center mt-3">Результаты поиска: {description}</h2>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {currentItem.length ? (currentItem.map((item, index)=>{ if (item.name === "собака") {
                        return (<Dog_list setLoaded={props.setLoaded} item={item} id={item.id} id_image={item.id_image} image={item.image} title={item.title} description={item.description} price={item.price} weight={item.weight} availability={item.availability}/>)}
                    else {return (<CatList setLoaded={props.setLoaded} item={item} id={item.id} id_image={item.id_image} image={item.image} title={item.title} description={item.description} price={item.price} weight={item.weight} availability={item.availability}/>)}})):(<h2 className="text-center">Поиск не дал результатов!</h2>)}
                </div>
            </section>
            <Pagination productPerPage={productPerPage} totalProduct={filteredItem.length} paginate={paginate}/>
            {/*<div className="text-center">*/}
            {/*    /!*<button className="btn btn-primary btn-sm" onClick={prevPage}>Предыдущая</button>*!/*/}
            {/*    /!*<button className="btn btn-primary ms-4 btn-sm" onClick={nextPage}>Следующая</button>*!/*/}
            {/*</div>*/}
            <Footer/>
        </>
    )
}

export default Search;