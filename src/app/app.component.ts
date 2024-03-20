import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from "./content-card/content-card.component";
import { ContentListComponent } from "./content-list/content-list.component";
import { HoverAffectDirective } from './hover-affect.directive';
import { FormsModule } from '@angular/forms';
import { NatureServiceService } from './nature-service.service';
import { ContentMessageComponent } from "./content-message/content-message.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent, HoverAffectDirective, FormsModule, ContentMessageComponent]
})
export class AppComponent implements OnInit {
  title = 'Rah_Nakarani_NatureDiary';
  singleContentItem: any;

  constructor(private natureService: NatureServiceService) {}
  ngOnInit(): void {
    this.loadSingleContentItem();
  }

  loadSingleContentItem() {
    const idOfContentItemToLoad = 1; 
    this.natureService.getContentItemById(idOfContentItemToLoad).subscribe((data) => {
      this.singleContentItem = data;
      console.log(`Content Item at id: ${idOfContentItemToLoad}`);
    });
  }

  
}
