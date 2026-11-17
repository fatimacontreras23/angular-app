import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductInput, Producto } from '../models/producto.model';



@Service()
export class Productos {

    private readonly url='https://fakestoreapi.com/products'

    private readonly http= inject(HttpClient)

    obtenerProductos():Observable<Producto[]>
    {
        return this.http.get<Producto[]>(this.url)

    }

    //CREAR PRODUCTO
    crearProducto(producto:ProductInput){
        return this.http.post<Producto>(this.url,producto)
        
        
    }

    //ACTUALIZAR PRODUCTO
    actualizarProducto(id:number,producto:ProductInput){
        return this.http.put<Producto>(`${this.url}/${id}`,producto)
    }

    //ELIMINAR PRODUCTO
    eliminarProducto(id:number){
        return this.http.delete(`${this.url}/${id}`)
    }

     getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/categories`);
  }

}


