function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(response) {
            $("#quote").html("<h2 id='random_quote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + ' &dash;</h2>' + '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + response.quoteText + '-' + response.quoteAuthor + '-' + '"' + ' >Tweet</a>');
        }
    });
}

function randomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}


$("#generate").on("click", function() {
    randomQuote();
    document.querySelector("body").style.backgroundColor = randomColor();
});