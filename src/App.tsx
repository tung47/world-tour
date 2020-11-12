import React, { useState } from 'react'

import Routes from './Routes'
import ThemeContext, { themes, handleSwitchTheme } from './components/Theme'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.blue,
    switchTheme: (color: string) => {
      setContext((current) => ({
        ...current,
        theme: handleSwitchTheme(color),
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <Routes />
    </ThemeContext.Provider>
  )
}
