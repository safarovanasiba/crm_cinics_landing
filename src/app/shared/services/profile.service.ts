import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { IPatient, IStaff } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!: Observable<IPatient>
  url = `${environment.apiUrl}/client/profile`
  
  constructor(
    private http: HttpClient
  ){}

  getProfile():Observable<IPatient>{
    return this.http.get<IPatient>(this.url)
  }
}
