import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces' // the name we use in html
})
export class ConvertToSpaces implements PipeTransform{
    transform(value: any, character: string): string {
        return value.replace(character, ' ');
    }

}