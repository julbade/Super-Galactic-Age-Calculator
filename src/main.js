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

  });

});
