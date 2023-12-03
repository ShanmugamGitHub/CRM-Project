import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRM-Project';
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMainNavOpen = true;
  isSmallNavOpen = false;

  constructor() {}

  toggleMainNav(): void {
    this.isMainNavOpen = !this.isMainNavOpen;
    
    // If the main nav is closed, automatically show the small nav
    if (!this.isMainNavOpen) {
      this.isSmallNavOpen = true;
    } else {
      // If the main nav is open, close the small nav
      this.isSmallNavOpen = false;
    }
  }

  toggleSmallNav(): void {
    this.isSmallNavOpen = !this.isSmallNavOpen;
  }
}
