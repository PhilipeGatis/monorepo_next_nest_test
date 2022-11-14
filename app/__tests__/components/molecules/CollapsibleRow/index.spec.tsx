import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CollapsibleRow from '../../../../components/molecules/CollapsibleRow'
import mockData from './mock'

describe('CollapsibleRow', () => {
  it('collapse click', async () => {
    const { queryByTestId } = render(<CollapsibleRow row={mockData} />)
    const expand = screen.getByTestId('expandButton')

    let content = await queryByTestId('collapse content')
    expect(content).toBeNull()
    fireEvent.click(expand)
    content = await queryByTestId('collapse content')
    expect(content).toBeTruthy()
  })

  it('calc is correctly', async () => {
    render(<CollapsibleRow row={mockData} />)
    expect(screen.getByText('R$ 25.000,00')).toBeTruthy()
  })
})
