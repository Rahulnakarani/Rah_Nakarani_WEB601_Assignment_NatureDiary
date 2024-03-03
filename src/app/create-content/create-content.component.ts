import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  @Output() contentAdded = new EventEmitter<any>();
  newContent = { id: 0, title: '', description: '', creator: '', type: '', tags: [] as string[] };
  tags: string = '';

  submitContent() {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    promise.then((success) => {
      if (success) {
        this.newContent.tags = this.tags.split(',');
        this.contentAdded.emit(this.cloneContent(this.newContent));
        console.log(`Content successfully added: ${this.newContent.title}`);
        this.clearFields();
      } else {
        console.error(`Failed to add content.`);
      }
    });
  }

  private cloneContent(content: any): any {
    return { ...content };
  }

  private clearFields() {
    this.newContent = { id: 0, title: '', description: '', creator: '', type: '', tags: [] };
  }
}
