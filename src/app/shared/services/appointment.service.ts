import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { IAppointment, IAppointService, IStaff } from '../../../interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseApiService<IAppointment> {
  constructor(http: HttpClient){
    super(http, `${environment.apiUrl}/client/appointment`);
  }

  getAllServices(params?: HttpParams): Observable<IAppointService[]> {
    return this.http.get<IAppointService[]>(`${this.apiUrl}/app-service`, { params });
  }

  createAppointment(data?: {service_id:string[], date:Date}): Observable<IAppointService> {
    return this.http.post<IAppointService>(`${this.apiUrl}`, data);
  }

}
