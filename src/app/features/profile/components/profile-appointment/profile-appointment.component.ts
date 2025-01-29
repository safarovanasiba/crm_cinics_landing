import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppointmentService } from '../../../../shared/services';
import { IAppointment, IAppointService, ITransactions } from '../../../../../interfaces';
import { Observable } from 'rxjs';
import { TransactionStatus } from '../../../../../enumerations';
import html2pdf from 'html2pdf.js';

@Component({
	selector: 'app-profile-appointment',
	templateUrl: './profile-appointment.component.html',
	styleUrl: './profile-appointment.component.scss'
})
export class ProfileAppointmentComponent implements OnInit {
	$appointment!: Observable<IAppointment[]>
	$appointment_service!: Observable<IAppointService[]>

	constructor(
		private appointmentService: AppointmentService
	) { }
	ngOnInit() {
		this.$appointment = this.appointmentService.getAll()
		this.$appointment_service = this.appointmentService.getAllServices()
	}

	paymentPrice(transaction: ITransactions[]): number {
		return transaction.reduce((pay, item) => {
			if(item.state === 1 && item.status === TransactionStatus.PAID) {
				return pay + item.price;
			}
			return pay;
		}, 0);
	}

	downloadPDF(id: string): void {
		const element = document.getElementById(id); // PDF ga aylantiriladigan guruh elementini olamiz
		if (element) {
			const options = {
				margin: 1,
				filename: 'exported-content.pdf',
				image: { type: 'jpeg', quality: 0.98 },
				html2canvas: { scale: 2, useCORS: true },  // CORS qo'llab-quvvatlash
				jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
			};
			
			html2pdf().from(element).set(options).save();  // Elementdan PDF yaratamiz
		} else {
			console.error('Element topilmadi');
		}
	}
	
}
