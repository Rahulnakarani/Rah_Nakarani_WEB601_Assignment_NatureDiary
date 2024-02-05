import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { FilterPipePipe } from "../filter-pipe.pipe";

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent, FilterPipePipe, FormsModule]
})

export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [{
      id: 1,
      title: 'Morning Walk in the Woods',
      description: 'Capturing the beauty of sunrise through the trees, the songs of birds, and the fresh scent of nature during a morning walk.',
      creator: 'NatureEnthusiast123',
      imgURL: 'https://i.pinimg.com/originals/fa/fd/0a/fafd0aa1c1ca45424df427d5b697c572.jpg',
      type: 'Exploration',
      tags:  ["Morning", "Nature", "Hiking"],
    },
    {
      id: 2,
      title: 'Botanical Garden Adventure',
      description: 'Exploring a variety of plant species, vibrant flowers, and the peaceful ambiance of a local botanical garden.',
      creator: 'FloralExplorer',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuu1dNalJCk7lBw-lXDzTMwQHQgXYoGuxbg&usqp=CAU',
      type: 'Botany',
      tags: ["Flowers", "Plants", "Botanical Garden"],
    },
    {
      id: 3,
      title: 'Riverside Reflections',
      description: 'Observing the gentle flow of a river, the rustling of leaves, and reflections of the surrounding greenery on the surface of water.',
      creator: 'RiverWatcher',
      imgURL: 'https://www.shutterstock.com/image-photo/riverside-sunset-reflection-casted-water-260nw-2333631953.jpg',
      type: 'Botany',
      tags: ["River", "Reflection", "Nature Observations"]
    },
    {
      id: 4,
      title: 'Sunset Over the Mountains',
      description: 'Witnessing the breathtaking colors of the sky as the sun sets behind the majestic mountains.',
      creator: 'MountainExplorer456',
      imgURL: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunset-over-mountains-bekare-creative.jpg',
      type: 'ScenicView',
      tags: ["Sunset", "Mountains", "Nature"],
    },
    {
      id: 5,
      title: 'Underwater Wonderland',
      description: 'Diving into the mesmerizing world beneath the waves, filled with colorful coral reefs and marine life.',
      creator: 'OceanExplorer101',
      imgURL: 'https://themiamiguide.com/wp-content/uploads/unnamed-3-1280x640.jpg',
      type: 'Exploration',
      tags: ["Underwater", "Ocean", "Diving"],
    },
    {
      id: 6,
      title: 'Autumn Hike in the Mountains',
      description: 'Embracing the beauty of autumn foliage during a serene hike in the mountains.',
      creator: 'FallFoliageAdmirer555',
      imgURL: 'https://visitadirondacks.com/sites/default/files/styles/960x540/public/2020-02/fall-hiking_1.jpeg?itok=PEEilnb6',
      type: ' ',
      tags: ["Autumn", "Mountains", "Hiking"],
    },
    {
      id: 7,
      title: 'Sunrise at the Beach',
      description: 'Witnessing the breathtaking sunrise over the calm ocean waves and sandy shores.',
      creator: 'BeachExplorer123',
      imgURL: 'https://images.unsplash.com/photo-1563738068154-8d2e9f19ed62?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBzdW5yaXNlfGVufDB8fDB8fHww',
      type: 'ScenicView',
      tags: ["Sunrise", "Beach", "Nature"],
    },
    {
      id: 8,
      title: 'Majestic Waterfall',
      description: 'Discovering the power and beauty of a majestic waterfall hidden deep in the forest.',
      creator: 'WaterfallSeeker789',
      imgURL: 'https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/01/05219268-AA1B-49EC-B2BE-5F9E4719F145.jpeg',
      type: 'Botany',
      tags: ["Waterfall", "Forest", "Nature"],
    },
    {
      id: 9,
      title: 'Wildlife Safari Adventure',
      description: 'Embarking on an exciting safari adventure, capturing the diverse wildlife in their natural habitat.',
      creator: 'SafariExplorer456',
      imgURL: 'https://tigerencounter.com/wp-content/uploads/2019/09/Chitwan-Wildlife-Safari-1.jpg',
      type: ' ',
      tags: ["Wildlife", "Safari", "Nature"],
    }]
  }  

  searchTitle: string = '';
  searchMsg: string = '';
  searchClr: string = '';

  searchCard(): void{
    const foundContent = this.contentArray.find(content => content.title === this.searchTitle); 

    if (foundContent) {
      this.searchMsg = `Content with title "${this.searchTitle}" exists.`;
      this.searchClr = 'green';
    }
    else {
      this.searchMsg = `Content with title "${this.searchTitle}" does not exist.`;
      this.searchClr = 'red';
    }
  }
}

