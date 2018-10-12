import { Calculator } from './../src/calculator.js';


describe ('Calculator Test', function() {
  let calculator = new Calculator;


  it('should calculate correct age for Earth years', function(){
    expect(calculator.ageOnEarth(27)).toEqual(27)
  });

  it('should calculate correct age for Mercury years', function(){
    expect(calculator.ageOnMercury(27)).toEqual(112)
  });

  it('should calculate correct age for Venus years', function(){
    expect(calculator.ageOnVenus(27)).toEqual(43)
  });

  it('should calculate correct age for Mars years', function(){
    expect(calculator.ageOnMars(27)).toEqual(14)
  });

  it('should calculate correct age for Jupiter years', function(){
    expect(calculator.ageOnJupiter(27)).toEqual(2)
  });

  it('should calculate date difference in years', function(){
    expect(calculator.dateDifferenceInYear("06/02/1991", "10/12/2018")).toEqual(27)
  });
  
});
