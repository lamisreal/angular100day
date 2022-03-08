import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { author, Author } from '../model/authors.model';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {
@Input() author: Author = author;

  constructor() { }

  ngOnInit(): void {
  }


  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

}
