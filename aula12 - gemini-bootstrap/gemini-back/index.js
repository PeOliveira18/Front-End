import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

//CRIANDO O ENDPOINT PARA RECEBER E ENVIAR MENSAGENS A API DO GEMINI E ROTRNAR A RESPOSTA PARA O FROTN-END

app.post("/sendMessage", async(req,res) => {
    
    const { messages } = req.body
    console.log(messages);
    


})

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${3000}`);
    
})