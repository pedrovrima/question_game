import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { StoreContext } from "../../context"
import mockContext from '../../context/mock'
import Game from "./index"
import {parseHtmlEntities} from "../../functions"



describe("Game page test", () => {

    const { getByText, getByRole, findByText } = render(<StoreContext.Provider value={mockContext}><Game /></StoreContext.Provider>)
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: 'True' })

    test('renders page', async () => {
        fireEvent.click(button)

        expect(getByText('Entertainment: Film')).toBeInTheDocument()
        expect(getByText(parseHtmlEntities('&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.'))).toBeInTheDocument()
        expect(getByText('1 of 10')).toBeInTheDocument()

    })



})