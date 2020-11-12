import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  CircularProgress,
} from '@material-ui/core'

import { fetchCountriesRequest } from '../../redux/actions/countries'
import AddButton from '../AddButton'
import ThemeContext from '../Theme'
import { AppState } from '../../types'
import useStyles from './styles'

function CountriesList() {
  let data = useSelector((state: AppState) => state.countries.countries)
  const error = useSelector((state: AppState) => state.countries.error)
  const searchKey = useSelector((state: AppState) => state.ui.searchKey)
  const [ascendingOrder, setSortOrder] = useState(true)
  const [countries, setCountries] = useState(data)
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountriesRequest())
  }, [dispatch])

  useEffect(() => {
    setCountries(data)
  }, [data])

  const handleSort = () => {
    setSortOrder(!ascendingOrder)
    countries.reverse()
    setCountries(countries)
  }

  const classes = useStyles()

  return (
    <>
      {error && <div>Error occur</div>}
      {data.length < 1 ? (
        <div className={classes.loading}>
          <CircularProgress
            size="5rem"
            style={{ color: theme.color }}
            disableShrink={true}
          />
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHead}>Flag</TableCell>
                <TableCell className={classes.tableHead}>
                  <TableSortLabel
                    direction={ascendingOrder ? 'asc' : 'desc'}
                    onClick={handleSort}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell className={classes.tableHead}>Languages</TableCell>
                <TableCell className={classes.tableHead}>Population</TableCell>
                <TableCell className={classes.tableHead}>Region</TableCell>
                <TableCell>{/*button column */}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries
                .filter(({ name }) =>
                  name.toLowerCase().includes(searchKey.toLowerCase())
                )
                .map((country) => (
                  <TableRow key={country.name}>
                    <TableCell className={classes.image}>
                      <Link to={`/country/${country.name}`}>
                        <img
                          className={classes.img}
                          src={country.flag}
                          alt={country.name}
                        />
                      </Link>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Link
                        to={`/country/${country.name}`}
                        className={classes.countryName}
                      >
                        {country.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {country.languages.map(({ name }) => (
                        <li key={name}>{name}</li>
                      ))}
                    </TableCell>
                    <TableCell>
                      {new Intl.NumberFormat('fi-FI', {
                        useGrouping: true,
                      }).format(country.population)}
                    </TableCell>
                    <TableCell>{country.region}</TableCell>
                    <TableCell>
                      <AddButton country={country} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default CountriesList
