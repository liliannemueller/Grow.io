import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import '../styles/variables.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function MealForm(props){
    const [open, setOpen] = React.useState(false);

    const [formData, setFormData] = React.useState({
    calories: '',
    protein: '',
    fats: '',
    carbs: '',
    fiber: '',
  });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

    const handleSubmit = async () => {
    try {
      // Send the form data to your server using a POST request
      const response = await fetch('/meals/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle a successful response (e.g., show a success message)
        console.log('Meal logged successfully!');
      } else {
        // Handle an error response (e.g., show an error message)
        console.error('Failed to log meal');
      }

      // Close the modal
      handleClose();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
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
              <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Which Meal?</InputLabel>
      <Select
        labelId="meal-type"
        id="meal-description"
        value={formData.description}
        label="description"
        
      >
        <MenuItem value={formData.description}>Breakfast</MenuItem>
        <MenuItem value={formData.description}>Lunch</MenuItem>
        <MenuItem value={formData.description}>Dinner</MenuItem>
        <MenuItem value={formData.description}>Snack</MenuItem>
        <MenuItem value={formData.description}>Pre/Post Workout</MenuItem>
      </Select>
    </FormControl>
             <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
              id="description"
              label="Description"
              variant="outlined"
              value={formData.description}
              onChange={handleInputChange}
            />
              <TextField
              id="calories"
              label="Calories"
              variant="outlined"
              value={formData.calories}
              onChange={handleInputChange}
            />
            <TextField
              id="protein"
              label="Protein"
              variant="outlined"
              value={formData.protein}
              onChange={handleInputChange}
            />
            <TextField
              id="fats"
              label="Fats"
              variant="outlined"
              value={formData.fats}
              onChange={handleInputChange}
            />
            <TextField
              id="carbs"
              label="Carbs"
              variant="outlined"
              value={formData.carbs}
              onChange={handleInputChange}
            />
            <TextField
              id="fiber"
              label="Fiber"
              variant="outlined"
              value={formData.fiber}
              onChange={handleInputChange}
            />
            <Button
              id="submit-button"
              style={{ background: 'black' }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            </Box>
        </Box>
      </Modal>
    </div>
    )
};