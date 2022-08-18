import { BrowserRouter } from "react-router-dom"
import Loading from "./index"
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe("Loading page test", () => {
    const { getByText } = render(<BrowserRouter><Loading /></BrowserRouter>)
    const user = userEvent.setup()


    test('renders page', async () => {
        expect(getByText('Loading')).toBeInTheDocument()
    })


})