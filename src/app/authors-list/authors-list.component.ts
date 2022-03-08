import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../model/authors.model';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  constructor() {
  }

  authors= authors;
  currentAuthor = authors[0];

  ngOnInit(): void {
  }

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDelete(id: number) {
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
