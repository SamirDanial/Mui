import { createTheme } from '@material-ui/core/styles'
import { green, purple } from '@mui/material/colors'
// import { fontWeight } from '@mui/system'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        }
    },
    myButton: {
        primary: {
            backgroundColor: green[400],
            color: purple[300],
        }
    }
})