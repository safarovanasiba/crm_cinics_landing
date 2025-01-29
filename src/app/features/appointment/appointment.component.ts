import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { AppointmentService, DoctorsService, ServiceService } from '../../shared/services';
import { IServices, IStaff } from '../../../interfaces';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, pipe } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
  providers: []
})
export class AppointmentComponent {
  id?: string
  staff_id?: string
  doctors!: IStaff[]
  services!: IServices[]
  totalPrice: number = 0;
  totalDiscount: number = 0;
  $params:HttpParams = new HttpParams();
  $disableBtn = false;

  $appointment: FormGroup = new FormGroup({})

  constructor(
    private _appointmentService: AppointmentService,
    private _doctorService: DoctorsService,
    private _serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    AOS.init()
    this.id = this.route.snapshot.params['id'];

    console.log(this.id)

    if(this.id){
      this._serviceService.getById(this.id).subscribe(data => {
        this.staff_id = data.staff_id;

        this.$appointment.patchValue({
          staff_id: this.staff_id,
          service_id: [this.id],
        })
        
        this.$params = new HttpParams().set('staff_id', this.staff_id!).set('type', 'doctor');
        this._serviceService.updateParams(this.$params);
        this._serviceService.getAll().subscribe(data => {
          this.services = data
          this.calculateTotalPrice([this.id!])
        })

      })
    }else{
      this.$params = new HttpParams().set('type', 'doctor');
        this._serviceService.updateParams(this.$params);
        this._serviceService.getAll().subscribe(data => {
          this.services = data
      })
    }

    // forma elementlari
    this.$appointment = new FormGroup({
      date: new FormControl(new Date(), [Validators.required]),
      service_id: new FormControl([], [Validators.required]),
      staff_id: new FormControl('', []),
    });

    this._doctorService.getAll().subscribe(data => {
      this.doctors = data
    })

    
  }

  getAllDoctorServices(id:string){
    this.$params = new HttpParams().set('staff_id', id!).set('type', 'doctor');
    this._serviceService.updateParams(this.$params);

    this.$appointment.patchValue({
      service_id:null
    })

    this._serviceService.getAll().subscribe(data => {
      this.services = data
    })
  }

  calculateTotalPrice(selectedServiceIds: string[]): void {
    this.totalPrice = selectedServiceIds.reduce((sum, serviceId) => {
      const selectedService = this.services.find(service => service.id === serviceId);
      return sum + (selectedService?.price_list[0].price || 0);
    }, 0);
  }
  calculateTotalDiscount(value:number){
    this.totalDiscount = Number(value);
  }

  submit(){
    if (this.$appointment.valid) {
      this.$disableBtn = true;
      const {date, service_id} = this.$appointment.value
      this._appointmentService.createAppointment({date: new Date(date), service_id}).pipe(
        catchError((err) => {
          this.$disableBtn = false
          return err
        })
      ).subscribe(data => {
        this.router.navigate(['/profile', 'appointment'])
      })
    } else {
      Object.values(this.$appointment.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
