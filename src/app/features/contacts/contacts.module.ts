import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

const routes: Routes = [
	{
		path: '',
		component: ContactsComponent
	}
];

@NgModule({
	declarations: [
		ContactsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		NgxMaskDirective,  // Mask Direktivasini qo'shish
		NgxMaskPipe
	],
	providers: [
		provideNgxMask()   // NgxMask provayderini qo'shish
	]
})
export class ContactsModule { }
