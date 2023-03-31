import { Alert, AlertTitle } from '@mui/material'

export function AlertMessage({message}) {
  return (
    <Alert severity="error" sx={{marginBottom: 3, display: 'flex', justifyContent: 'center', height: 50}}>
      <AlertTitle sx={{margin: 0, padding: 0, height: 10, fontSize: 15}}> {message} </AlertTitle>
    </Alert>

  )
}