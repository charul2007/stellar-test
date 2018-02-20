import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    if (value) {
		  return value.toLowerCase().split(' ').map(function(word) {
		    return (word.charAt(0).toUpperCase() + word.slice(1));
		  }).join(' ');
    }
  }
}