import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginPhone, LoginPhoneVerify } from '../../../types/login.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageType } from '../../../enumerations';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  page_type = PageType.phone
  type_check = [{ label: "Passport ma'lumotlar", value: true }, { label: "Qo'lda kiritish", value: false }]
  is_disable = false
  disableBtn = false

  $form_phone: FormGroup = new FormGroup({})
  $form_login: FormGroup = new FormGroup({})
  $form_register: FormGroup = new FormGroup({})

  constructor(
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.$form_phone = new FormGroup({
      phone: new FormControl('', [Validators.required]),
    });

    this.$form_login = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
    });

    this.$form_register = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      series_document: new FormControl('', []),
      date_of_birth: new FormControl('', []),
    });
  }

  setPerson() {
    try {
      const seriesDocument = this.$form_register.get('series_document')?.value;
      const dateOfBirthControl = this.$form_register.get('date_of_birth')?.value;

      if (seriesDocument && dateOfBirthControl) {
        const cleanedSeriesDocument = seriesDocument.replace(/[()\s]/g, '').toUpperCase();
  
        if (dateOfBirthControl) {
          try {
            this._authService.getUserData(cleanedSeriesDocument, dateOfBirthControl)
              .pipe(
                catchError(({ error }) => {
                  return of();
                })
              )
              .subscribe(userData => {
                console.log(userData)
                this.$form_register.patchValue({
                  seriesDocument: userData.document,
                  fullname: userData.fullname,
                  address: userData.address,
                })
                });
          } catch (error) {
            console.log(error)
          }
        }
      } else {
      }
    } catch (error) {
      console.log(error)
    }
  }

  submit() {
    if (this.page_type == PageType.phone) {
      if (this.$form_phone.valid) {
        let phone = this.$form_phone.get('phone')?.value;
        if (phone) {
          const data = this.$form_phone.value
          phone = phone.toString().replace(/[()\s-]/g, '');
          data.phone = parseInt(phone, 10)

          this.disableBtn = true;
          this.phone({ phone: data.phone })
        }
      } else {
        Object.values(this.$form_phone.controls).forEach((control) => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
    else if (this.page_type == PageType.login) {
      if (this.$form_login.valid) {
        let phone = this.$form_login.get('phone')?.value;
        if (phone) {
          const data = this.$form_login.value
          phone = phone.toString().replace(/[()\s-]/g, '');
          data.phone = parseInt(phone, 10)

          this.disableBtn = true;
          this.phoneVerify({ ...data, phone: data.phone })
        }
      } else {
        Object.values(this.$form_login.controls).forEach((control) => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
    else if (this.page_type == PageType.register) {
      if (this.$form_register.valid) {
        let phone = this.$form_register.get('phone')?.value;
        if (phone) {
          const data = this.$form_register.value
          phone = phone.toString().replace(/[()\s-]/g, '');
          data.phone = parseInt(phone, 10)

          if(!data.series_document){
            delete data.series_document
          }else{
            data.series_document = data.series_document.replace(/[()\s]/g, '').toUpperCase();
          }
          if(!data.date_of_birth){
            delete data.date_of_birth
          }

          this.disableBtn = true;
          this.phoneVerify({ ...data, phone: data.phone })
        }
      } else {
        Object.values(this.$form_register.controls).forEach((control) => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
  }

  phone(body: LoginPhone) {
    this._authService.phone(body).subscribe(data => {
      if (data?.success) {
        if (data?.user?.is_verify == true) {
          this.page_type = PageType.login
          this.$form_login.patchValue({
            phone: body.phone
          })
        } else if (data?.user?.is_verify == false) {
          this.page_type = PageType.register
          this.$form_register.patchValue({
            phone: body.phone
          })
        } else {
          this.page_type = PageType.phone
          this.$form_phone.patchValue({
            phone: body.phone
          })
        }
      }
    })
  }

  phoneVerify(data: LoginPhoneVerify) {
    this._authService.phoneVerify(data).subscribe(data => {
      this.router.navigate(['/profile']);
    })
  }

  back() {
    this.page_type = PageType.phone
  }
}
