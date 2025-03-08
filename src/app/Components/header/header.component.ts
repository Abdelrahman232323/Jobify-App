import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems = [
    { label: 'Recommended', route: '/recommended', active: true },
    { label: 'Liked', route: '/liked', count: 0 },
    { label: 'Applied', route: '/applied', count: 0 },
    { label: 'External', route: '/external', count: 0 }
  ];
}
