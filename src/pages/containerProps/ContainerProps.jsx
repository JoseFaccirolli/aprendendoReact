import {
    Box,
    Container,
    Typography
} from "@mui/material";

function ContainerProps() {
    // This makes the container become the background and become fullsized
    return (
        <Container maxWidth={false} disableGutters={true}
        sx={{
            bgcolor: "#051A38",
            height: "100vh"
        }}
        >
            <Box
            sx={{
                bgcolor: "blue",
                width: "100%",
                height: "100px"
            }}
            >
                <Typography variant="h3">
                    Hello World
                </Typography>
            </Box>
        </Container>
    );
}

export default ContainerProps;
