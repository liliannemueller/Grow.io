const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

//need to fix .ENV !!!!
// const apiKey = process.env.API_KEY;
const apiKey = 'fdkPVVPtAZ0+IRwHumRVdQ==dJrY3w78FGv6cG1V'
const baseUrl = 'https://api.api-ninjas.com/v1/exercises?muscle';  

//connect function to frontend to take in exercise argument to pass as target muscle
function getExercises(targetMuscle){
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + targetMuscle,
      headers: { 'X-Api-Key': apiKey},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
  return
}


console.log(getExercises())