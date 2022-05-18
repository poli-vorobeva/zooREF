import React, {useState} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main";
import {AnimalPage} from "./animalPage/animalPage";

export const Content = () => {
	//--text-color:#030303-light   #fff-dark
	const [colorTheme, setColorTheme] = useState('light')
	const switchTheme = () => {
		colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light')
		const root = document.body
		if (colorTheme === 'light') {
			root.style.setProperty('--text-color', '#030303')
			root.style.setProperty('--base-color', '#FFF')
		} else {
			root.style.setProperty('--text-color', '#FFF')
			root.style.setProperty('--base-color', '#030303')
		}
	}
	const [currentPage, setCurrentPage] = useState('main')
	const drawPage = (page: string) => {
		console.log(page, '-------------^^^^^')
		//  const animals=page==='eagle'
		const pg = page === 'about' ? 'main' : page

		setCurrentPage(pg)
		console.log(currentPage, '$%$%')
	}
	//todo to rerender scroll 0
	//todo if not animal then panda
	console.log("rerender----------------------")
	return (
		<>
			<Header drawPage={drawPage} switchTheme={switchTheme}/>
			{
				currentPage === 'main' ? <Main drawPage={drawPage}/>
					: currentPage === 'zoos' || currentPage === 'panda' ? <AnimalPage animal={''} drawPage={drawPage}/>
					: currentPage === 'eagle' ? <AnimalPage animal={'eagle'} drawPage={drawPage}/>
						: currentPage === 'gorilla' ? <AnimalPage animal={'gorilla'} drawPage={drawPage}/>
							: currentPage === 'alligator' ? <AnimalPage animal={'alligator'} drawPage={drawPage}/> : ''
			}
			<Footer/>
		</>
	)
}