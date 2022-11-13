import React, { ChangeEvent, useState } from 'react'
import Button from '@mui/lab/LoadingButton'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { uploadProductsList } from '../../lib/api'

const UploadButton: React.FC = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      await uploadProductsList(event.target.files[0], event => {
        setIsUploading(true)
      })
      setMessage('Arquivo enviado com sucesso.')
    } catch (error) {
      if (error.signal === 422) {
        setMessage('Tipo de aquivo não suportado.')
        return
      }
      setMessage('Error interno do sistema por favor tente novamente em alguns instantes.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <>
      <input type="file" onChange={upload} accept="text/plain" style={{ display: 'none' }} id="contained-button-file" />
      <label htmlFor="contained-button-file">
        <Button loading={isUploading} variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <Snackbar
        open={!!message}
        autoHideDuration={6000}
        onClose={() => setMessage('')}
        message={message}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setMessage('')}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  )
}

export default UploadButton
