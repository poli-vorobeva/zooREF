import * as React from "react";

export const Footer=()=>{
    return(
        <footer>
            <div className="footer__content">
                <div className="footer-form">
                    <div className="header__logo footer__logo">
                        <a href="#logo">
                            <img src="./assets/light-white.svg" alt="logo"/>
                        </a>
                    </div>
                    <h6 className="footer-form__title">Contact us</h6>
                    <form id="form-contact">
                        <input
                            type="text"
                            placeholder="Name"
                            className="footer-form__input"
                            required
                        />
                            <input
                                type="email"
                                placeholder="Email"
                                className="footer-form__input"
                                required
                            />
                                <fieldset className="footer-form__fieldset">
                                    <legend>Please enter your message</legend>
                                    {/*<textarea className="footer-form__text-area" maxLength="280" required>*/}
            {/*</textarea>*/}
                                </fieldset>
                                <div className="footer-form__checkbox">
                                    <input type="checkbox" id="footer-form__agree" name="footer-form__agree" required/>
                                        <label htmlFor="footer-form__agree">I agree to the processing of Personal
                                            Data</label>

                                </div>
                                <button type="submit"
                                        className="footer-form__button">Send<img src="./assets/arrow-white.png"
                                                                                 alt="arrow"/>
                                </button>
                    </form>
                    <div className="copy-rights__wrapper">
                        <div className="footer__copy-right">
                            <p>©Noora Sagnayeva</p>
                            <p>©RSSchool and ©Yem Digital - 2021</p>
                        </div>
                    </div>
                </div>

                <div className="footer__menu">
                    <div className="footer__nav">
                        <nav className="footer__nav-adaptive">
                            <ul className="footer__nav-adaptive-list">
                                <li><a href="#logo">About</a></li>
                                <li><a href="pages/zoos/panda.html">Zoos</a></li>
                                <li><a href="./pages/intermediatePage/intermediatePage.html">Map</a></li>
                                <li><a href="https://www.figma.com/file/HKt5Nlx0jghQtJp6jW9q8F/zooApp">Design</a></li>
                            </ul>
                        </nav>
                        <div className="footer__contacts-wrapper">
                            <h4>Zoo online center</h4>
                            <div className="footer__contacts">
                                <div className="footer-contacts__item adress">
                                    <p>132, Address District, Street</p>
                                    <p>Open Daily 10:00 am - 5:00 pm</p>
                                </div>
                                <div className="footer-contacts__item phone">
                                    <p>T <a href="tel:7021633433">(702) 163-3433</a></p>
                                    <p><a href="mailto:zoo.online@gmail.com" className="mailto">zoo.online@gmail.com</a>
                                    </p>
                                </div>
                                <div className="footer-contacts__item links">
                                    <ul>
                                        <li><a> <img src="./assets/social-icons/insta-icon.png"/></a></li>
                                        <li><a> <img src="./assets/social-icons/facebook-icon.png"/></a></li>
                                        <li><a> <img src="./assets/social-icons/vk-icon.png"/></a></li>
                                        <li><a> <img src="./assets/social-icons/youtube-icon.png"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__button">

                        <button className="btnPrimary">donate for volunteers</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
