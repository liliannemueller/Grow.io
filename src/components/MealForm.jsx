import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  overflow: 'scroll',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function MealForm(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState({
      calories: " ",
      protein: " ",
      fats: " ",
      carbs: " ",
      fiber: " "
    })

    function handleChange(event) {
      const {id, value} = event.target;

      setInput(prevInput => {
        return {
          ...prevInput,
          [id]: value
        }
      })
    }

    function handleClick(event){
      event.preventDefault();
      console.log(input)
    }
    return (
         <div>
        
      <Button className = "modalButton" onClick={handleOpen}>Log Meal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log your meal
          </Typography>
             <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Which Meal is this?
                        </InputLabel>
                        <NativeSelect
                        defaultValue={"breakfast"}
                        inputProps={{
                            // name: 'age',
                            // id: 'uncontrolled-native',
                            name: 'meal'
                        }}
                        >
                        <option value={'breakfast'}>Breakfast</option>
                        <option value={'lunch'}>Lunch</option>
                        <option value={'dinner'}>Dinner</option>
                        <option value={'snack'}>Snack</option>
                        </NativeSelect>
                    </FormControl>
                 </Box>
              <TextField onChange={handleChange} id="calories" label="Calories" value={input.calories} variant="outlined" />
              <TextField onChange={handleChange} id="protein" label="Protein" value={input.protein} variant="outlined" />
              <TextField onChange={handleChange} id="fats" label="Fats" value={input.fats} variant="outlined" />
              <TextField onChange={handleChange} id="carbs" label="Carbs" value={input.carbs} variant="outlined" />
              <TextField onChange={handleChange} id="fiber" label="Fiber" value={input.fiber} variant="outlined" />
              <button className = "submit-button" onClick ={handleClick}>Submit</button>
            </Box>
        </Box>
        
      </Modal>
    </div>
    )
};