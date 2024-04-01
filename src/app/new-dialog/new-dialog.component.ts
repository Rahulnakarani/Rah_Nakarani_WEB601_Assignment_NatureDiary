import { Component, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-dialog',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './new-dialog.component.html',
  styleUrl: './new-dialog.component.scss'
})
export class NewDialogComponent {

  newContent: Content = {
    id : null,
    title: '',
    description: '',
    creator: '',
    type: '',
    imgURL: '',
    tags: [] as string[]
  };
  tagsString: string = '';



  constructor(public dialogRef: MatDialogRef<NewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancelClick(): void {
    this.dialogRef.close();
   
  }

  onAddClick(): void {
    // Handle adding content
    this.dialogRef.close(this.newContent);
    console.log('hello' + this.newContent);
    this.clearFields();
  }

  clearFields() {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    };
    this.tagsString = '';
  }
}
