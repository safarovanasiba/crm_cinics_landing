import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('../features').then(m => m.HospitalModule)
			},
			{
				path: 'about',
				loadChildren: () => import('../features').then(m => m.AboutModule)
			},
			{
				path: 'doctors',
				loadChildren: () => import('../features').then(m => m.DoctorsModule)
			},
			{
				path: 'service',
				loadChildren: () => import('../features').then(m => m.ServicesModule)
			},
			{
				path: 'rooms',
				loadChildren: () => import('../features').then(m => m.RoomsModule)
			},
			{
				path: 'news',
				loadChildren: () => import('../features').then(m => m.NewsModule)
			},
			{
				path: 'contact',
				loadChildren: () => import('../features').then(m => m.ContactsModule)
			},
			{
				path: 'order',
				loadChildren: () => import('../features').then(m => m.AppointmentModule)
			},
			{
				path: 'profile',
				loadChildren: () => import('../features').then(m => m.ProfileModule)
			},
			{
				path: 'appointment',
				loadChildren: () => import('../features').then(m => m.AppointmentModule)
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutsRoutingModule { }
