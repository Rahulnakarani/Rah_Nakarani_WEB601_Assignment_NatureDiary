import { Component, OnInit } from '@angular/core';
import { NatureServiceService } from './nature-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Rah_Nakarani_NatureDiary';
  singleContentItem: any;

  constructor(private natureService: NatureServiceService) {}
  ngOnInit(): void {
    // this.loadSingleContentItem();
  }

  // loadSingleContentItem() {
  //   const idOfContentItemToLoad = 1; 
  //   this.natureService.getContentItemById(idOfContentItemToLoad).subscribe((data) => {
  //     this.singleContentItem = data;
  //     console.log(`Content Item at id: ${idOfContentItemToLoad}`);
  //   });
  // }

  
}
