import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // Paso 07: Crear Service Settings

  private statusAccesoMenu: boolean = true;
  private _userPermiso: boolean = false;
  constructor() { }

  getStausAccesoMenu(): boolean {
    return this.statusAccesoMenu;
  }

  setStatusAccesoMenu(value: boolean) {
    this.statusAccesoMenu = value;
  }

  getPermiso(): boolean {
    return this._userPermiso;
  }

  setPermiso(value: boolean) {
    this._userPermiso = value;
  }
}
