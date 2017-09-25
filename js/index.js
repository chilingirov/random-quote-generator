function randomQuote() {

    $.ajax({
        url: "http://api.giphy.com/v1/gifs/random?api_key=1SPxjTceVrzEl44goX8NK3LGFljXPDQt&callback=?",
        dataType: "jsonp",
        success: function(data) {
            $(".right-gif").html("<img src=" + data.data.fixed_height_downsampled_url + " >")
        }
    })
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(response) {
            document.querySelector(".left-quote").style.display = "block"
            $(".left-quote").html("<h2 id='random_quote' class='lead text-center'>" +
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
    var randomcol = randomColor();
    document.querySelector("body").style.backgroundColor = randomcol;
    document.querySelector("#quote").style.color = randomcol;
    document.querySelector("input").style.color = randomcol;
});