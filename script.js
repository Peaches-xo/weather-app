
const searchinput = document.querySelector('input[type="search"]');
const searchbutton = document.querySelector('.input_wrapper>button');
let infocard = document.querySelector('.info_card');

let infocardlocation = document.querySelector('.info_card_left p:nth-child(1)');
let infocarddescription = document.querySelector('.info_card_left p:nth-child(2)');
let infocardtemp = document.querySelector('.info_card_left p:nth-child(3)');
let infocardimg = document.querySelector('.info_card_right>img');


let weatherpagelocation = document.querySelector('.weather_main header h3');
let weatherpagedescription = document.querySelector('.panel_temp p:first-child');
let weatherpagetemp = document.querySelector('.panel_temp p:nth-child(2)');
let weatherpageimg = document.querySelector('.panel_temp img');

let weatherpagewind = document.querySelector('.panel_wind div:first-child p:nth-child(2)');
let weatherpagehumidity = document.querySelector('.panel_wind div:nth-child(2) p:nth-child(2)');
let weatherpageuv = document.querySelector('.panel_wind div:nth-child(3) p:nth-child(2)');



// FETCH
//URL (required), options (optional)
// fetch('https://url.com/some/url', {
//     mode: 'cors'
// })
//   .then(function(response) {
//     // Successful response :)
//   })
//   .catch(function(err) {
//     // Error :(
//   });

searchbutton.addEventListener('click', getLocationData);


async function getLocationData(){;
    let keyword = searchinput.value;
    let url = 'https://api.weatherapi.com/v1/current.json?key=8eb1d2a2764446829f064115240603&q='

    let request = String(url + keyword);

    try {
        const response = await fetch(request, {
            mode: 'cors'
        });
        const data = await response.json();
        console.log('data: ', data);
        //return data as object here? 
        displayInfoCard(data);

        displayWeatherPage(data)
    }  catch (error) {
       console.error("Error:", error);
   }
}



function displayInfoCard(data){

    infocardlocation.textContent = data.location.name;
    infocarddescription.textContent = data.current.condition.text;
    infocardtemp.textContent = `${data.current.temp_c}\xB0c`;
    infocardimg.setAttribute('src', data.current.condition.icon);
}

// infocard.addEventListener('click', displayWeatherPage);

function displayWeatherPage(data){
    weatherpagelocation.textContent = `${data.location.name}, ${data.location.country}`;
    weatherpagedescription.textContent = data.current.condition.text;
    weatherpagetemp.textContent = `${data.current.temp_c}\xB0c`;
    weatherpageimg.setAttribute('src', data.current.condition.icon);

    weatherpagewind.textContent = `${data.current.wind_kph} km/h`;
    weatherpagehumidity.textContent = `${data.current.humidity}\%`;
    weatherpageuv.textContent = data.current.uv ;
}



// Temp: data.current.temp_c
// Desc: data.current.condition.text


// Wind: data.current.wind_kph
// Humidity: data.current.humidity
// UV: data.current.uv










//  



    // fetch(url+keyword, {
    //     mode: 'cors'
    // })
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(response){
    // // console.log(response.data.images.original.url);
    //     img.src = response.data.images.original.url;
    // });
















//----------------
// Save input, input submit button, info card (will need to go to a factory/ way to create cards )


//PHASE 1
//call fetch based on input 
//fill in details into card


//PHASE 2
//call fetch based on input
//create card
//display card


