const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Agrega esta línea para servir archivos estáticos

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/home`);
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/perfil.html');
// });
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/perfil.html');
// });
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/perfil.html');
// });
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/peliculas.html');
// });
let usarios = [];


app.post('/datos', (req, res) => {
    const { usuario, email, password } = req.body;
    const newusuario = {
        usuario: usuario,
        email: email,
        password: password
    }
    console.log(newusuario);
    
    usarios.push(newusuario);
    if (usuario == 'pepe' && password == '1234') {
        res.sendFile(__dirname + '/logeado.html');
        
    } else {
        
            res.redirect('/loading');
       
    }
});


app.get("/perfil", (req, res) => {
    res.sendFile(__dirname + '/perfil.html');
})
app.get("/peliculas", (req, res) => {
    res.sendFile(__dirname + '/peliculas.html');
})
app.get("/series", (req, res) => {
    res.sendFile(__dirname + '/series.html');
})
app.get("/categoria", (req, res) => {
    res.sendFile(__dirname + '/categoria.html');
})
app.get("/error", (req, res) => {
    res.sendFile(__dirname + '/error.html');
})
app.get("/loading", (req, res) => {
    res.sendFile(__dirname + '/loading.html');
})




