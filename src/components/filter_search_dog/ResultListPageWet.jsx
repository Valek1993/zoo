import React, {useEffect, useState} from "react"
import Nav from "../Nav";
// import Carousel from "./Carousel"
import Footer from "../Footer"
import axios from "axios";
import Dog_list from "./Dog_list";
import CatList from "../filter_search_cat/Cat_list";
import Pagination from "../Pagination";
import Preloginpage from "../LoginRegister/Preloginpage";


const ResultListPageWet = (props) =>{

    const [dogs, setDogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(12)

    useEffect( () => {
         axios.get("http://127.0.0.1:8000/dog_food/").then(data =>{setDogs(data.data)})


    }, [])

    const filteredDogs = dogs.filter(dog =>{
        return dog.title.toLowerCase().includes("влажный корм")
    })

    const lastProductIndex = currentPage * productPerPage
    const firstProductIndex = lastProductIndex - productPerPage
    const currentDog = filteredDogs.slice(firstProductIndex, lastProductIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev+1)
    const prevPage = () => setCurrentPage(prev => prev-1)

    return (
        <>
            {(props.name !== undefined) ? (<div><Nav name={props.name} len_basket={props.len_basket}/>
            <h1 className="text-center mt-3">Влажный корм для собак</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {currentDog.length ? (currentDog.map((item, index)=>{
                        return (<Dog_list setLoaded={props.setLoaded} item={item} id={item.id} id_image={item.id_image} image={item.image} title={item.title} description={item.description} price={item.price} weight={item.weight} availability={item.availability}/>)
                    })) : (<h2 className="text-center">Поиск не дал результатов!</h2>)}
                </div>
            </section>
            <Pagination productPerPage={productPerPage} totalProduct={filteredDogs.length} paginate={paginate}/>
            <Footer/></div>) : (<Preloginpage/>)}
        </>
    );
};

export default ResultListPageWet;