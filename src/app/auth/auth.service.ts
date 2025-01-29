import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { environment } from '../../environments/environment';
import { LoginPhone, LoginPhoneVerify } from '../../types/login.type';
import { Tokens } from '../../types/token.type';
import { IUserExtraData } from '../../interfaces/user_extra_data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getUserData(series_document: string, date_of_birth: string): Observable<IUserExtraData> {
    return this.http.get<IUserExtraData>(`${environment.apiUrl}/client/auth/extra/data`, {params: {series_document,date_of_birth}});
  }

  phone(data: LoginPhone) {
    return this.http
      .post<{"success": boolean,"message": string,"user": {"is_verify": boolean}}>(`${environment.apiUrl}/client/auth/login/phone`, data)
      .pipe(
        // tap((tokens) => {
        //   if (tokens.access_token && tokens.refresh_token) {
        //     this.setTokens(tokens);
        //   }
        // })
      );
  }

  phoneVerify(data: LoginPhoneVerify) {
    return this.http
      .post<Tokens>(`${environment.apiUrl}/client/auth/login/phone/verify`, data)
      .pipe(
        tap((tokens) => {
          if (tokens.access_token && tokens.refresh_token) {
            this.setTokens(tokens);
          }
        })
      );
  }

  // login(data: Login) {
  //   return this.http
  //     .post<Tokens>(`${environment.apiUrl}/client/auth/login/phone`, data)
  //     .pipe(
  //       tap((tokens) => {
  //         if (tokens.access_token && tokens.refresh_token) {
  //           this.setTokens(tokens);
  //         }
  //       })
  //     );
  // }

  refreshToken() {
    return this.http
      .post<Tokens>(`${environment.apiUrl}/auth/refresh`, {})
      .pipe(
        tap((tokens) => {
          console.log('tokens', tokens);
          if (tokens.access_token && tokens.refresh_token) {
            this.setTokens(tokens);
          }
        })
      );
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(['/auth/login'])
  }

  getToken() {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');

    return { access_token, refresh_token };
  }

  isAuthenticated(){
    // const token = this.getToken()
    // if (token.access_token && token.refresh_token) return true
    // else return false 
    try {
      const token = this.getToken();
      if (token.access_token && token.refresh_token) {
        const decoded = jwtDecode(token.access_token);
        const currentTime = Date.now() / 1000;

        if ((decoded?.exp ?? 0) > currentTime) {
          return true;
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  private setTokens(tokens: Tokens) {
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  }
}
