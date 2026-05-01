import app from "./app.js";
import env from "dotenv";
env.config();
const PORT = process.env.PORT|| 3000;
const HOST = process.env.HOST ||"localhost";

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server is running on http://${HOST}:${PORT}`);
    }
});
