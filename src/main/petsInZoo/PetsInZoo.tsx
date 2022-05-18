import * as React from "react";
import './PetsInZoo.css'
import {Button, ButtonPrimary, slideClick, sliderItemsArray, SliderRange} from "../commonElements";
import {useEffect, useState} from "react";
import {PetsInZooSliderItem} from "./PetsInZooItem";
import {SliderButton} from "./SliderButton";

const PetsInZooSliderBlock = (props: {
	start: number, width: number, margin: number, changePage: (page: string) => void, screenWidth:number
}) => {

	return (
		<div className="pets-in-zoo-slider__block">
			{
				sliderItemsArray.map((e, i) => {
					if (i >= props.start && i <= props.start + 3) {
						return (
							<PetsInZooSliderItem
								animal={e.animal}
								index={i}
								imgSrc={e.src}
								text={e.text}
								width={props.width}
								margin={props.margin}
								handleChangePage={props.changePage}
								screenWidth={props.screenWidth}
							/>
						)
					}
				})
			}
		</div>
	)
}
export const PetsInZoo = (props: { drawPage: (page: string) => void, screenWidth: number }) => {
	const itemWidth = props.screenWidth <= 320 ? 60 : 270
	const margin = props.screenWidth <= 320 ? 2 : 15
	const [countNumber, setCountNumber] = useState('02')
	const [slides, setSlides] = useState([0])
	const [direction, setDirection] = useState('')
	const [transition, setTransition] = useState('none')
	const [transform, setTransform] = useState('')
	const rangeProps = {
		containerClass: 'range__container pets-in-zoo__range',
		numberClass: 'number-toggle-light',
		rangeWrapperClass: 'range__dark range__wrapper',
		startNumber: countNumber,
		totalNumber: '08',
		handleChange: (val: number) => {
			const currentRangeNumber = +countNumber
			const diff = val - +countNumber
			if (diff < 0) {
				for (let i = 1; i < Math.abs(diff); i++) {
					//    const isF = new Promise.resolve().then(())
					buttonClick('left')
				}
			} else if (diff > 0) {
				for (let i = 1; i < diff; i++) {
					buttonClick('right')
				}
			}
			setCountNumber(`0${val}`)
		}
	}
	const deleteElement = () => {
		if (direction) {
			setTransition('none')
			setTransform('translate(0)')
			setSlides((prev) => {
				const newAr = prev.slice()
				if (newAr.length > 1) {
					direction === 'left' ? newAr.shift() : newAr.pop()
				}
				return newAr
			})
		}
	}
	const buttonClick = (direction: string) => {
		if (direction === 'left') {
			slideClick(setDirection, setSlides, setCountNumber,
				setTransform, setTransition,
				'left', 4, '-100%', 'all ease 500ms')
		} else if (direction === 'right') {
			slideClick(setDirection, setSlides, setCountNumber,
				setTransform, setTransition,
				'right', 4, '-100%', 'all ease 0ms')
			setTimeout(() => {
				setTransform('translate(0)')
				setTransition('all ease 500ms')
			}, 0)
		}
	}
	return (
		<article className="pets-in-zoo">
			<div className="pets-in-zoo__wrapper">
				<h2 className="pets-in-zoo__title title">Pets in Zoo</h2>
				<div className="pets-in-zoo__slider-wrapper" style={{
					width: (itemWidth + margin) * 8 + "px",
				height:(props.screenWidth<=320?itemWidth*4 +'px':'unset')}}>
					<div className="pets-in-zoo__slider-hide__wrapper" style={{width: (itemWidth + margin) * 4 + "px",
						height:(props.screenWidth<=320?itemWidth*4 +'px':'unset')}}>
						<div className="pets-in-zoo__slider-hide" style={{
							width: (itemWidth + margin * 2) * 4 + "px",
							height:(props.screenWidth<=320?itemWidth*4 +'px':'unset'),
							transition: transition,
							transform: transform
						}}
								 onTransitionEnd={() => {
									 setTransition('none')
									 deleteElement()
								 }}>

							{
								slides.map((s, index) => {
									return <PetsInZooSliderBlock start={s} width={itemWidth} margin={margin}
																							 changePage={props.drawPage} screenWidth={props.screenWidth}
									/>
								})
							}
						</div>
					</div>
				</div>
				<SliderRange {...rangeProps}/>
				<ButtonPrimary buttonClass={'btnPrimary'} text={'choose your favorite'} href={'#'}/>
				<SliderButton class="pets-in-zoo-slider__left" direction='left' buttonClick={buttonClick}/>
				<SliderButton class="pets-in-zoo-slider__right" direction='right' buttonClick={buttonClick}/>

			</div>
		</article>
	)
}