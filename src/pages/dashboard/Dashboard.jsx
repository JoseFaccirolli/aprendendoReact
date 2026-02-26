import {
    Container,
    Box,
    Typography
} from "@mui/material";
import { BarChart, PieChart } from '@mui/x-charts';

function Piechart() {
    const ingressos = [
        { id: 1, value: 43, label: "System of a Down" },
        { id: 2, value: 26, label: "Avenged Sevenfold" },
        { id: 3, value: 37, label: "Linkin Park" },
        { id: 4, value: 53, label: "Pearl Jam" },
        { id: 5, value: 65, label: "Deaftones" }
    ];
    const style = {
        box: {
            bgcolor: "#2C4770",
            height: 350,
            width: "33%",
            border: 2,
            borderColor: "#7F7E7E",
            p: 2
        },
            }

    return (
        <Container maxWidth={false} disableGutters
            sx={{
                height: "100vh",
                bgcolor: "#051A38",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 2
            }}
        >
            <Typography variant="h2" color="white" >Venda de ingressos online</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                gap: 4,
                mt: 2
            }}>
                <Box sx={style.box}>
                    <Typography
                        variant="h5"
                        sx={{ textAlign: "center", color: "#fff" }}
                    >
                        Ingressos vendidos por evento
                    </Typography>
                    <PieChart
                        series={[
                            {
                            data: ingressos // Dados que viriam da API
                            },
                        ]}
                        width={400}
                        height={200}
                        sx={{
                            '& .MuiChartsLegend-label': {
                            color: '#ffffff !important', // Cor da legenda
                            },
                            '& .MuiPieArc-root': {
                            stroke: '#2C4770 !important', // Cor da linha
                            strokeWidth: 2, // Espessura da linha 
                            },
                            mt: 3
                        }}
                    />
                </Box>
                <Box sx={style.box}>
                    <Typography
                        variant="h5"
                        sx={{ textAlign: "center", color: "#fff" }}
                    >
                        Exemplo
                    </Typography>
                    <BarChart
                        xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        height={250}
                        sx={{
                            '& .MuiChartsAxis-line': {
                                stroke: '#ffffff !important', // Linhas dos eixos
                            },
                            '& .MuiChartsAxis-tick': {
                                stroke: '#ffffff !important', // Marcações (risquinhos)
                            },
                            '& .MuiChartsAxis-tickLabel': {
                                fill: '#ffffff !important', // Textos/Números dos eixos (SVG usa fill)
                            },
                            mt: 2
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Piechart;
