import { useState } from 'react';
import {
  TextField,
  Box,
  Typography,
} from '@mui/material';

function InputControl() {

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const [input, setInput] = useState("");

    return (
        <Box sx={{
            minHeight: "100vh",
            backgroundColor: "#020F22",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
        <Typography variant='h3' sx={{marginBottom: 3}}>
            Seu input: {input}
        </Typography>
        <TextField
        label="Input Here"
        color="secondary"
        focused
        value={input}
        onChange={handleChange}
        sx={{
            '& .MuiInputBase-input': {color: 'white'}
        }}
        />
        </Box>
    );
}

export default InputControl;
