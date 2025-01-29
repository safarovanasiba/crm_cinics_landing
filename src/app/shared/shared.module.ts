import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';



@NgModule({
	declarations: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ButtonModule,
		SidebarModule,
		MenuModule,
		AvatarGroupModule,
		AvatarModule
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		SidebarModule,
		RouterModule,
		MenuModule
	]
})
export class SharedModule { }

