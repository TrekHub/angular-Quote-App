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
      "James Cameron",
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
      "Teddy Omondi",
      0,
      0,
      new Date('2022,01,09')


    ),
    new Quote(
      Quote.generateId(),
      "Robert Louis Stevenson",
      "Don't judge each day by the harvest you reap but by the seeds that you plant ",
      "TrekHub",
      0,
      0,
      new Date('2022,01,09')

    ),
    new Quote(
      Quote.generateId(),
      "Hellen KEller",
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
      "Maya",
      0,
      0,
      new Date('2022,01,09')

    ),
  





  ]

  newQuote(newQuote: Quote){
    this.quotes.push(newQuote);
  }

}