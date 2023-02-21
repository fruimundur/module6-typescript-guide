// Here I'm using TypeScript to enforce the shape of an object with an interface. 
// I'm doing this because I know that the shape of all the objects in the array will be identical.
// The interface defines the types of each property in the object.
interface TvShows {
        name: string
        image: string
// Here I'm adding a third optional property, with a so-called TypeScript Union Type. What the union type is saying is that the value of the property 
// has to be either a string or a number. This property could be used if someone wants to add a rating (number type) or any additional information (string).
// Also, as we can see the property key has to be a string. This gives you the freedom to name the key whatever you want.
        [key:string]: string | number
}

// Here I'm setting the interface to the array, which then enforces the shape of the objects it contains. I'm also adding a [] after the interface,
// to tell TypeScript that this is an array
const tvShows: TvShows[] = [
    {
// Here you can see I'm setting property values that matche the Types in the properties in the interface
// So if I f. ex. were to change the value in the name property to a number, I would get an error because the value has to be a string.
// As you can see the value of the third property is a number type. This could also be a string or a boolean or any other type.
// This is because we have defined in our interface that the third property can take 'any' type.
        name: "Breaking Bad",
        image: "img/breakingbad.jpg",
        rating: 9
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
]

const container = document.getElementById("container")

function renderTvShows() {
// Here I'm declaring a variable, which will hold all the images that the loop below will spit out. Then we can set the value of the variable as inner HTML
// for the HTML container, which will display the images. I could also have the loop spit the images directly into the HTML container, but by doing it this way
// we only manipulate the DOM once instead of every time the loop spits an image out, and thus optimize the performance of the page.
// Since the variable I'm declaring is empty, I could just leave it at that. But since I know that the only possible type I want it to hold is a string, 
// I'm using TypeScript to set the string type to the variable.
    let tvShowPosterDOM:string
    for (let i = 0; i < tvShows.length; i++) {
        tvShowPosterDOM += `<img alt="TV show poster" class="tvshow-poster" src="${tvShows[i].image}">`
    }
    container.innerHTML = tvShowPosterDOM
}

renderTvShows()