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
      0,
      new Date(2020,12,1)


    ),
    new Quote(
      Quote.generateId(),
      "Isaac newton",
      "My name is Teddy Omondi, I love school",
      "Teddy Omondi",
      0,
      0,
      new Date('2021,04,03')

    )


  ]

  newQuote(newQuote: Quote){
    this.quotes.push(newQuote);
  }

}