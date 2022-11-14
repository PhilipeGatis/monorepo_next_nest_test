import { render } from '@testing-library/react'
import DataGrid from '../../../../components/organisms/DataGrid'
import mockData from './mock'

describe('DataGrid', () => {
  it('renders empty', () => {
    const { container } = render(<DataGrid data={[]} />)
    expect(container).toMatchSnapshot()
  })

  it('renders a heading', () => {
    const { container } = render(<DataGrid data={mockData} />)
    expect(container).toMatchSnapshot()
  })
})
