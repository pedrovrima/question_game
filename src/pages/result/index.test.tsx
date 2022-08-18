import { BrowserRouter } from "react-router-dom"
import Result from "./index"
import { getAllByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import mockContext from '../../context/mock'
import { StoreContext } from "../../context"


describe("Result page test", () => {
    const { getByRole, getByText, getAllByText } = render(<BrowserRouter><StoreContext.Provider value={mockContext}><Result /></StoreContext.Provider></BrowserRouter>)
    const user = userEvent.setup()
    const button = getByRole('button', { name: 'PLAY AGAIN?' })


    test('renders page', async () => {
        expect(getByText('You scored')).toBeInTheDocument()
        expect(getByText('3/10')).toBeInTheDocument()
        expect(getAllByText('+')).toHaveLength(3)
        expect(getByText('&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.')).toBeInTheDocument()
        expect(getByText('PLAY AGAIN?')).toBeInTheDocument()

    })



    

})