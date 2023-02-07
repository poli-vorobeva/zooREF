import React, {useState} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main";
import {AnimalPage} from "./animalPage/animalPage";

export const Content = () => {
	//--text-color:#030303-light   #fff-dark
	const [screenWidth, setScreenWidth] = useState(document.body.offsetWidth)
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
		const pg = page === 'about' ? 'main' : page
		setCurrentPage(pg)
	}
	console.log(screenWidth)
	window.onresize = (e) => {
		setScreenWidth(document.body.offsetWidth)
		//console.log(screenWidth)
	}
	//todo to rerender scroll 0
	//todo if not animal then panda
	return (
		<>
			<Header drawPage={drawPage} switchTheme={switchTheme}/>
			{
				currentPage === 'main' ? <Main drawPage={drawPage} screenWidth={screenWidth}/>
					: currentPage === 'zoos' || currentPage === 'panda' ? <AnimalPage animal={''} drawPage={drawPage} screenWidth={screenWidth}/>
					: currentPage === 'eagle' ? <AnimalPage animal={'eagle'} drawPage={drawPage} screenWidth={screenWidth}/>
						: currentPage === 'gorilla' ? <AnimalPage animal={'gorilla'} drawPage={drawPage} screenWidth={screenWidth}/>
							: currentPage === 'alligator' ? <AnimalPage animal={'alligator'} drawPage={drawPage} screenWidth={screenWidth}/> : ''
			}
			<Footer/>
		</>
	)
}
//todo links from burgerMenu
//todo mapMage