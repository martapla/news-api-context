/* eslint-disable no-unused-vars */
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import useNews from '../hooks/useNews';

const Categories = [
    { value: 'general', label: 'General' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'technology', label: 'Technology'},
]


const Form = () => {

  const {category, handleChangeCategory} = useNews()
    
  return (
    <form>
          <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category"
                  onChange={handleChangeCategory}
                  value={category}
              >
                  
                  {Categories.map(category => (
                   
                      <MenuItem
                          key={category.value}
                          value={category.value}
                      >
                          {category.label} 
                      </MenuItem>
                  ))}
              </Select>
              <Box sx={{ p: 2, border: '2px'}}>
                <Button fullWidth variant='contained' color="secondary" >Search news</Button>
              </Box>
          </FormControl> 

    </form>
  )
}

export default Form