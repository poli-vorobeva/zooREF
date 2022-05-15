import React, {useState} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main";
import {AnimalPage} from "./animalPage/animalPage";

export const Content = () => {

    const [currentPage, setCurrentPage] = useState('main')
    const drawPage = (page: string) => {
        console.log(page, '^^^^^')
        //  const animals=page==='eagle'
        const pg = page === 'about' ? 'main' : page

        setCurrentPage(pg)
        console.log(currentPage, '$%$%')
    }
    //todo to rerender scroll 0
    return (
        <>
            <Header drawPage={drawPage}/>
            {
                currentPage === 'main' ? <Main drawPage={drawPage}/>
                    : currentPage === 'zoos'||currentPage ==='panda' ? <AnimalPage animal={''}/>
                    : currentPage === 'eagle' ? <AnimalPage animal={'eagle'}/>
                        : currentPage === 'gorilla' ? <AnimalPage animal={'gorilla'}/>
                        : currentPage === 'alligator' ? <AnimalPage animal={'alligator'}/>:''
            }
            <Footer/>
        </>
    )
}