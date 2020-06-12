import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-galary',
  templateUrl: './image-galary.component.html',
  styleUrls: ['./image-galary.component.scss']
})
export class ImageGalaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  srcImage="/assets/images/1.jpg";
  src="/assets/images/";


   count=1
  nextImage(){
    if(this.count<4){
      this.count++;
this.srcImage=this.src+this.count+".jpg"
    }
    else{
      this.count=1
      this.srcImage=this.src+this.count+".jpg"

    }

  }
  prevImage(){
    if(this.count>1){
      this.count--;
this.srcImage=this.src+this.count+".jpg"
    }
    else{
      this.count=4;
      this.srcImage=this.src+this.count+".jpg"

    }
  }


}
