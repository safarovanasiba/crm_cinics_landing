import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAppointmentComponent, ProfileHistoryComponent, ProfileInfoComponent } from './components';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { PageType } from '../../../enumerations';
import { TagModule } from 'primeng/tag';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
			{
				path: 'info',
				component: ProfileInfoComponent,
			},
			{
				path: 'history',
				component: ProfileHistoryComponent,
				data: { page_type: PageType.list }
			},
			{
				path: 'history/:id/history',
				component: ProfileHistoryComponent,
				data: { page_type: PageType.detail }
			},
			{
				path: 'appointment',
				component: ProfileAppointmentComponent,
			},
			{
				path: '',
				redirectTo: 'info',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];


@NgModule({
	declarations: [
		ProfileComponent,
		ProfileInfoComponent,
		ProfileHistoryComponent,
		ProfileAppointmentComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),

		ProgressSpinnerModule,
		TabMenuModule,
		ButtonModule,
		CardModule,
		TableModule,
		PanelModule,
		TagModule
	]
})
export class ProfileModule { }
