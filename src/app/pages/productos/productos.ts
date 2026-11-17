import { Component,inject,signal } from '@angular/core';
import {Productos as ProductoServicio} from '../../services/productos';
import { Producto } from '../../models/producto.model';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos  {
    productos= signal<Producto[]>([])

  private servicio =inject(ProductoServicio)

  //metodos por defecto
  ngOnInit():void
  //Ejecutarse cuando se inica el componente
  {
    this.servicio.obtenerProductos().subscribe(
      {
        next:(dato)=>{
          this.productos.set(dato.slice(0,8));
          console.log(dato.slice(0,8))
        }
      }
    )


  }


}


