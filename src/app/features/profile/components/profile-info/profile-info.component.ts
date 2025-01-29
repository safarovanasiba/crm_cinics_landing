import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../shared/services/profile.service';
import { IPatient } from '../../../../../interfaces';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent implements OnInit {
  profile_icon = `https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png`
  $user_data!: Observable<IPatient>
  user!: IPatient

  constructor(
    private _profileService: ProfileService,
    private _http: HttpClient,
  ){}

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((profile: IPatient) => {
      this.user = profile
    })
    this.$user_data = this._profileService.getProfile()
  }

  getImage(id:string){
    if(id){
      return `https://med.api.topsites.uz/api/files/view/${id}`
    }else{
      return this.profile_icon
    }
  }



}
