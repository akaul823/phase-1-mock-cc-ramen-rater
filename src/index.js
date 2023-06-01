// write your code here
/* See all ramen images in the div with the id of ramen-menu. When the page loads, request the data 
from the server to get all the ramen objects. Then, display the image for each of the ramen using an 
img tag inside the #ramen-menu div. */
const URL = "http://localhost:3000/ramens";
fetch(URL)
    .then(resp=>resp.json())
//multistep callback function needs curly braces
    .then(ramens=>{ramens.forEach(ramen=>createRamen(ramen))});

function createRamen(ramen){
    //renders the images on the web page
    const ramenMenu = document.querySelector("#ramen-menu");
    const image = document.createElement("img")
    image.src = ramen.image
    ramenMenu.append(image)
    
    //everything below should occur after I click on an image
    image.addEventListener("click", ()=>clickInfo(ramen))  
}
/*
Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the 
#ramen-detail div and where it says insert comment here and insert rating here.
*/
function clickInfo(ramen){
    const detail = document.querySelector(".detail-image")
    detail.src = ramen.image;
    detail.alt= ramen.name
    const names = document.querySelector(".name")
    names.textContent = ramen.name
    const restaurant = document.querySelector(".restaurant")
    restaurant.textContent = ramen.restaurant
    const rating = document.querySelector("#rating-display")
    rating.textContent = ramen.rating
    const comment = document.querySelector("#comment-display")
    comment.textContent = ramen.comment 
}

/*
Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu 
div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the
new ramen is no longer on the page.
*/
const form = document.querySelector("#new-ramen")
form.addEventListener("submit",submitRamen)

function submitRamen(event){
    event.preventDefault();
    //const newName = document.querySelector("#new-name")
    const newName = event.target["new-name"].value
    //const newRestaurant = document.querySelector("#new-restaurant")
    const newRestaurant = event.target["new-restaurant"].value
    //const newImage = document.querySelector("#new-image")
    const newImage = event.target["new-image"].value
    //const newRating = document.querySelector("#new-rating")
    const newRating = event.target["new-rating"].value
    //const newComment = document.querySelector("#new-comment")
    const newComment = event.target["new-comment"].value

    const ramenObject = {"name": newName, "restaurant": newRestaurant, "image": newImage, "rating": newRating, "comment": newComment}
    createRamen(ramenObject)
}
