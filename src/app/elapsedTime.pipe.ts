import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(value: any): number {
    let formattedTime: any = ''
    let actualDate: any = new Date()



    let timeDiff = Math.abs(value - actualDate)/1000;
    let noOfDays = Math.floor(timeDiff/86400)


if(noOfDays > 0){
  formattedTime = `${Math.floor(noOfDays)} Days`
}

timeDiff-= noOfDays * 86400;
let numberOfHours = Math.floor(timeDiff/3600);

if(numberOfHours > 0){
 formattedTime = `${Math.floor(numberOfHours)} Hours `
}
timeDiff-= numberOfHours * 3600;
let minutes = Math.floor(timeDiff/60);

if(minutes > 0){
 formattedTime = `${Math.floor(minutes)} Minutes `
}
timeDiff-= minutes *60;
let seconds =timeDiff%60;

if(seconds > 0){
 formattedTime = `${Math.floor(seconds)} Seconds `
}

  return formattedTime;

  }

}
