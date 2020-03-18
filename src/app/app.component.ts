import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpServices';
  public persondata = [];
  constructor(private httpservice: HttpService) { }
  ngOnInit() {
    this.httpservice.getData().subscribe((data)=> {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    });
  }
}
