import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

//CRIANDO O ENDPOINT PARA RECEBER E ENVIAR MENSAGENS A API DO GEMINI E ROTRNAR A RESPOSTA PARA O FROTN-END

app.post("/sendMessage", async (req, res) => {

    const { messages } = req.body
    console.log(messages[0]);

    const genAI = new GoogleGenerativeAI("AIzaSyAicTEtJbHzi3SkLOPtHhpxC2WDYkyzT48");      //Acessando a API do Gemini via sua API


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });    //Instanciando o modelo

    const prompt = messages[0].parts[0].text;              //Colocando o prompt

    const result = await model.generateContent(prompt);         //Enviando o prompot para o gemini e ESPERANDO a resposta
    console.log(result.response.text());

    res.json({
        chat_completion: result.response.text()
    })



})

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${3000}`);

})