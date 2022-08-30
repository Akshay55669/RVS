import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';
import { IReview } from 'src/app/ireview';
import { IReviewData } from 'src/app/ireview-data';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent implements OnInit {

  public reviewData:any;

  constructor(private review:ReviewService) { }

  ngOnInit(): void {

    this.review.getData().subscribe((rev:IReviewData[])=>{
      console.log(rev);
      this.reviewData=rev;

    });

  }

}
