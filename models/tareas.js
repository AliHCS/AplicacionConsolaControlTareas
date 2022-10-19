const Tarea = require('./tarea');


class Tareas {

  _listado = {}

  get listadoArr() {
    const listado = []

    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })

    return listado
  }

  constructor() {
    this._listado = {}

  }

  borrarTarea( id = '' ){
    if (this._listado[id]) {
      delete this._listado[id]
      
    }
  }


  cargarTareasFromArray(tareas = []) {
    /* this._listado[tarea.id] = tareas */
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea
    })
  }

  crearTareas(descripcion) {
    const tarea = new Tarea(descripcion)
    this._listado[tarea.id] = tarea

  }

  listadoCompleto() {
    //1. Recolectar piedras : Completada (Verde) | Pendiente (Rojo)
    //2. Alma
    //3. Mente
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1} `.green
      const { descripcion, completadoEn } = tarea
      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red
      console.log(`${idx} ${descripcion}:: ${estado}`)

    })
  }


  listarPendientesCompletadas(completadas = true) {

    let contador = 0
    this.listadoArr.forEach(tarea => {

      const { descripcion, completadoEn } = tarea
      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red

      if (completadas) {
        if (completadoEn) {
          contador += 1
          console.log(`${contador.toString().green}. ${descripcion}:: ${completadoEn.green}`)
        }
      } else {
        if (!completadoEn) {
          contador += 1
          console.log(`${contador.toString().green}. ${descripcion}:: ${estado}`)
        }

      }

    })
  }

  tareasCompletadas( ids = []){
    ids.forEach( id => {
      const tarea = this._listado[id]
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString()
      }
    })

    this.listadoArr.forEach(tarea => {

      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null
      }

    })

  }
}






module.exports = Tareas