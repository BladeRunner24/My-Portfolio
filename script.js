//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "HOME"//

function createSky() {

    const section = document.getElementById('background-animation1');
    const star = document.createElement('span');

    let size = Math.random() * 4;

    star.style.width = 2 + size + 'px'; 
    star.style.height = 2 + size + 'px';

    star.style.top = Math.random() * innerHeight + 'px';
    star.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(star);

    setTimeout(() => {
        star.remove()
    }, 10000);

};

setInterval(createSky, 150);

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "SOBRE MI"//

function createSquare() {

    const sobremi = document.getElementById('background-animation2');
    const square = document.createElement('span');

    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px'; 
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    sobremi.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 10000);

};

setInterval(createSquare, 650);

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

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "PROYECTOS"//

function createBubble() {

    const proyect = document.getElementById('background-animation4');
    const bubble = document.createElement('span');

    let size = Math.random() * 100;

    bubble.style.width = 10 + size + 'px'; 
    bubble.style.height = 10 + size + 'px';

    bubble.style.top = Math.random() * innerHeight + 'px';
    bubble.style.left = Math.random() * innerWidth + 'px';

    proyect.appendChild(bubble);

    setTimeout(() => {
        bubble.remove()
    }, 5000);

};

setInterval(createBubble, 450);

//ESTA FUNCION CONTROLA LA ANIMACION DE LA LANDING PAGE "CONTACTAME"//

function createMirror() {

    const contact = document.getElementById('background-animation5');
    const mirror = document.createElement('span');

    let size = Math.random() * 75;

    mirror.style.width = 10 + size + 'px'; 
    mirror.style.height = 10 + size + 'px';

    mirror.style.top = Math.random() * innerHeight + 'px';
    mirror.style.left = Math.random() * innerWidth + 'px';

    contact.appendChild(mirror);

    setTimeout(() => {
        mirror.remove()
    }, 10000);

};

setInterval(createMirror, 500);


//ESTAS FUNCIONES CONTROLAN EL DESPLIEGUE DEL MENU EN LA VERSION MOBIL//

function abrirMenu() {

document.getElementById('navicon').addEventListener('click', function() {
     
    const iconoAbrir = document.getElementById('navicon');
    iconoAbrir.style.display = 'none';

    const iconoCerrar = document.getElementById('navicon1');
    iconoCerrar.style.display = 'block';

    const menuApertura = document.getElementById('menu');
    menuApertura.style.display = 'flex';
});
};
      
abrirMenu();

function cerrarMenu() {

    document.getElementById('navicon1').addEventListener('click', function() {
    
        const iconoCerrar1 = document.getElementById('navicon1');
        iconoCerrar1.style.display = 'none';
    
        const iconoAbrir1 = document.getElementById('navicon');
        iconoAbrir1.style.display = 'block';
    
        const menuApertura1 = document.getElementById('menu');
        menuApertura1.style.display = "none";
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

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "HOME".//

function homeP() {
    document.getElementById('homebutton').addEventListener('click', function() {

        const homepage = document.getElementById('home');
        homepage.style.display = 'block';
        
        const sobremipage = document.getElementById('sobremi');
        sobremipage.style.display = 'none';

        const tecnologiapage = document.getElementById('tecnologias');
        tecnologiapage.style.display = 'none';

        const proyectopage = document.getElementById('proyectos');
        proyectopage.style.display = 'none';

        const contactopage = document.getElementById('contacto');
        contactopage.style.display = 'none';

        const invitacion = document.getElementById('invproyectos');
        invitacion.style.display = 'none';

        const saludo = document.getElementById('bienvenida');
        saludo.style.display = 'block';

        const naviconhome = document.getElementById('navicon');
        naviconhome.style.top = '1vh';

        

    });

};

homeP();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "SOBRE MI".//

function sobreMi() {
    document.getElementById('sobremibutton').addEventListener('click', function() {

        const homepage1 = document.getElementById('home');
        homepage1.style.display = 'none';

        const sobremipage1 = document.getElementById('sobremi');
        sobremipage1.style.display = 'block';

        const tecnologiapage1 = document.getElementById('tecnologias');
        tecnologiapage1.style.display = 'none';

        const proyectopage1 = document.getElementById('proyectos');
        proyectopage1.style.display = 'none';

        const contactopage1 = document.getElementById('contacto');
        contactopage1.style.display = 'none';

        const invitacion1 = document.getElementById('invproyectos');
        invitacion1.style.display = 'none';

        const saludo1 = document.getElementById('bienvenida');
        saludo1.style.display = 'none';

        const naviconsobremi = document.getElementById('navicon');
        naviconsobremi.style.top = '-2vh';

    });

};

sobreMi();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "TECNOLOGIAS".//

function tecnologiasP() {
    document.getElementById('tecnologiasbutton').addEventListener('click', function() {


        const homepage2 = document.getElementById('home');
        homepage2.style.display = 'none';

        const sobremipage2 = document.getElementById('sobremi');
        sobremipage2.style.display = 'none';

        const tecnologiapage2 = document.getElementById('tecnologias');
        tecnologiapage2.style.display = 'block';

        const proyectopage2 = document.getElementById('proyectos');
        proyectopage2.style.display = 'none';

        const contactopage2 = document.getElementById('contacto');
        contactopage2.style.display = 'none';

        const saludo2 = document.getElementById('bienvenida');
        saludo2.style.display = 'none';

        const invitacion2 = document.getElementById('invproyectos');
        invitacion2.style.display = 'block';
        
        const navicontecnologias = document.getElementById('navicon');
        navicontecnologias.style.top = '-2vh';

    });

};

tecnologiasP();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "PROYECTOS".//

function proyectosP() {
    document.getElementById('proyectosbutton').addEventListener('click', function() {

        const homepage3 = document.getElementById('home');
        homepage3.style.display = 'none';

        const sobremipage3 = document.getElementById('sobremi');
        sobremipage3.style.display = 'none';

        const tecnologiapage3 = document.getElementById('tecnologias');
        tecnologiapage3.style.display = 'none';

        const proyectopage3 = document.getElementById('proyectos');
        proyectopage3.style.display = 'block';

        const contactopage3 = document.getElementById('contacto');
        contactopage3.style.display = 'none';

        const saludo3 = document.getElementById('bienvenida');
        saludo3.style.display = 'none';

        const invitacion3 = document.getElementById('invproyectos');
        invitacion3.style.display = 'none';
        
        const naviconproyectos = document.getElementById('navicon');
        naviconproyectos.style.top = '-2vh';

    });

};

proyectosP();

//ESTA FUNCION CONTROLA LA TRANSICION A LA SECCION "CONTACTAME".//

function contactameP() {
    document.getElementById('contactamebutton').addEventListener('click', function() {

        const homepage4 = document.getElementById('home');
        homepage4.style.display = 'none';

        const sobremipage4 = document.getElementById('sobremi');
        sobremipage4.style.display = 'none';

        const tecnologiapage4 = document.getElementById('tecnologias');
        tecnologiapage4.style.display = 'none';

        const proyectopage4 = document.getElementById('proyectos');
        proyectopage4.style.display = 'none';

        const contactopage4 = document.getElementById('contacto');
        contactopage4.style.display = 'block';

        const saludo4 = document.getElementById('bienvenida');
        saludo4.style.display = 'none';

        const invitacion4 = document.getElementById('invproyectos');
        invitacion4.style.display = 'none';
        
        const naviconcontactame = document.getElementById('navicon');
        naviconcontactame.style.top = '-2vh';

    });

};
contactameP();


