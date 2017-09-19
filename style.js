
var search = $("#search-item").val();

var APIKey = "75d2df1262dd4f54bd6f8ab946d7f9f6";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ APIKey + "&q=" + search + "&begin_date=2000&end_date=2017";

// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ APIKey + "&q=" + search + "&begin_date=" + startYear + "&end_date=" + endYear;


var startYear;

var endYear;

var limit;

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response);

    var result = response.response;
    console.log(result);
});


function processForm () {




}

