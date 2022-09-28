//VARIABLES GLOBALES//

let menuKey = true;

//ESTA FUNCION GENERA EL BACKGROUND//

function createBackground(sectionname, spansize, spanproportions, time) {
    const section = document.getElementById(sectionname);
    const star = document.createElement('span');

    let size = Math.random() *spansize;

    star.style.width = spanproportions + size + 'px'; 
    star.style.height = spanproportions + size + 'px';

    star.style.top = Math.random() * innerHeight + 'px';
    star.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(star);

    setTimeout(() => {
        star.remove()
    }, time);

}

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "HOME"//

function createSky() {

    createBackground('background-animation1', 4, 2, 10000);    

};

setInterval(createSky, 150);

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "SOBRE MI"//

function createSquare() {

    createBackground('background-animation2', 50, 20, 10000);    

};

setInterval(createSquare, 650);

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "PROYECTOS"//

function createBubble() {

    createBackground('background-animation4', 100, 10, 5000);    

};

setInterval(createBubble, 450);

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "CONTACTAME"//

function createMirror() {

    createBackground('background-animation5', 75, 10, 10000);    

};

setInterval(createMirror, 500);

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "TECNOLOGIAS"//

const colors = [
    '#752fc5',
    '#e73838',
    '#fad70e',
    '#00e913'
];

function createCircle(){

    const tecno = document.getElementById('background-animation3');
    const circle = document.createElement('span');

    let size = Math.random() * 75;
    
    circle.style.width = 20 + size + 'px'; 
    circle.style.height = 20 + size + 'px';

    circle.style.top = Math.random() * innerHeight + 'px';
    circle.style.left = Math.random() * innerWidth + 'px';
    
    let bg = colors[Math.floor(Math.random() * colors.length)];
    circle.style.background = bg;

    tecno.appendChild(circle);

    setTimeout(() => {
        circle.remove()
    }, 20000);

};

setInterval(createCircle, 750);

//ESTAS FUNCIONES CONTROLAN EL DESPLIEGUE DEL MENU EN LA VERSION MOBIL//

function abrirMenu() {

document.getElementById('navicon').addEventListener('click', function() {
     
    const iconoAbrir = document.getElementById('navicon');
    iconoAbrir.style.display = 'none';

    const iconoCerrar = document.getElementById('navicon1');
    iconoCerrar.style.display = 'block';

    const menuApertura = document.getElementById('menu');
    menuApertura.style.display = 'flex';

    menuKey = false;
});
};
      
abrirMenu();

function cerrarMenu() {

    const target = 'navicon1'
    window.addEventListener('mouseup', function(event) {
        if(event.target !== target && !menuKey) {
            const iconoCerrar1 = document.getElementById('navicon1');
            iconoCerrar1.style.display = 'none';
    
            const iconoAbrir1 = document.getElementById('navicon');
            iconoAbrir1.style.display = 'block';
    
            const menuApertura1 = document.getElementById('menu');
            menuApertura1.style.display = "none";

            menuKey = true;
        };
    });
};
    
cerrarMenu();

//ESTA FUNCION CONTROLA EL DESPLIEGUE DEL CONTENIDO DE LA GALERIA "TECNOLOGIAS"//

const imagenes = [
   './images/html.png',
   './images/css.png',
   './images/js.png',
   './images/react.png',
   './images/nodelogo.png',
   './images/bootstrap.png',
   './images/mysql.png',
   './images/npm.png',
   './images/git.png',
   './images/postman.png'
];
const nombrelogos = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT JS',
    'NODE JS',
    'BOOTSTRAP',
    'MYSQL',
    'NPM',
    'GIT',
    'POSTMAN'
];

function galeriaTech() {

    const galeriat = document.getElementById('techgallery');

    for(let i = 0; i < 10; i++){
        let picture = document.createElement('div');
        let image =  document.createElement('img');
        let nombre =  document.createElement('p');

        galeriat.appendChild(picture);
        picture.appendChild(image);
        picture.appendChild(nombre);

        image.setAttribute('src', imagenes[i]);
        image.setAttribute('alt', 'logos');

        nombre.innerHTML = nombrelogos[i];

    };
   
};

galeriaTech();

//ESTA FUNCION CONTROLA LA TRANSICION ENTRE DIFERENTES SECCIONES.//

const pageSections = [
    'home',
    'sobremi',
    'tecnologias',
    'proyectos',
    'contacto'
] 

function sectionSelector (targetsection) {
    
    pageSections.forEach( function (sec) {
        if(sec === targetsection) {
            const targetSec = document.getElementById(targetsection);
            targetSec.style.display = 'block';
        }else{
            const noTargetSection = document.getElementById(sec);
            noTargetSection.style.display = 'none';
        }

        if(targetsection === 'home') {
            const homeInvitacion = document.getElementById('invproyectos');
            homeInvitacion.style.display = 'none';

            const homeSaludo = document.getElementById('bienvenida');
            homeSaludo.style.display = 'block';

            const naviconhome = document.getElementById('navicon');
            naviconhome.style.top = '1vh';

        } else if(targetsection === 'tecnologias') {
            const tecSaludo = document.getElementById('bienvenida');
            tecSaludo.style.display = 'none';

            const tecInvitacion = document.getElementById('invproyectos');
            tecInvitacion.style.display = 'block';
        
            const navicontecnologias = document.getElementById('navicon');
            navicontecnologias.style.top = '-2vh';
        } else {
            const otroSaludo = document.getElementById('bienvenida');
            otroSaludo.style.display = 'none';

            const otroInvitacion = document.getElementById('invproyectos');
            otroInvitacion.style.display = 'none';
        
            const naviconcontactame = document.getElementById('navicon');
            naviconcontactame.style.top = '-2vh';
        }
    })
}

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "HOME".//

function homeP() {
    
    document.getElementById('homebutton').addEventListener('click', function() {

        sectionSelector ('home');              

    });
};

homeP();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "SOBRE MI".//

function sobreMi() {
    
    document.getElementById('sobremibutton').addEventListener('click', function() {

        sectionSelector ('sobremi');        

    });
};

sobreMi();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "TECNOLOGIAS".//

function tecnologiasP() {
    
    document.getElementById('tecnologiasbutton').addEventListener('click', function() {

        sectionSelector ('tecnologias');       

    });
};

tecnologiasP();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "PROYECTOS".//

function proyectosP() {
    
    document.getElementById('proyectosbutton').addEventListener('click', function() {

        sectionSelector ('proyectos');        

    });
};

proyectosP();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "CONTACTAME".//

function contactameP() {
    
    document.getElementById('contactamebutton').addEventListener('click', function() {

        sectionSelector ('contacto');        

    });
};
contactameP();
