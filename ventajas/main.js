// objetos literales
const juanito = {
    name : "Juan gomez",
    email: "juan@ejemplo.com",
    points: 100,
    socialMedia:{
        twitter:"@juangf",
        instagram:"juan_gf",
        facebook: undefined,
    },
    approvedCourses: [
        "curso definitivo de HTML",
        "curso basico de JavaScript"
    ],
    learningsPaths : [
        {name: "escuela de desarrollo web",
        courses: [
            "curso definitivo de HTML",
            "curso basico de JavaScript",
            "curso Practico de HTML"
        ]
        },
        {
            name:"escuela de videoJuegos",
            courses:[
                "curso de Unreal Engine",
                "curso de unity 3D"
            ]
        }
    ]
}

const pepito = {
    name : "Pepito perez",
    email: "pepito@ejemplo.com",
    points: 100,
    socialMedia:{
        twitter:"@pepitop",
        instagram:"pepito_p",
        facebook: undefined,
    },
    approvedCourses: [
        "curso definitivo de phyton",
        "curso basico de django"
    ],
    learningsPaths : [
        {name: "escuela de Phyton",
        courses: [
        "curso definitivo de phyton",
        "curso basico de django",
        "curso Practico de HTML"
        ]
        },
        {
            name:"escuela de ingles",
            courses:[
                "curso de ingles Basico",
                "curso de ingles conversacional"
            ]
        }
    ]
}
    
// vamos a crear clases.

class LearningsPaths {
    constructor({
        name,
        courses = [],
    })
    {
        this.name = name;
        this.courses =courses;
    }
}

//instancias de la clase LearningPaths

const escuelaDW = new LearningsPaths ({
    name :"Escuela de desarrollo web",
    courses : [
        "curso definitivo de HTML",
        "curso basico de JavaScript",
        "curso Practico de HTML",
        "curso de React"
    ]
})

const escuelaPhyton = new LearningsPaths ({
    name :"Escuela de Phyton",
    courses : [
        "curso definitivo de phyton",
        "curso basico de django",
        "curso Practico de HTML",
        "curso avanzado de phyton"
    ]
})

const escuelaIngles = new LearningsPaths ({
    name :"Escuela de ingles",
    courses : [
        "curso de ingles Basico",
        "curso de ingles conversacional",
        "curso de ingles avanzado"
    ]
})


class Student {
    constructor({
        name,
        email,
        nickname,
        twitter,
        facebook,
        instagram,
        approvedCourses=[],
        learningsPaths=[],    
    })
    {
        this.name= name;
        this.email=email;
        this.nickname=nickname;
        this.approvedCourses=[
            twitter=twitter,
            facebook=facebook,
            instagram=instagram,
        ],
        this.approvedCourses=approvedCourses;  
        this.learningsPaths=learningsPaths;
    }
}

const guiller = new Student ({
    name:"guillermo",
    email: "guillermo@ejemplo.com"
})
