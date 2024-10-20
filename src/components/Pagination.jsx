import React, {useEffect, useState} from "react"
import axios from "axios";


 const Pagination = ({productPerPage, totalProduct, paginate}) =>{
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul class="pagination justify-content-center">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                                <a href="#" className="page-link" onClick={() => paginate(number)}>
                                    {number}
                                </a>
                        </li>

                    ))
                }
            </ul>
        </div>
           );
        };


export default Pagination;