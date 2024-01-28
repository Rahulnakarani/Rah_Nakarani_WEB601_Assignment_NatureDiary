import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule,ContentCardComponent]
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
      type: 'Nature Reflection',
      tags: ["River", "Reflection", "Nature Observations"]
    },
    {
      id: 4,
      title: 'Sunset Over the Mountains',
      description: 'Witnessing the breathtaking colors of the sky as the sun sets behind the majestic mountains.',
      creator: 'MountainExplorer456',
      imgURL: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunset-over-mountains-bekare-creative.jpg',
      type: 'Scenic View',
      tags: ["Sunset", "Mountains", "Nature"],
    },
    {
      id: 5,
      title: 'Underwater Wonderland',
      description: 'Diving into the mesmerizing world beneath the waves, filled with colorful coral reefs and marine life.',
      creator: 'OceanExplorer101',
      imgURL: 'https://themiamiguide.com/wp-content/uploads/unnamed-3-1280x640.jpg',
      type: 'Underwater Exploration',
      tags: ["Underwater", "Ocean", "Diving"],
    },
    {
      id: 6,
      title: 'Autumn Hike in the Mountains',
      description: 'Embracing the beauty of autumn foliage during a serene hike in the mountains.',
      creator: 'FallFoliageAdmirer555',
      imgURL: 'https://visitadirondacks.com/sites/default/files/styles/960x540/public/2020-02/fall-hiking_1.jpeg?itok=PEEilnb6',
      type: 'Hiking',
      tags: ["Autumn", "Mountains", "Hiking"],
    }]
  }  
}

