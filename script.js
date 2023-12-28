var Data=[
    {
        id:1,
        mem:'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela'
    },
    {
        id:2,
        mem:'The way to get started is to quit talking and begin doing. -Walt Disney'
    },
     {
        id:3,
        mem:'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt'
    }, 
    {
        id:4,
        mem:'You must be the change you wish to see in the world. -Mahatma Gandhi'
    },
     {
        id:5,
        mem:'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa'
    },
     {
        id:6,
        mem:'The only thing we have to fear is fear itself. -Franklin D. Roosevelt'
    },
     {
        id:7,
        mem:'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller'
    },
     {
        id:8,
        mem:'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson'
    },
     {
        id:9,
        mem:'Love yourself first, and everything else falls in line. You really have to love yourself to get anything done in this world. – Lucille Ball'
        
    },
    {
        id:10,
        mem:'The right mental attitude will guide you towards feeling a sense of love that you deserve to experience. – Anonymous'
    },
]

console.log(Data.length)

// access the values of display box and button
var displayEle=document.getElementById('display')
var buttonEle=document.getElementById('btn')


// function to generate the random quotes
function RandomQuotes(){
    var q=Math.floor(Math.random()*Data.length)
    displayEle.innerHTML=Data[q].mem
}

buttonEle.addEventListener('click',RandomQuotes)