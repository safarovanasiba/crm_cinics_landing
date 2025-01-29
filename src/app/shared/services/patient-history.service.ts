import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { IPatientHistory } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientHistoryService extends BaseApiService<IPatientHistory> {
  constructor(http: HttpClient){
    super(http, `${environment.apiUrl}/client/patient-history`);
  }
}
