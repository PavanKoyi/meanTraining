import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ComponentInteractionDemo';

  public name = "Pavan Koyi ...";

  public dataToProject: any = {
    id: "10189",
    name: "PavanKumarKoyi"
  };

  constructor( private httpClient: HttpClient ) {}

  demo: any;
  data: any;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('../assets/data.json').subscribe(data => {
        this.data = data;
        console.log(this.data);
    });
  }
  
}
