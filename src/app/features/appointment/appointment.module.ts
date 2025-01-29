import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';


const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent
  },
  {
    path: ':id',
    component: AppointmentComponent,
  }
];


@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    ReactiveFormsModule,

    SelectButtonModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    ConfirmDialogModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    AutoCompleteModule,
    SkeletonModule,
    CalendarModule,
    InputMaskModule,
  ]
})
export class AppointmentModule { }
