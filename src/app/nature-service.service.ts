import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { contentArray } from './helper-files/contentDb';
import { MessagesServiceService } from './messages-service.service';

@Injectable({
  providedIn: 'root'
})
export class NatureServiceService {

  constructor(private messagesService: MessagesServiceService) { }

  getContentArray(): Observable<any[]> {
    this.messagesService.sendMessage('Content array loaded!');
    return of(contentArray);
  }

  getContentItemById(id: number): Observable<any> {
    const contentItem = contentArray.find(item => item.id === id);
    this.messagesService.sendMessage(`Content Item at id: ${id}`);
    return of(contentItem);
  }
}
