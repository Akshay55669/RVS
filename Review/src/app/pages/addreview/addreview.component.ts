import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { IReview } from 'src/app/ireview';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  Email:FormControl=new FormControl("")
  CompanyName:FormControl=new FormControl("")
  Designation:FormControl=new FormControl("")
  REview:FormControl=new FormControl("")

  constructor(private review:ReviewService) { }

  ngOnInit(): void {
  }


  reviewSubmit(){
    let details:IReview={
      Email:this.Email.value,
      CompanyName:this.CompanyName.value,
      Designation:this.Designation.value,
      Review:this.REview.value
    };
    this.review.review(details);
    console.log(details);
  }
}
