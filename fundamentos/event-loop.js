

console.log('Inicio del programa')

console.log('Segunda instrucción')

setTimeout( () =>{
    console.log('Primer setTimeout')
}, 5000 )

setTimeout( () => {
    
    console.log('Segundo SetTimeout');
}, 1000 )

console.log('Última instrucción');