// $("button").click(function(e) {
// var queryVal = $('#search-item').value();
//     e.preventDefault();
//     $.ajax({ 
//         url: "http://api.giphy.com/v1/gifs/search?q=" + input+ "&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
//         type: "GET",
//         data: { 
//             id: $(this).val(), // < note use of 'this' here
//             access_token: $("#access_token").val() 
//         },
//       })  
//     //promise
//     .then(function(response) {
//     	setImageArray(response);

//     })

//     .catch(function(err){
// 		console.log(err);

// 		console.log("Request failed")

//     })
         
// });