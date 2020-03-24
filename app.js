const path = require("path");
const express = require("express");
const webRoutes = require("./routes/web.js");
const hbs= require("hbs");

const app = express();

// path configuration for express
const publicDirectory = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

//handlebars configuration
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));

app.get("/", webRoutes.root);
app.get("/about", webRoutes.about);
app.get("/help", webRoutes.help);
app.get("/weather", webRoutes.weather);
app.get("*", webRoutes.p404);
const port = process.env['PORT'] || 3000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});