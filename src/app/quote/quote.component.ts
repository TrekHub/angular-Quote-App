import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {




  @Input()
  quote!: Quote;

  @Output() deleteEvent = new EventEmitter<number>();


  

  
  constructor() { }

  ngOnInit(): void {
    
  }

  upVoteQuote(){
    this.quote.upVote++
  }

  downVoteQuote(){
    this.quote.downVote++
  }
  deleteQuote(){
    this.deleteEvent.emit(this.quote.quoteId);
  }
  
  

}
