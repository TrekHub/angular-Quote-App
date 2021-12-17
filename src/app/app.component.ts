import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [

    {
     upVote: 30,
      downVote: 10,
      description: 'Quote One'
    },
    {
     upVote: 30,
      downVote: 10,
      description: 'Quote Two'
    },
    {
     upVote: 30,
      downVote: 10,
      description: 'Quote Three'
    },
    {
     upVote: 30,
      downVote: 10,
      description: 'Quote Four'
    }
  ]
}
