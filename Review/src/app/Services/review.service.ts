import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReview } from '../ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  review(details:IReview){
    let url="https://localhost:44313/api/Reviews/review"
     this.http.post(url,details)
    .subscribe(result=>console.log("Data Send to Database"));
  }
}
