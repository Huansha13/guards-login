import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../login/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // Paso 10: Crear componente Nav
  constructor(public settings: SettingsService) { }

  ngOnInit(): void {
  }

}
