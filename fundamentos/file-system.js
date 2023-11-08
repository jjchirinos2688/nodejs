const fs = require('fs')

const txt = 'Hola Mundo desde NodeJs'

try {
    
    fs.writeFileSync('holaMundo.txt', txt)
    console.log('Archivo Escrito sin problemas!');

} catch (error) {
    
    console.log(`error en la escritura del archivo: ${error}`);

}

// fs.writeFile('holaMundo.txt', txt, (error) => {

//     if(error) throw error

//     console.log('El archivo se ha escrito correctamente');
// })