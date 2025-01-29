import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { IRoom, IServices } from '../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PageType } from '../../../enumerations';
import { ServiceService, FilesService } from '../../shared/services';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-rooms',
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
	page_type?: PageType
	id?: string
	$service!: Observable<IServices[]>
	$params:HttpParams = new HttpParams();

	$header: { image?: string | null, title: string, descr: string } = { image: null, title: "Xonalar", descr: "Nexus School - Bizning markazimiz 2021-yil 30- sentyabrda tashkil etilgan. Mana shu davr mobaynida Harvard School o’quv markazi shiddat bilan rivojlanib bormoqda. Bu yerda muhit, ta’lim olish borasidagi." }

	constructor(
		private _serviseService: ServiceService,
		private _filesService: FilesService,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		AOS.init()

		this.page_type = this.route.snapshot.data['page_type'];

		if (this.page_type == PageType.list) {
			// services
			this.$params = new HttpParams().set('type', 'room');
			this._serviseService.updateParams(this.$params);

			this.$service = this._serviseService.getAll()
		}
	}

	getView(image: string) {
		return this._filesService.getView(image)
	}
}
