import {App} from "./app";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'

it('App render', () => {
    const app=render(App())
    const header = app.getByTestId('header')
    const main = app.getByTestId('main')
    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
})