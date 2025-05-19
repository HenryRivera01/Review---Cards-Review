const reviews = [ 
    { 
    name: 'Cat Jhones',
    img: './src/img1.jpeg',
    rol: 'UX - Designer',
    info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam praesentium labore ratione voluptatibus facilis doloribus neque illo tempora ex.'
    },
    { 
    name: 'The Walking Dog',
    img: './src/img2.jpeg',
    rol: 'Developer',
    info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam praesentium labore ratione voluptatibus facilis doloribus neque illo tempora ex.'
    },
    { 
    name: 'Podcast Dog',
    img: './src/img3.jpeg',
    rol: 'Relator',
    info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam praesentium labore ratione voluptatibus facilis doloribus neque illo tempora ex.'
    },
    { 
    name: 'Nerd Card',
    img: './src/img4.jpeg',
    rol: 'Nerd',
    info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam praesentium labore ratione voluptatibus facilis doloribus neque illo tempora ex.'
    },
    { 
    name: 'Selfie Dog',
    img: './src/img5.jpeg',
    rol: 'Photograph',
    info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam praesentium labore ratione voluptatibus facilis doloribus neque illo tempora ex.'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    
})

let currentIndex = 0

const name = document.querySelector('.name')
const img = document.querySelector('.photo')
const rol = document.querySelector('.rol')
const review = document.querySelector('.review')

const nextButton = document.querySelector('.nextBtn')
const prevButton = document.querySelector('.prevBtn')
const surpriseButton = document.querySelector('.surpriseMeButton')

nextButton.addEventListener('click', () => {
    if(currentIndex >= reviews.length - 1){
        currentIndex = 0;
    }else{  
        currentIndex ++;
    }
    console.log(currentIndex)
    console.log(reviews[currentIndex])

    displayReview(currentIndex)
})

prevButton.addEventListener('click', () => {
    if(currentIndex == 0){
        currentIndex = reviews.length - 1 ;
    }else{  
        currentIndex --;
    }
    console.log(currentIndex)
    console.log(reviews[currentIndex])

    displayReview(currentIndex)

})

surpriseButton.addEventListener('click', () => {

    currentIndex = Math.floor( Math.random() * reviews.length )

    console.log(currentIndex)
    console.log(reviews[currentIndex])

    displayReview(currentIndex)

})



function displayReview(index){
    name.innerHTML = reviews[index].name;
    img.setAttribute('src',reviews[index].img)
    rol.innerHTML = reviews[index].rol;
    review.innerHTML = reviews[index].info;
    
}
