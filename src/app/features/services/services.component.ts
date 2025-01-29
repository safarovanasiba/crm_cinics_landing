import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { DoctorsService, FilesService, ServiceService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { PageType } from '../../../enumerations';
import { IServices, IStaff } from '../../../interfaces';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  id?: string
  page_type?: PageType
  $doctors_detail!: IStaff
  $service!: Observable<IServices[]>
  $params:HttpParams = new HttpParams();

  $header:{image?: string | null, title: string, descr:string} = {image: null, title: "Bizning GLOBAL HEALTHCARE наша больница", descr:"Abat Steklo - shisha va shisha buyumlar ishlab chiqarishga ixtisoslashgan kompaniya. 2013-yilda tashkil etilgan kompaniya bir necha yillardan buyon o‘z mijozlariga yuqori sifatli shisha yechimlarini taqdim etib kelmoqda. Ularning Услугиi oyna, eshik, oyna va dekorativ oyna buyumlari kabi turli xil oyna mahsulotlarini ishlab chiqarishni o'z ichiga oladi. Abat Steklo sifat va mijozlar ehtiyojini qondirishga sodiqligi bilan mashhur bo'lib, ularni shisha bilan bog'liq barcha ehtiyojlar uchun ishonchli tanlovga aylantiradi."}

  constructor(
    private _doctorService: DoctorsService,
    private _serviseService: ServiceService,
    private _filesService: FilesService,
    private route: ActivatedRoute,
  ){}

	ngOnInit(): void {
		AOS.init()

    this.page_type = this.route.snapshot.data['page_type'];
    this.id = this.route.snapshot.params['id'];

    if(this.page_type && this.id){
      this._doctorService.getById(this.id).subscribe((data) => {
        this.$doctors_detail = data
        this.$header = {image: this.$doctors_detail.image, title: this.$doctors_detail.fullname, descr: this.$doctors_detail.bio}
      })

      // services
      this.$params = new HttpParams().set('staff_id', this.id!).set('type', 'doctor');
      this._serviseService.updateParams(this.$params);

      this.$service = this._serviseService.getAll()
    }else{
      this.$params = new HttpParams().set('type', 'doctor');
      this._serviseService.updateParams(this.$params);

      this.$service = this._serviseService.getAll()
    }
	}

  getView(image: string){
    return this._filesService.getView(image)
  }

}
