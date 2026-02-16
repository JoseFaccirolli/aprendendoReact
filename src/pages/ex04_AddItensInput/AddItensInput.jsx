import {
    Box,
    Container,
    Button,
    TextField,
    Typography
} from "@mui/material";
import { useState } from "react";

function AddItensInput() {
    const [names, setNames] = useState([]);
    const [name, setName] = useState("");

    const onClick = () => {
        setNames([...names, name]);
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <Box sx={{
            bgcolor: "#020F22",
            color: "white",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
        <Typography variant="h4" sx={{
            marginTop: 1
        }}>
            Names Creation
        </Typography>
        <TextField
        label="Name to Add"
        color="secondary"
        focused
        value={name}
        onChange={handleChange}
        sx={{
            marginTop: 3,
            '& .MuiInputBase-input': {color: 'white'}
        }}/>
        <Button
        variant="outlined"
        color="secondary" 
        onClick={onClick}
        sx={{
            marginTop: 2
        }}>
            Submit
        </Button>

        <Container maxWidth={false} sx={{
            marginTop: 3,
            display: "flex",
            flexWrap: "wrap"
        }}>
            {names.map((item, index) => (
                <Box key={index} sx={{
                    bgcolor: "blue",
                    minWidth: 100,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 1.5,
                    marginRight: 1.5,
                    marginTop: 3
                }}>
                    {item}
                </Box>
            ))}
        </Container>

        </Box>
    );
}

export default AddItensInput;