import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Output() newQuoteEvent = new EventEmitter<Quote>();

  author!: string;
  quoteContent!: string;
  submitted!: string




  constructor() { }

  ngOnInit(): void {
  }

  newQuote() {

    if (this.author && this.quoteContent && this.submitted != '') {
      const newQuote = new Quote(
        Quote.generateId(), this.author, this.quoteContent, this.submitted, 0, 0, new Date());


      this.newQuoteEvent.emit(newQuote)
    }else {
      alert("Please Provide all The Required Information")
    }




    this.author = "";
    this.quoteContent = "";
    this.submitted = ""


  }

}
