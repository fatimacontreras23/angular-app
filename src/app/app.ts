import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';


@Component({
  imports: [RouterOutlet, Navbar], // 2. Agrega Navbar al arreglo
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tienda');
}