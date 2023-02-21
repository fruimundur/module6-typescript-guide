var tvShows = [
    {
        name: "Breaking Bad",
        image: "img/breakingbad.jpg"
    },
    {
        name: "Sons of Anarchy",
        image: "img/sonsofanarchy.jpg"
    },
    {
        name: "Lost",
        image: "img/lost.jpg"
    },
    {
        name: "Mad Men",
        image: "img/madmen.jpg"
    },
    {
        name: "Game of Thrones",
        image: "img/gameofthrones.jpg"
    },
    {
        name: "Dexter",
        image: "img/dexter.jpg"
    },
];
var container = document.getElementById("container");
function renderTvShows() {
    var tvShowPosterDOM = "";
    for (var i = 0; i < tvShows.length; i++) {
        tvShowPosterDOM += "<img alt=\"TV show poster\" class=\"tvshow-poster\" src=\"".concat(tvShows[i].image, "\">");
    }
    container.innerHTML = tvShowPosterDOM;
}
renderTvShows();
