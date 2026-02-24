import axios from "axios";

const HOST = "localhost"; // your ip
const PORT = 5000; // Port of your API

const api = axios.create({
    baseURL: `http://${HOST}:${PORT}/`,
    headers: { "accept": "application/json" }
});

const sheets = {
    loginUser: (user) => api.post("/user", user),
    getAllComponents: () => api.get("/components")
}