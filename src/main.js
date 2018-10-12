import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from './calculator.js';

$(document).ready(function() {
  var calculator = new Calculator();
  $("#input").submit(function(event){
    event.preventDefault();
    let month = $('#month').val();
		let day = $('#day').val();
		let year = $('#year').val();
    let birthday = month + "/" +day + "/" +year ;
    let today = new Date();
    let age = calculator.dateDifferenceInYear(birthday, today);

    $("#age").text(age);
    $('#ageInMercury').text(calculator.ageOnMercury(age));
		$('#ageInMars').text(calculator.ageOnMars(age));
		$('#ageInVenus').text(calculator.ageOnVenus(age));
		$('#ageInJupiter').text(calculator.ageOnJupiter(age));

    $('#leftInEarth').text(calculator.yearsLeft(age, "earth"));
    $('#leftInMercury').text(calculator.yearsLeft(age, "mercury"));
		$('#leftInMars').text(calculator.yearsLeft(age, "mars"));
		$('#leftInVenus').text(calculator.yearsLeft(age, "venus"));
		$('#leftInJupiter').text(calculator.yearsLeft(age, "jupiter"));


  });

});
