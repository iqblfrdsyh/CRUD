import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import productRoute from "./routes/productRoute.js"

const app = express()
const port = 5000

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb+srv://iqblfrdsyh:punyaiqbal@cluster0.soat5s1.mongodb.net/iqbal?retryWrites=true&w=majority')
}

// Middleware
app.use(cors())
app.use(express.json())
app.use(productRoute)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
