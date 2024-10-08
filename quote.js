// const quotes = [
//     {
//         quote: "I can't stand that guy he looks like green eggs and ham",
//         author: "Sullivan James Sherwood",
//         Image: "./images/sully.png"
//     },
//     {
//         quote: "I saw a mom saying Hawk Tuah to her 5 year old kids",
//         author: "Ryan Dean Vrobel",
//         Image: "./images/image.png"
//     },
//     {
//         quote: "Vorp!?",
//         author: "Collin Chaise Wimberly",
//         Image: "./images/Column.JPG"
//     },
//     {
//         quote: "The mattress be like: HONK SHOOAH! SLEEP ON THAT THANG!",
//         author: "Lukah Zion Youngs",
//         Image: "./images/lukans.JPG"
//     },
//     {
//         quote: "I am stinky and smell of garlic!",
//         author: "Walt",
//         Image: "./images/walter.JPG"
//     }
// ];

const quotes = [
    {
        text: "I can't stand that guy he looks like green eggs and ham",
        author: "Sullivan James Sherwood",
        image: "./images/sully.png"
    },
    {
        text: "I saw a mom saying Hawk Tuah to her 5 year old kids",
        author:"Ryan Dean Vrobel",
        image: "./images/image.png"
    },
    {
        text: "The mattress be like: HONK SHOOAH! SLEEP ON THAT THANG!",
        author: "Lukah Zion Youngs",
        image:"./images/lukans.JPG"
    },
    {
        text: "Vorp!?",
        author: "Collin Chaise Wimberly",
        image: "./images/Column.JPG"
    },
    {
        text: "I am stinky and smell of garlic!",
        author: "Walt",
        image:"./images/walter.JPG"
    }
];
 
const imgElement = document.getElementById("quote-image");
const textElement = document.getElementById("quote-text");
const authorElement = document.getElementById("quote-author");
const button = document.getElementById("new-quote");
 
button.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    textElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
    imgElement.src = randomQuote.image;
});
