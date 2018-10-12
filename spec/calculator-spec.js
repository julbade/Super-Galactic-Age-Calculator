import { Calculator } from './../src/calculator.js';


describe ('Calculator Test', function() {
  let calculator = new Calculator;

  it('should calculate correct age for Mercury years', function(){
    expect(calculator.ageOnMercury(27)).toEqual(112)
  });

  it('should calculate correct age for Eaerth years', function(){
    expect(calculator.ageOnEarth(27)).toEqual(27)
  });
});
