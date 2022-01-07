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
      description: "My name is Teddy Omondi, I love school",
      upVote: 213,
      downVote: 12

    },
    {
      description: "My girlFriends name is Joy, I love her so much",
      upVote: 213,
      downVote: 12

    }
  ]
}
