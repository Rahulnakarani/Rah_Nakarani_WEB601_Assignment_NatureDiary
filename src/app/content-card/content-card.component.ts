import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

   
    this.contentList.add({
      id: 1,
      title: 'Morning Walk in the Woods',
      description: 'Capturing the beauty of sunrise through the trees, the songs of birds, and the fresh scent of nature during a morning walk.',
      creator: 'NatureEnthusiast123',
      imgURL: 'morning-walk.jpg',
      type: 'Exploration',
      tags:  ["Morning", "Nature", "Hiking"],
    });

    this.contentList.add({
      id: 2,
      title: 'Botanical Garden Adventure',
      description: 'Exploring a variety of plant species, vibrant flowers, and the peaceful ambiance of a local botanical garden.',
      creator: 'FloralExplorer',
      imgURL: 'boatnical-garden.jpg',
      type: 'Botany',
      tags: ["Flowers", "Plants", "Botanical Garden"],
    });

    this.contentList.add({
      id: 3,
      title: 'Riverside Reflections',
      description: 'Observing the gentle flow of a river, the rustling of leaves, and reflections of the surrounding greenery on the surface of water.',
      creator: 'RiverWatcher',
      imgURL: 'Rivers.jpg',
      type: 'Nature Reflection',
      tags: ["River", "Reflection", "Nature Observations"]
    });
  }
}
