import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact form component', () => {
    it('renders', () => {
        render(<ContactForm />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('has correct header', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1')).toHaveTextContent('Contact Me')
    })

    it('has correct button', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})