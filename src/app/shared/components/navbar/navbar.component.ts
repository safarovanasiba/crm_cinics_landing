import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
	providers:[SidebarComponent]
})
export class NavbarComponent {
	constructor(
		private authService: AuthService
	) { }

	isRegister() {
		return this.authService.isAuthenticated()
	}
	logout() {
		return this.authService.logout()
	}
	sidebar: boolean = false;
}
