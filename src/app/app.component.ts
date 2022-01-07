import { Component } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // quotes: Quote[] = [
  //   new Quote("My name is Teddy Omondi", 34, 24),
  //   new Quote("I love coding ", 4, 24),
  // ]

  quotes: Quote[] = [
    {
      author: "Isaac newton",
      quoteContent: "My name is Teddy Omondi, I love school",
      submitted: "Teddy Omondi",
      upVote: 0,
      downVote: 0

    }

  ]
}
