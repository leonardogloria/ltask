import express from "express";
import consign from "consign";



const app = express();
app.set("json spaces",4);
consign()
	.include("models")
	.then("routes")
	.into(app);


app.listen(3000, () => console.log("LTask rodando!"));

