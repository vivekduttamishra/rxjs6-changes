import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "movieVerdict"
})
export class MovieVerdictPipe implements PipeTransform {
  transform(value: any, max: number = 10): any {
    const imdbRating = Math.round(parseFloat(value));
    const advises = [
      "",
      "Worst Movie Ever Made",
      "Don't waste Your Time",
      "Time Pass",
      "Worth A Watch",
      "Don't Miss It."
    ];
    const index = Math.ceil(imdbRating * 5 / max);
    console.log(index, advises[index]);
    return advises[index];
  }
}
