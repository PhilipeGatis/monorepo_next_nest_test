import axios from 'axios'
import { ProductListGroupedByDescriptionResponseDto } from '@hubla/api/src/models/product/dto/ProductListGroupedByDescriptionResponse.dto'

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

export const fetchProductList = async (): Promise<ProductListGroupedByDescriptionResponseDto[]> => {
  return await request.get('products').then(res => res.data)
}

export const uploadProductsList = async (
  file?: File | null,
  progressCallback?: (progress: { total: number; loaded: number }) => void,
): Promise<void> => {
  const formdata = new FormData()
  if (file) formdata.append('file', file, file.name)
  return await request
    .post(`filesImport`, formdata, {
      onUploadProgress: e => progressCallback && progressCallback({ total: e.total, loaded: e.loaded }),
    })
    .then(res => res.data)
}
