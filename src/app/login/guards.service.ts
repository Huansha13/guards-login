import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SettingsService } from './settings.service';
@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  // Paso 06: Crear Servicio Guards
  
  constructor(private router: Router,
    private settings: SettingsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.settings.getPermiso()) {
      this.router.navigate(['/nav']);
      return false;
    }
    return true;
  }
}
