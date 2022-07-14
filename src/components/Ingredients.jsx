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
      <span className='title-ingredients display-5 d-flex'>Ingredients</span>
      {ingredients?.map((ingredient) => (
      <div className="checkbox">
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={ingredient.title} />
      </FormGroup>
      </div>
      ))}
            <span className='title-ingredients display-5 mt-4'>Preparation mode</span>
            <h5 className='d-flex mt-4 fs-4'>Lasanha</h5>
            <li><span className='preparation'>kdsamnkfmnlkamnsklfk</span>
            </li>
    </div>
    </ThemeProvider>
  )
}

export default Ingredients
