CREATE DATABASE transporte;
USE transporte;
CREATE TABLE chofer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    licencia VARCHAR(50),
    estado VARCHAR(20),
    correo VARCHAR(50)
);
CREATE TABLE bicitaxi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100),
    placas VARCHAR(30),
    tipo VARCHAR(50),
    kilometraje VARCHAR(50),
    estado VARCHAR(20)
    chofer_id INT,

    FOREIGN KEY (chofer_id)
    REFERENCES chofer(id)
);

INSERT INTO chofer (nombre, telefono, licencia, estado, correo) 
VALUES ("Carlos Pérez", "+52 55 1234 5678", "A-12345678", "En Ruta", "carlos.perez@email.com"),
("Alejandro Mendoza", "+52 55 8765 4321", "B-98765432", "Disponible", "a.mendoza@email.com");

INSERT INTO bicitaxi VALUES
("BiciTaxi Premium Techado", "XYZ-987-A", "Techado", "145230", "En ruta", 1),
("EcoBici Eco Eco", "ABC-123-B", "Simple", "89450", "Disponible", 1),
("BiciTaxi Cargo Box", "MNO-456-C", "Techado", "210115", "En taller", 2);