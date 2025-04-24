const http = require("http");
const pageData = require("./data");

const server = http.createServer((req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageData.title}</title>
    </head>
    <body>
      <h1>${pageData.title} hola</h1>
      <h2>${pageData.subtitle}</h2>
      <p>${pageData.description}</p>
    </body>
    </html>
  `;

  res.end(htmlContent);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
