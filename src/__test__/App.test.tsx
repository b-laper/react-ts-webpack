import App from '../App'
import { render, screen } from '@testing-library/react'

describe('initial test', () => {
  test('renders main component', () => {
    render(<App />)
  })
})
