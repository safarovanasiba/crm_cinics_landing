import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { DoctorsService, FilesService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { PageType } from '../../../enumerations';
import { IStaff } from '../../../interfaces';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent implements OnInit {
  page_type?: PageType
  id?: string
  $doctors_detail!: IStaff
  $doctors!: Observable<IStaff[]>

  $header:{image?: string | null, title: string, descr:string} = {image: null, title: "Bizning malakali Врачиimiz bilan tanishing", descr:"Nexus School - Bizning markazimiz 2021-yil 30- sentyabrda tashkil etilgan. Mana shu davr <br> mobaynida Harvard School o’quv markazi shiddat bilan rivojlanib bormoqda. Bu yerda muhit, <br> ta’lim olish borasidagi."}

  constructor(
    private _doctorService: DoctorsService,
    private _filesService: FilesService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    AOS.init();

    this.page_type = this.route.snapshot.data['page_type'];
    this.id = this.route.snapshot.params['id'];

    if(this.page_type && this.id){
      this._doctorService.getById(this.id).subscribe((data) => {
        this.$doctors_detail = data
      })
    }else{
      this.$doctors = this._doctorService.getAll()
    }
  }

  getView(image: string){
    return this._filesService.getView(image)
  }
}
