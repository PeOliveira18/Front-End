// const { GoogleGenerativeAI } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyAicTEtJbHzi3SkLOPtHhpxC2WDYkyzT48");      //Acessando a API do Gemini via sua API


const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });    //Instanciando o modelo

const prompt = "Me explque a formula de bhaskara";              //Colocando o prompt

const result = await model.generateContent(prompt);         //Enviando o prompot para o gemini e ESPERANDO a resposta
console.log(result.response.text());