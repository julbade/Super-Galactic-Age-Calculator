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

}
