import React from 'react'
import { useDispatch } from 'react-redux'

import InputBase from '@material-ui/core/InputBase'

import { handleInputToSaga } from '../../redux/actions/ui'
import useStyles from './styles'

export default function SearchField() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => dispatch(handleInputToSaga(event.target.value))

  return (
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleInput}
    />
  )
}
