import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { DogModel } from './models/dog.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dog-book-client';

  name: string;
  dogs: DogModel[];
  isLoading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchDogs();
  }

  onCreateDog() {
    let retVal: DogModel = {
      name: this.name
    };
    console.log('retVal: ', retVal);
    this.http.post<{ name: string }>(environment.baseUrl + '/dog', retVal)
    .subscribe(responseData => {
      console.log('responseData: ', responseData);
      this.fetchDogs();
      this.name = null;
    });
  }

  private fetchDogs(){
    this.isLoading = true;
    this.http.get<DogModel[]>(environment.baseUrl + '/dogs')
        .subscribe(responseData => {
          console.log('List of dogs: ', responseData);
          this.dogs = responseData;
          this.isLoading = false;
        });
  }
}
