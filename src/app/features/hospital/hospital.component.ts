import { Component } from '@angular/core';
import * as AOS from 'aos';
import { DoctorsService, ServiceService, FilesService, NewsService } from '../../shared/services';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { INews, IServices, IStaff } from '../../../interfaces';

@Component({
	selector: 'app-hospital',
	templateUrl: './hospital.component.html',
	styleUrl: './hospital.component.scss'
})
export class HospitalComponent {
	openIndex: number | null = null;
	$service!: Observable<IServices[]>
	$doctors!: Observable<IStaff[]>

	$news!: Observable<INews[]>
	$params: HttpParams = new HttpParams();

	$header_bottom: { image: string, count: number, title: string }[] = [
		{ image: 'assets/images/item-icon1.svg', count: 100, title: 'Довольные клиенты' },
		{ image: 'assets/images/item-icon1.svg', count: 100, title: 'Довольные клиенты' },
		{ image: 'assets/images/item-icon1.svg', count: 100, title: 'Довольные клиенты' },
		{ image: 'assets/images/item-icon1.svg', count: 100, title: 'Довольные клиенты' },
	]
	$client_comments: { image: string, star: number, name: string, comment: string }[] = [
		{ image: 'assets/images/comment-card-bg.png', star: 5, name: "Sara Tancredi", comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s,' },
		{ image: 'assets/images/comment-card-bg.png', star: 3, name: "Sara Tancredi", comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s,' },
		{ image: 'assets/images/comment-card-bg.png', star: 4, name: "Sara Tancredi", comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s,' },
		{ image: 'assets/images/comment-card-bg.png', star: 1, name: "Sara Tancredi", comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s,' },
	]
	$faq: { quession: string, answer: string }[] = [
		{ quession: 'Nefrologiya qanday qilishim kerak?', answer: 'Nefrologiya nefrosistemimizning qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qilishimni olayda olgan vakti qilishimni boshqarish uchun yordam beradi. Nefrologiya qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qil.' },
		{ quession: 'Nefrologiya qanday qilishim kerak?', answer: 'Nefrologiya nefrosistemimizning qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qilishimni olayda olgan vakti qilishimni boshqarish uchun yordam beradi. Nefrologiya qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qil.' },
		{ quession: 'Nefrologiya qanday qilishim kerak?', answer: 'Nefrologiya nefrosistemimizning qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qilishimni olayda olgan vakti qilishimni boshqarish uchun yordam beradi. Nefrologiya qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qil.' },
		{ quession: 'Nefrologiya qanday qilishim kerak?', answer: 'Nefrologiya nefrosistemimizning qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qilishimni olayda olgan vakti qilishimni boshqarish uchun yordam beradi. Nefrologiya qanday qilishim kerak? Nefrologiya, nefrosistemimizning qanday qil.' },
	]

	constructor(
		private _doctorService: DoctorsService,
		private _serviseService: ServiceService,
		private _newsService: NewsService,
		private _filesService: FilesService,
	) { }


	ngOnInit() {
		// Init AOS (Animate on Scroll) library
		AOS.init();
		this.$params = new HttpParams().set('type', 'doctor');
		this._serviseService.updateParams(this.$params);

		this.$service = this._serviseService.getAll()
		this.$doctors = this._doctorService.getAll()
		this.$news = this._newsService.getAll()
	}

	getView(image: string) {
		return this._filesService.getView(image)
	}
}
