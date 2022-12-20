import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // Paso 08: Crear componente SignIn


  title = 'Login';
  login: Login = new Login();

  constructor(private router: Router,
    private settings: SettingsService) {

  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    if (this.login.username === 'admin' && this.login.passwors === '123') {
      this.settings.setPermiso(true);
    }
    this.router.navigate(['/', 'menu']).then(status => {
      this.settings.setStatusAccesoMenu(status);
    });
  }


}
