import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  items!: MenuItem[];
  activeItem: MenuItem | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    AOS.init();

    // Tablarni yaratish
    this.items = [
      { label: 'Foydalanuvchi', icon: 'pi pi-user', link: 'info' },
      { label: 'Qabullar', icon: 'pi pi-history', link: 'appointment' },
      { label: 'Ma\'lumotlar', icon: 'pi pi-cloud-download', link: 'history' },
    ];

    // Hozirgi URL'ni olish va aktiv tabni o'rnatish
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    this.setActiveItem(currentRoute);

    // Router navigatsiyasini kuzatish (foydalanuvchi boshqa sahifaga o'tganda)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const activeRoute = event.urlAfterRedirects.split('/').pop();
        this.setActiveItem(activeRoute);
      }
    });
  }

  // URL bo'yicha aktiv tabni o'rnatish
  setActiveItem(activeRoute: string | undefined) {
    switch (activeRoute) {
      case 'info':
        this.activeItem = this.items[0];
        break;
      case 'appointment':
        this.activeItem = this.items[1];
        break;
      case 'history':
        this.activeItem = this.items[2];
        break;
      default:
        this.activeItem = this.items[0]; // Default tab - info
    }
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
