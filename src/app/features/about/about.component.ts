import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
	$header:{image?: string | null, title: string, descr:string} = {image: null, title: "Bizning GLOBAL HEALTHCARE наша больница", descr:"Abat Steklo - shisha va shisha buyumlar ishlab chiqarishga ixtisoslashgan kompaniya. 2013-yilda tashkil etilgan kompaniya bir necha yillardan buyon o‘z mijozlariga yuqori sifatli shisha yechimlarini taqdim etib kelmoqda. Ularning Услугиi oyna, eshik, oyna va dekorativ oyna buyumlari kabi turli xil oyna mahsulotlarini ishlab chiqarishni o'z ichiga oladi. Abat Steklo sifat va mijozlar ehtiyojini qondirishga sodiqligi bilan mashhur bo'lib, ularni shisha bilan bog'liq barcha ehtiyojlar uchun ishonchli tanlovga aylantiradi."}

	ngOnInit() {
		AOS.init();
	}
}
