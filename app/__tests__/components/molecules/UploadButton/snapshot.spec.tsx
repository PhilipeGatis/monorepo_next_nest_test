import { render } from '@testing-library/react'
import UploadButton from '../../../../components/molecules/UploadButton'

describe('UploadButton', () => {
  it('render', () => {
    const { container } = render(<UploadButton />)
    expect(container).toMatchSnapshot()
  })
})
