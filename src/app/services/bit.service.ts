import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from "./../models/cliente.model";

@Injectable({
	providedIn: 'root'
})
export class BitService {
	private url = "https://betoapi.firebaseapp.com"

	constructor(private http: HttpClient) { }

	postCliente(cliente: Cliente) {
		return this.http.post(`${this.url}/POST/NutriNET/Cliente`, cliente);
	}

	getCliente(key:string) {
		return this.http.get(`${this.url}/GET/NutriNET/Cliente/${key}`)
	}

	getClientes() {
		return this.http.get(`${this.url}/GET/NutriNET/Clientes/`)
	}

	putCliente(key:string, cliente:any) {
		return this.http.put(`${this.url}/PUT/Nutrinet/Cliente`, cliente)
	}
}
