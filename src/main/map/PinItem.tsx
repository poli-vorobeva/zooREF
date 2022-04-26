import React from "react";
const PinSvg = () => {
  return (
    <svg className="pin-icon__svg"
      viewBox="0 0 68 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.0345 0.496094C15.8014 0.496094 0.968262 15.331 0.968262 33.5663C0.968262 51.2064 31.1986 91.3966 32.4864 93.1007C32.8482 93.5871 33.4278 93.871 34.0347 93.871C34.6416 93.871 35.2213 93.5871 35.5831 93.1007C36.8706 91.3966 67.1012 51.2065 67.1012 33.5663C67.1008 15.331 52.2676 0.496094 34.0345 0.496094ZM34.0345 51.0741C24.3831 51.0741 16.5288 43.219 16.5288 33.5663C16.5288 23.9137 24.3831 16.0585 34.0345 16.0585C43.686 16.0585 51.5402 23.9137 51.5402 33.5663C51.5402 43.219 43.686 51.0741 34.0345 51.0741Z"
        fill="url(#paint0_linear)" />
      <defs>
        <linearGradient id="paint0_linear"
          x1="-11.38"
          y1="0.496093"
          x2="83.3795"
          y2="20.869"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#4BD8B5" />
          <stop offset="1" stop-color="#49D6DF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
const PinItem = (props: {
  item: {
    id:number,
    name: string,
    imgUrl: string,
    region: string,
    population: string
  }
}) => {
  return (
    <div key={props.item.id} className={`pin__wrapper__item item__${props.item.name}`}>
      <div className={`pin__icon pin__icon-${props.item.name}`}>
        <img src={props.item.imgUrl}   className='pin-icon__image' alt={props.item.name} />
        <PinSvg />
      </div>
      <div className="pin-card">
        <div className={`pin-card__wrapper pin-card__wrapper-${props.item.name}`}>
          <div className="pin-card__image">
            <img src={props.item.imgUrl} alt={props.item.name} />
          </div>
          <div className="pin-card__content">
            <div className="pin-card__title"><p>{props.item.name}</p></div>
            <div className="pin-card__region"><p><b>Region:</b>{props.item.region}
            </p></div>
            <div className="pin-card__population"><p><b>Population:</b>{props.item.population}</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PinItem