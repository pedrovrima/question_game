import { BrowserRouter } from "react-router-dom"
import Home from "./index"
import {  render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe("Home page test", () => {
    const { getByText, getByRole, findByText } = render(<BrowserRouter><Home /></BrowserRouter>)
  
    test('renders page', async () => {


        expect(getByText('Welcome to the Trivia Challenge!')).toBeInTheDocument()
        expect(getByText('Can you score 100%?')).toBeInTheDocument()

    })




})
