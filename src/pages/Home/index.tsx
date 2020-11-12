import React from 'react'

import { CssBaseline } from '@material-ui/core'

import NavBar from '../../components/NavBar'
import CountriesList from '../../components/CountriesList'
import ThemeMenu from '../../components/ThemeMenu'

export default function Home() {
  return (
    <>
      <CssBaseline />
      <ThemeMenu />
      <NavBar />
      <CountriesList />
    </>
  )
}
