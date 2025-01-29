import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PatientHistoryService } from '../../../../shared/services/patient-history.service';
import { Observable } from 'rxjs';
import { IPatientHistory } from '../../../../../interfaces';
import { PageType } from '../../../../../enumerations';
import { ActivatedRoute } from '@angular/router';
import html2pdf from 'html2pdf.js';


@Component({
	selector: 'app-profile-history',
	templateUrl: './profile-history.component.html',
	styleUrl: './profile-history.component.scss' 
})
export class ProfileHistoryComponent implements OnInit {
	@ViewChild('contentToConvert') contentToConvert!: ElementRef;

	$history!: Observable<IPatientHistory[]>
	$history_detail!: Observable<IPatientHistory>
	page_type?: PageType
	id?: string

	constructor(
		private patientHistoryService: PatientHistoryService,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.page_type = this.route.snapshot.data['page_type'];
		this.id = this.route.snapshot.params['id'];

		if (this.page_type && this.id) {
			this.$history_detail = this.patientHistoryService.getById(this.id)
		} else {
			this.$history = this.patientHistoryService.getAll()
		}

		this.$history = this.patientHistoryService.getAll()
	}

	downloadPDF() {
		const options = {
		  margin: 0.3,
		  filename: 'exported-content.pdf',
		  image: { type: 'jpeg', quality: 0.98 },
		  html2canvas: { scale: 1 },
		  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
	
		const content: Element = this.contentToConvert.nativeElement;
	
		html2pdf().from(content).set(options).save();
	}
}
