import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  @Output() contentAdded = new EventEmitter<any>();
  newContent = { id: 0, title: '', description: '', creator: '', type: '', tags: [] as string[] };
  tags: string = '';
  errormsg: string = '';

  submitContent() {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    promise.then((success) => {
      

      if(!this.isValidContent(this.newContent)) {
        this.errormsg="please enter all the fields";
      }
      else {
        this.newContent.tags = this.tags.split(',');
        this.contentAdded.emit(this.cloneContent(this.newContent));
        console.log(`Content successfully added: ${this.newContent.title}`);
        this.clearFields();
      }
    });
  }

  private cloneContent(content: any): any {
    return { ...content };
  }

  private clearFields() {
    this.newContent = { id: 0, title: '', description: '', creator: '', type: '', tags: [] };
    this.errormsg="";
  }

  isValidContent(content: Content): boolean {
    return !!content.id && !!content.title && !!content.description && !!content.creator;
  }
}
