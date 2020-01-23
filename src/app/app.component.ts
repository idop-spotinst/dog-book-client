import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dog-book-client';

  name: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onCreateDog(dog: {name: string, userId: number}) {
    let retVal = {
      name: this.name,
      // userId: 1
    };
    console.log('retVal: ', retVal);
    this.http.post('http://localhost:3000/api/dog', retVal)
    .subscribe(responseData => {
      console.log('responseData: ', responseData);
    });
  }
}
