import {HowWorkSlider} from "./HowWorkSlider";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import {HowWork} from "./howWork";
import React from "react";
import userEvent from "@testing-library/user-event";

it('howWork test click', () => {
    const onClick = jest.fn()
    const el = render(<><HowWorkSlider click={onClick}/></>)
    const img=el.getAllByTestId('image')
    userEvent.click(img[0])
    expect(onClick).toBeCalledTimes(1)
})
it('testFunction inside',()=>{
    const component = render(<HowWork/>);

    let tree = component
    console.log('###',tree)
    // expect(tree).toMatchSnapshot();
    //
    // // вручную запускаем обратный вызов
    // tree.props.onClicked();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // вручную запускаем обратный вызов
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
})