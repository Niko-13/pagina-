const app = documento.getElementById('typewriter');

const typewriter=new typewriter(app,{
    loop:true,
    delay:75

});
typewriter
.typeString('la capital del sol')
.pausefor(200)
.start();