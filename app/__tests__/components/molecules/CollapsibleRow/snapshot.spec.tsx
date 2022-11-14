import { render } from '@testing-library/react'
import CollapsibleRow from '../../../../components/molecules/CollapsibleRow'
import mockData from './mock'

describe('CollapsibleRow', () => {
  it('renders component', () => {
    const { container } = render(<CollapsibleRow row={mockData} />)
    expect(container).toMatchSnapshot()
  })
})
