import React, {useEffect, useState} from "react"
import Nav from "../Nav";
// import Carousel from "./Carousel"
import Footer from "../Footer"
import axios from "axios";
import Dog_list from "./Dog_list";
import Pagination from "../Pagination";



const ResultListALLDog = (props) =>{

    const [dogs, setDogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(12)

    useEffect( () => {
         axios.get("http://127.0.0.1:8000/dog_food/").then(data =>{setDogs(data.data)})


    }, [])

    const lastProductIndex = currentPage * productPerPage
    const firstProductIndex = lastProductIndex - productPerPage
    const currentDog = dogs.slice(firstProductIndex, lastProductIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev+1)
    const prevPage = () => setCurrentPage(prev => prev-1)


    return (

        <>
            <Nav name={props.name} len_basket={props.len_basket}/>
            <h1 className="text-center mt-3">Корм для собак</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {currentDog.map((item, index)=>{
                        return (<Dog_list setLoaded={props.setLoaded} item={item} id={item.id} id_image={item.id_image} image={item.image} title={item.title} description={item.description} price={item.price} weight={item.weight} availability={item.availability}/>)
                    })}
                </div>
            </section>
            <Pagination productPerPage={productPerPage} totalProduct={dogs.length} paginate={paginate}/>
            {/*<div className="text-center">*/}
            {/*    <button className="btn btn-primary btn-sm" onClick={prevPage}>Предыдущая</button>*/}
            {/*    <button className="btn btn-primary ms-5 btn-sm" onClick={nextPage}>Следующая</button>*/}
            {/*</div>*/}
            <Footer/>
        </>
    );
};

export default ResultListALLDog;