const images =[
    "https://i.pinimg.com/564x/8c/2f/c1/8c2fc1b5509c8f88239dd34ad8d56523.jpg",
    "https://i.pinimg.com/564x/16/36/d2/1636d287180a16b4abed0d2516255096.jpg",
    "https://i.pinimg.com/564x/15/e9/be/15e9bec59415e5fecc24b22445337734.jpg",
    "https://i.pinimg.com/564x/73/b8/ff/73b8ffb826befbfe5563b1b8a8d757b7.jpg"
];
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

class Slider {
    constructor(images){
        this.images = images;
        this.currentSlider = 0;
    }
    
}