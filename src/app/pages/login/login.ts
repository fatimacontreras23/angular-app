import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private servicio = inject(Auth);
  loading = signal(false);
  error = signal('')

  formularioLogin: FormGroup = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  invalido(campo: string): boolean {
    const control = this.formularioLogin.get(campo);
    return !!(control && control.invalid && control.touched);
  }

 ingresar() {
  if (this.formularioLogin.invalid) {
    this.formularioLogin.markAllAsTouched();
    return;
  }

  const { user, password } = this.formularioLogin.value;

  this.loading.set(true);
  this.error.set('');

  // Usas .login() que es como lo definió tu maestro
  this.servicio.login(user ?? '', password ?? '').subscribe({
    next: (respuesta) => {
      this.loading.set(false);
      console.log('Inicio de sesión exitoso, token recibido:', respuesta.token);
    },
    error: (error: any) => {
      this.loading.set(false);
      this.error.set(
        error.status === 401
          ? 'Usuario o contraseña incorrecta'
          : 'No se puede conectar, intente más tarde'
      );
    }
  });
}
}