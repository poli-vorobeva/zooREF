import React, {useState} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main";
import {AnimalPage} from "./animalPage/animalPage";

export const Content=()=>{

    const [currentPage,setCurrentPage]=useState('main')
    const drawPage=(page:string)=>{
        const pg = page==='about' ? 'main':page
        setCurrentPage(pg)
    }
    return(
        <>
            <Header drawPage={drawPage}/>
            {
                  currentPage==='main' ? <Main/>
                  :currentPage==='zoos' ? <AnimalPage animal={''}/>:''
            }
            <Footer/>
        </>
    )
}