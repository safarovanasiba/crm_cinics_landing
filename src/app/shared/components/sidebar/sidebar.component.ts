import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/auth.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	sidebar: boolean = false;
	constructor(private authService: AuthService) {

	}
	items: MenuItem[] = [
		{ label: 'Главная', icon: 'pi pi-home', routerLink: '/' },
		{ label: 'О нас', icon: 'pi pi-info-circle', routerLink: '/about' },
		{ label: 'Врачи', icon: 'pi pi-user-md', routerLink: '/doctors' },
		{ label: 'Услуги', icon: 'pi pi-briefcase', routerLink: '/service' },
		{ label: 'Чемберс', icon: 'pi pi-building', routerLink: '/rooms' },
		{ label: 'Новости', icon: 'pi pi-newspaper', routerLink: '/news' },
		{ label: 'Связь', icon: 'pi pi-phone', routerLink: '/contact' }
	];

	close() {
		this.sidebar = false
	}
	isRegister() {
		return this.authService.isAuthenticated()
	}
	logout() {
		return this.authService.logout()
	}
}
