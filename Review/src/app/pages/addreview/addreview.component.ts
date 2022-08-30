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

  Name:FormControl=new FormControl("")
  CompanyName:FormControl=new FormControl("")
  Designation:FormControl=new FormControl("")
  Reviews:FormControl=new FormControl("")

  constructor(private review:ReviewService) { }

  ngOnInit(): void {
  }


  reviewSubmit(){
    debugger;
    let details:IReview={
      Name:this.Name.value,
      CompanyName:this.CompanyName.value,
      Designation:this.Designation.value,
      Reviews:this.Reviews.value
    };
    var key:string=details.Reviews.toLowerCase();
    if(key.includes("Poor")||key.includes("worst")||key.includes("bad")||key.includes("not")
    ||key.includes("disappointed")||key.includes("zero")||key.includes("hate")||key.includes("fake")
    ||key.includes("unfair")||key.includes("unhappy")||key.includes("misunderstood"))
    {
        console.log("Negative Review") 
      }
      else{
        
        console.log("Positive Review");
        details.status=!details.status;
        this.review.reviewStatus(details)

    }
    this.review.review(details);
    console.log(details);
  }
}
