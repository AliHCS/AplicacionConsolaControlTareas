require('colors')


const mostrarMenu = () => {

    return new Promise((resolve, reject) => {
        console.clear()
        console.log('================================'.green)
        console.log('    Seleccione una Opcion ')
        console.log('================================\n'.green)

        console.log(`${'1.'.green} Crear tareas`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tareas`)
        console.log(`${'6.'.green} Borrar tareas`)
        console.log(`${'0.'.green} Salir\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close()
            resolve(opt)
        })
    })

}

const pausa = () => {

    return new Promise((resolve, reject) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question(`\nPresione ${'Enter'.green} para continuar`, () => {
            readLine.close
            resolve()
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}






