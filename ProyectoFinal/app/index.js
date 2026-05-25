const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
app.use(express.static("views"));

const pool = mysql.createPool({
    host: "mysql",
    user: "root",
    password: "root123",
    database: "transporte",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/choferes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboardChoferes.html'));
});

app.get('/vehiculos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboardBiciTaxis.html'));
});

app.get("/api/choferes", (req, res) => {
    pool.query("SELECT * FROM chofer", (err, results) => {
        if (err) {
            return res.status(500).json({ 
                error: "Error en la consulta", 
                detalles: err.message || err 
            });
        }

        res.json(results); 
    });
});

app.get("/api/vehiculos", (req, res) => {
    pool.query("SELECT * FROM transporte", (err, results) => {
        if (err) {
            return res.status(500).json({ 
                error: "Error en la consulta", 
                detalles: err.message || err 
            });
        }

        res.json(results); 
    });
});



app.post("/api/choferes", (req, res) => {
    const { nombre, telefono, licencia, estado, correo } = req.body;

    if (!nombre || !licencia) {
        return res.status(400).json({ error: "Faltan campos obligatorios (nombre, licencia)" });
    }

    const choferSimulado = {
        id: Math.floor(Math.random() * 500) + 1, 
        nombre,
        telefono: telefono || null,
        licencia,
        estado: estado || "Activo",
        correo: correo || null
    };

    res.status(201).json({
        mensaje: "Chofer creado exitosamente (Simulación)",
        datos: choferSimulado
    });
});

app.delete("/api/choferes/:id", (req, res) => {
    const idChofer = req.params.id;

    res.status(200).json({
        mensaje: `Chofer con ID ${idChofer} eliminado correctamente (Simulación)`,
        idEliminado: idChofer
    });
});


app.get("/api/vehiculos", (req, res) => {
    pool.query("SELECT * FROM transporte", (err, results) => {
        if (err) {
            return res.status(500).json({ 
                error: "Error al consultar los vehículos", 
                detalles: err.message || err 
            });
        }
        res.json(results); 
    });
});

app.post("/api/vehiculos", (req, res) => {
    const { modelo, placas, tipo, kilometraje, estado, chofer_id } = req.body;

    if (!modelo || !placas) {
        return res.status(400).json({ error: "Faltan campos obligatorios (modelo, placas)" });
    }

    // Estructura idéntica a la tabla 'transporte' del SQL
    const vehiculoSimulado = {
        id: Math.floor(Math.random() * 500) + 1,
        modelo,
        placas,
        tipo: tipo || "Estándar",
        kilometraje: kilometraje || "0",
        estado: estado || "Disponible",
        chofer_id: chofer_id || null // Llave foránea hacia la simulación de chofer
    };

    res.status(201).json({
        mensaje: "Vehículo registrado exitosamente (Simulación)",
        datos: vehiculoSimulado
    });
});

app.delete("/api/vehiculos/:id", (req, res) => {
    const idVehiculo = req.params.id;

    res.status(200).json({
        mensaje: `Vehículo con ID ${idVehiculo} dado de baja exitosamente (Simulación)`,
        idEliminado: idVehiculo
    });
});


app.use((req, res) => {
    res.status(404).json({ error: "Recurso no encontrado" });
});

app.listen(3000, () => {
    console.log("Servidor Express corriendo en el puerto 3000");
});