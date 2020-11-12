import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

// ShoppingCart Component
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cartCloseIcon: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 20,
    },
    cartContainer: {
      marginTop: 20,
      display: 'flex',
      minWidth: 200,
      paddingLeft: 20,
      alignItems: 'center',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: '#f5f5f5',
      },
    },
    cartHeader: {
      paddingLeft: 20,
      paddingBottom: 10,
      minWidth: 200,
    },
    cartCountry: {
      display: 'flex',
      alignItems: 'center',
    },
    cartLink: {
      textDecoration: 'none',
      color: 'black',
    },
  })
)

export default useStyles
