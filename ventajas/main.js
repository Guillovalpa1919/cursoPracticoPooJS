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

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }
  
class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
  }




class Coures {
    constructor({
        name, 
        classes=[],
        isFree = false, 
        lang = "spanish"
    })
    {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    //encapsulamiento 
    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if (nuevoNombre === "curso malito de programacion basica"){
            console.error("wey... no")
        }else{
            this._name = nuevoNombre;
        }
        
    }
}

//instacias de la clase Courses

const CursoBasicoDeProgramacion = new Coures ({
    name: "curso basico de programacion",
    classes :[],
    isFree: true,
})

const CursoDefinitivodeHTML = new Coures ({
    name: "curso definitivo de HTML",
    classes :[]
});

const cursoPracticoDeHTML = new Coures ({
    name: "curso Practico de HTML",
    classes :[],
    lang:"english"
});

const CursoBasicoDeJavaScript = new Coures ({
    name: "curso basico de JavaScript",
    classes :[]
});

const CursoDeReact = new Coures ({
    name: "curso de React",
    classes :[]
});

const CursoDefinitivoDePhyton = new Coures ({
    name: "curso definitivo de phyton",
    classes :[]
});

const CursoBasicoDeDjango = new Coures ({
    name: "curso basico de django",
    classes :[]
});

const CursoAvanzadoDePhyton = new Coures ({
    name: "curso avanzado de phyton",
    classes :[]
});

const CursoDeInglesBasico = new Coures ({
    name: "curso de ingles Basico",
    classes :[]
});

const CursoDeInglesConversacional = new Coures ({
    name: "curso de ingles conversacional",
    classes :[]
});

const CursoDeInglesAvanzado = new Coures ({
    name: "curso de ingles avanzado",
    classes :[]
});

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
        CursoDefinitivodeHTML,
        CursoBasicoDeJavaScript,
        cursoPracticoDeHTML,
        CursoDeReact,
        CursoBasicoDeProgramacion
    ]
})

const escuelaPhyton = new LearningsPaths ({
    name :"Escuela de Phyton",
    courses : [
        CursoDefinitivoDePhyton,
        CursoBasicoDeDjango,
        CursoAvanzadoDePhyton,
        CursoBasicoDeProgramacion
    ]
})

const escuelaIngles = new LearningsPaths ({
    name :"Escuela de ingles",
    courses : [
        CursoDeInglesBasico,
       CursoDeInglesConversacional,
       CursoDeInglesAvanzado
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
        this.socialMedia={
            twitter,
            facebook,
            instagram,
        },
        this.approvedCourses=approvedCourses;  
        this.learningsPaths=learningsPaths;
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo siento" + this.name + "solo puedes tomar cursos abiertos" )
        }
    }
}
 
class BasicStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo siento" + this.name + "no puedes tomar cursos en ingles" )
        }
    }

}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
    this.approvedCourses.push(newCourse);
    }
}


const guiller = new FreeStudent ({
    name:"guillermo",
    email: "guillermo@ejemplo.com",
    learningsPaths:[
        escuelaDW, escuelaIngles
    ],
    approvedCourses:[CursoBasicoDeProgramacion]
    
})

const felipe = new BasicStudent ({
    name:"felipe",
    email: "felipe@ejemplo.com",
    learningsPaths:[
        escuelaDW, escuelaIngles
    ],
    approvedCourses:[CursoBasicoDeProgramacion, cursoPracticoDeHTML,CursoAvanzadoDePhyton]
    
})
