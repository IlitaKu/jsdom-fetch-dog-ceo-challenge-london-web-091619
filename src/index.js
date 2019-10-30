
fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => displayDogs(data));

function displayDogs(data){
    const dogImages = document.body.querySelector('#dog-image-container')
    data.message.forEach(dog => {
        dogImages.innerHTML += `<img src= ${dog} alt='doggy' height='300' width='300'>`
    })
}

fetch ('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breedsInfo => displayBreeds(breedsInfo.message));

function displayBreeds(breeds){
    const dogBreeds = document.querySelector('#dog-breeds')
     for (let breed in breeds){
        let li = document.createElement('li')
        li.innerHTML = breed
        li.style.cursor = 'pointer'
        dogBreeds.appendChild(li)
        li.addEventListener('click', updateColor)
}}

function updateColor(e) {
    e.target.style.color = 'pink'
}

    


function selectedLeter(){
    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', function(e){
        selectBreedsStartingWith(e.target.value)
    })
    }

    

    