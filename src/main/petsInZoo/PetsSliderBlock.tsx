import {sliderItemsArray} from "../commonElements";
import {PetsInZooSliderItem} from "./PetsInZooItem";
import * as React from "react";

export const PetsInZooSliderBlock = (props: {
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