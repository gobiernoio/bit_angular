export class Cliente {
    key:string
    nombre:string
    apellidos:string
    nombre_usuario:string
    correo_electronico:string
    password:string

    reiniciar(){
        this.key = ""
        this.nombre = ""
        this.apellidos = ""
        this.nombre_usuario = ""
        this.correo_electronico = ""
        this.password = ""
    }
}