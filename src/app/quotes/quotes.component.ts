import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input()
  quotes!: Quote[];


  constructor() { }

  ngOnInit(): void {
  }
  deleteQuote(x:number){
    this.quotes = this.quotes.filter(q => q.quoteId !== x);
  }
}


