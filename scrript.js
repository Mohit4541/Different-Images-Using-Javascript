// console.log('hi');

function  Mammals(){
    const a = ["https://cdn.pixabay.com/photo/2023/06/22/03/58/animals-8080446_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/06/06/15/32/squirrel-8044947_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/09/25/14/06/cat-8275147_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/04/04/11/16/echidna-3289503_1280.jpg",
    ];

console.log(a);
console.log(a.length);
console.log(Math.random()*a.length);
console.log(Math.floor(Math.random()*a.length));

let result = Math.floor(Math.random()*a.length);
document.body.style.backgroundImage = `url(${a[result]})`
}


function Birds(){
const b = ["https://fthmb.tqn.com/D9LmnHYOLdxXB4OHyJx-_-OkwpI=/4724x2657/filters:fill(auto,1)/GettyImages-634869043-58a6e83f5f9b58a3c918ca12.jpg",
    "https://birdwatchinghq.com/wp-content/uploads/2021/02/common-birds-of-prey-scaled.jpg",
    "https://wallpapercave.com/wp/wp5356031.jpg",
    "https://www.hdwallpapers.in/download/hummingbird_on_reds_exotic_flower_hd_birds-HD.jpg",
    "https://i.pinimg.com/originals/52/1b/24/521b24e0a59c186db9af4e9ad6dda4be.png",
];

console.log(b);
console.log(b.length);
console.log(Math.random()*b.length);
console.log(Math.floor(Math.random()*b.length));

let bird = Math.floor(Math.random()*b.length);
document.body.style.backgroundImage = `url(${b[bird]})`
}




function Reptiles(){
let c = ["https://phylumsofanimals.files.wordpress.com/2013/01/291439-alexfas01.jpg",
    "https://th.bing.com/th/id/OIP.8fOWIGBVzyptma6JNm04LgHaJ4?rs=1&pid=ImgDetMain",
    "https://i.pinimg.com/originals/27/fe/39/27fe394631636dcd6074ee10acae79c2.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/212941-reptile-snake-animals.jpg",
];

console.log(Math.floor(Math.random()*c.length));

let rep = Math.floor(Math.random()*c.length);
document.body.style.backgroundImage=`url(${c[rep]})`
}


function Fish(){
let d = ["https://www.thesprucepets.com/thmb/nQ05m22d4IVNLXmzWSwod31aSbI=/3604x2403/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clown-fish-swimming-by-coral-1145795316-07b78e286f674781a83abbcada6f38c8.jpg",
    "https://c.pxhere.com/photos/f8/9d/tropical_fish_yellow_tangs_fish_underwater_marine_tropical_ocean_sea-556571.jpg!d",
    "https://th.bing.com/th/id/R.346f82a5239e89523080ad04f2ed8a5f?rik=%2bqBzDa37B5sTZQ&riu=http%3a%2f%2fwww.enkivillage.com%2fs%2fupload%2fimages%2f2014%2f12%2fa67d70c9919f3745121242f55edad211.jpg&ehk=cYBYqzsvHPia4nLtyRKxVSFwseOXv27ikj9G1gucfaM%3d&risl=1&pid=ImgRaw&r=0",
    "https://www.treehugger.com/thmb/JizM4v_loD_yYA9DXiPVvRfN0Lk=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-900329082-5a1050b6ec9b41e3a1bc09022c519208.jpg",
];

console.log(Math.floor(Math.random()*d.length));
let fiss = Math.floor(Math.random()*d.length);
document.body.style.backgroundImage= `url(${d[fiss]})`
}
