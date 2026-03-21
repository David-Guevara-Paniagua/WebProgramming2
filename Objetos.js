let alumno = {
    id: 320106158,
    nombre: "David",
    primerApellido: "Guevara",
    segundoApellido: "Paniagua",
    edad: 22,
    titulado: false,
    egresado: {
        estado: false
    },
    domicilio: {
        calle: {
            calle: "Ayutla",
            lote: 11,
            manzana: 100
        },
        numero: "24B",
        colonia: "Valle",
        alcaldia: "Gustavo A. Madero",
        estado: "CDMX",
        pais: "Mexico",
        continenete: "America"
    },
    kinder: {
        nombre: "Letras y numeros",
        actividadPrimerdia: function () {
            console.log("Colorear una hoja de papel");
        },
        actividadRecurrente: function () {
            console.log("Jugar en el patio");
        },
        datosMiss: {
            nombre: "Laura",
            edad: 29,
            estudios: "Maestria"
        }
    },
    primaria: {
        nombre: "Tatavasco",
        comer(comida) {
            return `Ahora estas comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Salon de Artes"));
console.log(alumno.primaria.comer("Ensalada"));
