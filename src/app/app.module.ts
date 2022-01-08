import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ElapsedTimePipe } from './elapsedTime.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    FormComponent,
    ElapsedTimePipe,
  
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
