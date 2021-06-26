import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private defaultLang : string = "es-MX";

  constructor(private config: PrimeNGConfig, private translateService: TranslateService) {

  }

  // Me quede checando por que el calendario no agarra el texto en español 
  ngOnInit() {
    this.translateService.setDefaultLang(this.defaultLang);
    this.translate(this.defaultLang);
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }
}
