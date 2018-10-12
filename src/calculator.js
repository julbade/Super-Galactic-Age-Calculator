export class Calculator{

  constructor (){}


  ageOnEarth(age) {
    let earthAge = Math.floor(age / 1);
    return earthAge;

  }

  ageOnMercury(age) {
    let mercuryAge = Math.floor(age / 0.24);
    return mercuryAge;
  }

  ageOnVenus(age) {
    let venusAge = Math.floor(age / 0.62);
    return venusAge;
  }

  ageOnMars(age) {
    let marsAge = Math.floor(age / 1.88);
    return marsAge;
  }

  ageOnJupiter(age) {
    let jupiterAge = Math.floor(age / 11.86);
    return jupiterAge;
  }

  dateDifference(startDate, endDate) {
    let day_start = new Date(startDate);
    let day_end = new Date(endDate);
    let differenceInMS = day_end - day_start;
    let differenceInSec = differenceInMS/1000;
    return differenceInSec;
  }

  dateDifferenceInYear(startDate, endDate) {
    let secs = this.dateDifference(startDate, endDate);
    let years = secs / (365 * 24 * 3600);
    years = Math.floor(years)
    return years;
  }

}
