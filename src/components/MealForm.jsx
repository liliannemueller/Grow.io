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
    Description: '',
    Calories: 0,
    Protein: 0,
    Fats: 0,
    Carbs: 0,
    Fiber: 0,
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
  const handleDescriptionChange = (event) => {
    event.target.id = "Description";
    handleInputChange(event); 
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      
    try {
      const response = await fetch('http://localhost:3000/meals/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Meal logged successfully!');
      } else {
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
        <Button className ="modalButton" onClick={handleOpen}>Log Meal</Button>
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
        <InputLabel id="Description-label">Which Meal?</InputLabel>
        <Select
          defaultValue = "" 
          labelId="Description-label"
          id="Description"
          name="Description"
          value={formData.Description}
          label="Meal"
          onChange={handleDescriptionChange}
        >
          <MenuItem className="menu-item" value={"Breakfast"}>Breakfast</MenuItem>
          <MenuItem className="menu-item" value={"Lunch"}>Lunch</MenuItem>
          <MenuItem className="menu-item" value={"Dinner"}>Dinner</MenuItem>
          <MenuItem className="menu-item" value={"Snack"}>Snack</MenuItem>
          <MenuItem className="menu-item" value={"Pre/Post Workout"}>Pre/Post Workout</MenuItem>
        </Select>
      </FormControl>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
              >
                <TextField
                id="Calories"
                label="Calories"
                variant="outlined"
                value={formData.Calories}
                onChange={handleInputChange}
              />
              <TextField
                id="Protein"
                label="Protein"
                variant="outlined"
                value={formData.Protein}
                onChange={handleInputChange}
              />
              <TextField
                id="Fats"
                label="Fats"
                variant="outlined"
                value={formData.Fats}
                onChange={handleInputChange}
              />
              <TextField
                id="Carbs"
                label="Carbs"
                variant="outlined"
                value={formData.Carbs}
                onChange={handleInputChange}
              />
              <TextField
                id="Fiber"
                label="Fiber"
                variant="outlined"
                value={formData.Fiber}
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