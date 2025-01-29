import { Component, OnInit } from '@angular/core';
import { FilesService, NewsService } from '../../shared/services';
import { Observable } from 'rxjs';
import { INews } from '../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { PageType } from '../../../enumerations';
import * as AOS from 'aos'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  page_type?: PageType
  id?: string
  $news_detail!: INews
  $news!: Observable<INews[]>
  $header:{image?: string | null, title: string, descr:string} = {image: null, title: "Yangliklar", descr:"Nexus School - Bizning markazimiz 2021-yil 30- sentyabrda tashkil etilgan. Mana shu davr <br> mobaynida Harvard School o’quv markazi shiddat bilan rivojlanib bormoqda. Bu yerda muhit, <br> ta’lim olish borasidagi."}
  
  constructor(
    private _newsService: NewsService,
    private _filesService: FilesService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    AOS.init()

    this.page_type = this.route.snapshot.data['page_type'];
    this.id = this.route.snapshot.params['id'];

    if(this.page_type && this.id){
      this._newsService.getById(this.id).subscribe((data) => {
        this.$news_detail = data
      })
    }else{
      this.$news = this._newsService.getAll()
    }
  }

  getView(image: string){
    return this._filesService.getView(image)
  }

}
