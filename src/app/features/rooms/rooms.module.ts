import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { Routes, RouterModule } from '@angular/router';
import { PageType } from '../../../enumerations';

const routes: Routes = [
	{
		path: '',
		component: RoomsComponent,
		data: { page_type: PageType.list }
	}
];


@NgModule({
	declarations: [
		RoomsComponent
	],
	imports: [
		CommonModule,
		ProgressSpinnerModule,
		RouterModule.forChild(routes)
	]
})
export class RoomsModule { }
