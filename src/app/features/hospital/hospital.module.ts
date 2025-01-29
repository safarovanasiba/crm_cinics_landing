import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital.component';
import { Routes, RouterModule } from '@angular/router';
import { CommentsSliderComponent } from './components/comments-slider/comments-slider.component';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [
	{
		path: '',
		component: HospitalComponent
	}
];


@NgModule({
	declarations: [
		HospitalComponent,
	],
	imports: [
		CommentsSliderComponent,
		CommonModule,
		RouterModule.forChild(routes),

		SidebarModule,
		ProgressSpinnerModule,
		AccordionModule
	]
})
export class HospitalModule { }
