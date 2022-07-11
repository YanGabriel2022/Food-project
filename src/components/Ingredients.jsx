import { Checkbox } from '@mui/material'
import React from 'react'
import"../components/Ingredients.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component
    MuiCheckbox: {
      styleOverrides: {
        root: {
        },
      },
    }
  },
});

const Ingredients = ({ingredients}) => {

  return (
    <ThemeProvider theme={theme}>
    <div className='container-ingred container'>
      <h2 className='title-ingredients display-4'>Ingredients</h2>
      {ingredients?.map((ingredient) => (
      <div className="checkbox">
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={ingredient.title} />
      </FormGroup>
      </div>
      ))}
    </div>
    </ThemeProvider>
  )
}

export default Ingredients
