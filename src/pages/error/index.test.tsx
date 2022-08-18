import { BrowserRouter } from "react-router-dom"
import Error from "./index"
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe("Error page test", () => {
    const { getByText } = render(<BrowserRouter><Error /></BrowserRouter>)
    const user = userEvent.setup()


    test('renders page', async () => {
        expect(getByText('Oops! An error ocurred. Would you like to retry?')).toBeInTheDocument()
    })
})