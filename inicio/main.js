const natalia = {
    name: "Natalia",
    age:20,
    cursosAprobados:[
        "curso definitivo de HTML",
        "curso practivo de html"
    ],
    aprobarCursos(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    },
}

// agregar otro curso aprobado
natalia.cursosAprobados.push("curo de responsive design");


// vamos a crear un prototipo
function Student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCursos = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//instacia del prototipo 
const Guillermo = new Student(
    "Guillermo Andres",
    29,
    [
        "fisica", "calculo", "quimica"
    ]
)

//prototipo con la sintaxis de clases

class Estudiante2 {
    constructor({
        email,
        name,
        age,
        twitter,
        cursosAprobados=[]
    })
    {
        this.email = email,
        this.name = name,
        this. age = age,
        this.twitter = twitter,
        this.cursosAprobados = cursosAprobados
    }
    aprobarCursos(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }

}

