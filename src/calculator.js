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
    let dayStart = new Date(startDate);
    let dayEnd = new Date(endDate);
    let differenceInMS = dayEnd - dayStart;
    let differenceInSec = differenceInMS/1000;
    return differenceInSec;
  }

  dateDifferenceInYear(startDate, endDate) {
    let secs = this.dateDifference(startDate, endDate);
    let years = secs / (365 * 24 * 3600);
    years = Math.floor(years)
    return years;
  }

  lifeExpectancy(planet) {
    let life = 0;
    var expect = this;
    if (planet === "earth"){
      life = 79;
    }
    else if (planet === "mercury"){
      life = expect.ageOnMercury(79)
    }
    else if (planet === "venus"){
      life = expect.ageOnVenus(79)
    }
    else if (planet === "mars"){
      life = expect.ageOnMars(79)
    }
    else if (planet === "jupiter"){
      life = expect.ageOnJupiter(79)
    }
    return life;
  }

  yearsLeft(age, planet){
    let years = 0;
    years = this.lifeExpectancy(planet) - age;
    return years;
  }

}
