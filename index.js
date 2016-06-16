import express from "express";
import consign from "consign";



const app = express();
app.set("json spaces",4);
consign()
	.include("routes")
	.into(app);


app.listen(PORT, () => console.log("LTask rodando!"));

