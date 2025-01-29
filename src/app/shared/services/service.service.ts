import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { IServices } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseApiService<IServices> {
  constructor(http: HttpClient){
    super(http, `${environment.apiUrl}/client/service`);
  }
}
