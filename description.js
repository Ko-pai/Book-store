const dat = JSON.parse(localStorage.getItem('new'))

const abc = document.querySelector(".container")
const description = document.querySelector(".description")
const bookImage = document.querySelector(".book-img")
const tilteText = document.querySelector(".title")
const author = document.querySelector(".author")


let itemArray = []
async function fetchD (){

    const response = await fetch('./Bookdata.json')
    const data = await response.json()

   
    
    for(let i = 0 ; i < data.length ; i++){
        itemArray.push(data[i])
        dat.map((d)=>{
            if(d == i){
                bookImage.src = data[i].bigImg
                tilteText.textContent = data[i].title
                description.textContent = data[i].description
                author.textContent = data[i].author
            }
            
        })
    }

    console.log(itemArray);
    

}

fetchD()

const humburger = document.querySelector(".hamburger")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const afterClickContainer = document.querySelector(".afterClickContainer")


humburger.addEventListener('click' ,()=>{
    if(humburger.classList.contains("active")){
      afterClickContainer.style.transform = 'translateX(150%) scale(0)'
      one.style.transform = 'translateY(0) rotate(0)'
      
      two.style.opacity = '1'
      
      three.style.transform = 'translateY(0) rotate(0)'
      humburger.classList.remove('active')
      humburger.style.zIndex = 1
    }else{
      afterClickContainer.style.transform = 'translateX(0%) scale(1)'
      humburger.classList.add('active')
      one.style.transform = 'translateY(12px) rotate(45deg)'
      
      two.style.opacity = '0'
      humburger.style.zIndex = 2
      three.style.transform = 'translateY(-10px) rotate(-45deg)'
    }
})


const homeLink = document.querySelector(".home1")

homeLink.addEventListener("click",()=>{
    window.location.href = './index.html'
})

