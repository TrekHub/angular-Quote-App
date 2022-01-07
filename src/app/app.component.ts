import { Component } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(
      Quote.generateId(),
      "Isaac newton",
      "My name is Teddy Omondi, I love school",
      "Teddy Omondi",
      0,
      0

    ),
    new Quote(
      Quote.generateId(),
      "Isaac newton",
      "My name is Teddy Omondi, I love school",
      "Teddy Omondi",
      0,
      0

    )


  ]

}