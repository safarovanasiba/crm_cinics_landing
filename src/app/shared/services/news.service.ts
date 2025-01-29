import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { INews } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseApiService<INews> {
  constructor(http: HttpClient){
    super(http, `${environment.apiUrl}/client/news`);
  }
}
