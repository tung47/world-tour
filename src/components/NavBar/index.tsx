import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import ThemeContext from '../Theme'
import { toggleMenuOpen } from '../../redux/actions/ui'
import SearchField from '../SearchField'
import ShoppingCart from '../ShoppingCart'
import { AppState } from '../../types'
import useStyles from './styles'

export default function NavBar() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { theme } = useContext(ThemeContext)
  const inCart = useSelector((state: AppState) => state.countries.inCart)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isCartOpen = Boolean(anchorEl)

  const handleCartOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleCartClose = () => setAnchorEl(null)

  const handleMenuOpen = () => dispatch(toggleMenuOpen(true))

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ backgroundColor: theme.color }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
              Countries
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <SearchField />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="show cart"
              aria-controls="shopping-cart"
              aria-haspopup="true"
              onClick={handleCartOpen}
              color="inherit"
            >
              <Badge badgeContent={inCart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ShoppingCart
        anchorEl={anchorEl}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
      />
    </div>
  )
}
