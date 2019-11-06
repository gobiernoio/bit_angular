import { Component } from '@angular/core';
import { BitService } from './services/bit.service';
import { Cliente } from './models/cliente.model';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'bit';
	cliente: Cliente;
	clientes: any;
	actualizando:boolean = false


	constructor(private bitService: BitService) {

		this.cliente = new Cliente()
		this.traerClientes()
		
	}


	traerClientes(){
		this.bitService.getClientes().subscribe(resp => {
			this.clientes = Object.keys(resp).map(key => resp[key])
		})
	}

	enviar() {
		this.bitService.postCliente(this.cliente).subscribe(respuesta => {
			this.cliente.reiniciar()
			this.traerClientes()
		})
	}

	modificar(item) {
		this.bitService.getCliente(item).subscribe(respuesta => {
			let item:any = respuesta
			this.cliente.key = item.key
			this.cliente.nombre = item.nombre
			this.cliente.apellidos = item.apellidos
			this.cliente.correo_electronico = item.correo_electronico
			this.cliente.nombre_usuario = item.nombre_usuario
			this.cliente.password = item.password

			this.actualizando = true
		})
	}

	actualizar(){
		this.bitService.putCliente(this.cliente.key, this.cliente).subscribe(respuesta=>{
			this.cliente.reiniciar()
			this.actualizando = false
			this.traerClientes()
		})
	}
}
