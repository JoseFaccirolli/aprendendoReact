import { useState } from 'react';
import {
  TextField,
  Button,
  Avatar,
  Box,
  Container,
  Typography,
  responsiveFontSizes,
} from '@mui/material';



function Contador() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#020F22",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant='h2'>
        seu contador: {count}
      </Typography>
      <Button
      variant='contained'
      onClick={onClick}
      sx={{
        padding: 2,
        marginTop: 3,
        borderRadius: 4,
        fontSize: 20
      }}
      >
        Clique Aqui
      </Button>
    </Box>
  );
}

export default Contador;
