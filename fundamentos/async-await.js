
const usuarios = [

    {
        id: 1,
        nombre: 'Julio'
    },
    {
        id: 2,
        nombre: 'Geli'
    },
    {
        id: 3,
        nombre: 'Gabi'
    },
]

const getUsuario = ( id ) => {

    return new Promise((resolve, reject) => {
        
        const usuario = usuarios.find( u => u.id === id )
        
        if(usuario){
        
            resolve(usuario)
        
        } else{

            reject(`No existe el usuario con id ${id}`)
        }
    })
}


// getNombreUsuario(4)
//     .then( response => console.log(response) )
//     .catch( error => console.log(error) )


const getInfoUsuario = async( id ) => {

    try {
        
        const usuario = await getUsuario(id)
        console.log(usuario.nombre)

    } catch (error) {
        console.log(error);
    }
}

// getInfoUsuario(4)


module.exports = {
    getUsuario,
    getInfoUsuario
}
