import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port =3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/express", (req, res) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.");
});
app.get("/greeting", (req, res) => {
    res.send("Hello, Márkó");
})

app.get("/nodejs", (req, res) => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000, () => {
    console.log('server is listen on port: 3000');
  });


  