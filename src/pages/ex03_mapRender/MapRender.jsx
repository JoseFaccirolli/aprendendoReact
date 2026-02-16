import {
    Box,
    Button,
    Typography,
    Container
} from "@mui/material";

function MapRender() {
    const nomes = ["José", "Maria", "Carlos"];
    return (
        <Box sx={{
            minHeight: "100vh",
            backgroundColor: "#020F22",
            color: "white",
        }}>
            <Container maxWidth={false}>
                <Typography variant="h2">
                    Lista de Nomes
                </Typography>
            </Container>
            
            <Container maxWidth={false} sx={{
                display: "flex"
            }}>
                {nomes.map((item, index) => (
                    <Box key={index} sx={{
                        bgcolor: "blue",
                        width: 100,
                        height: 100,
                        fontSize: 25,
                        marginRight: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {item}
                    </Box>
                ))}
            </Container>
            
        </Box>
    );
}

export default MapRender;