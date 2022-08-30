import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReview } from '../ireview';
import { Observable } from 'rxjs';
import { IReviewData } from '../ireview-data';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  review(details:IReview){
    let url="https://localhost:44367/api/AddReviews"
     this.http.post(url,details)
    .subscribe(result=>console.log("Data Send to Database"));
  }

  reviewStatus(stat:IReview){
    let url="https://localhost:44367/api/AddReviews/"
     this.http.put(url+stat.id,stat)
    .subscribe(result=>console.log("Data Send to Database"));
  }

  getData(): Observable<IReviewData[]> {
    let url = "https://localhost:44367/api/AddReviews"
    return this.http.get<IReviewData[]>(url);
  }
}
