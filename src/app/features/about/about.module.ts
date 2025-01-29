import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutSlider } from './about-slider/about-slider';

const routes: Routes = [
	{
		path: '',
		component: AboutComponent
	}
];

@NgModule({
	declarations: [
		AboutComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		AboutSlider
	],
	exports: [
		RouterModule
	]
})
export class AboutModule { }
