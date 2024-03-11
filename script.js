const img = document.querySelector('img');
const btn_newimg = document.querySelector('.btn_newimg');
const input = document.querySelector('input[type="search"]');

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







btn_newimg.addEventListener('click', getnewimg);

async function getnewimg(){

    let keyword = input.value;
    let url = 'https://api.giphy.com/v1/gifs/translate?api_key=vOH8hhozqr5gGnDKOSNIsB0N9mXZG8ka&s=';
    let request = String(url+keyword);
    console.log(typeof request);

    try {
        const response = await fetch(request, {
            mode: 'cors'
        });
        const data = await response.json();
        console.log('data: ', data);

    }  catch (error) {
       console.error("Error:", error);
   }

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

};






// async function fetchJSON(request) {
//     try {
//       const response = await fetch(request);
//       const contentType = response.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new TypeError("Oops, we haven't got JSON!");
//       }
//       const jsonData = await response.json();
//       // process your data further
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  