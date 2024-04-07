import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NatureServiceService } from '../nature-service.service';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss'
})
export class ContentDetailComponent {
  id! : number;
  content!: Content;
  constructor(private natureService: NatureServiceService, private route: ActivatedRoute, private router: Router,) {}

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0);
      this.natureService.getContentItemById(this.id).subscribe((c) => {
        this.content = c;
      })
    });

  }


}
