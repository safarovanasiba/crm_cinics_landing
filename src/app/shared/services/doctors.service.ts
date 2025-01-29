import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { IStaff } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends BaseApiService<IStaff> {
  constructor(http: HttpClient){
    super(http, `${environment.apiUrl}/client/staff`);
  }
}
