
const URL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
let dataArray = [];
let localData = [];
let favIconId = [];
const favouriteLink = document.querySelector('#favourite')
const mobileFavouriteLink = document.querySelector('.favourite1')
const form = document.querySelector("form");
const bookContainer = document.querySelector(".book-card-container");



async function fetchData() {
  const response = await fetch('./Bookdata.json')
  const data = await response.json()

  
  console.log(data);
  

  form.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("good");
  });

  for (let i = 0; i < data.length; i++) {
    let image = data[i].bigImg;
    let title = data[i].title;
    let categories = data[i].categories;

    

    const card = document.createElement("div");
    card.id = i;
    card.classList = "good";
    card.innerHTML = `
    <i class="fa-solid fa-heart" id =${i}></i>
    <img class="bookImage" src=${image} alt="" srcset="">
    <h3>${title}</h3>
    <p>${categories}</p>
    <button class="card-button" id=${i}>Look</button>`;

    bookContainer.appendChild(card);

    // console.log(item[i].volumeInfo);
  }
  const cardButton = document.querySelectorAll(".card-button");
  const selectCard = document.querySelectorAll(".good");

  let count = 0;

  cardButton.forEach((d) => {
    d.addEventListener("click", (e) => {
      console.log(e);
      dataArray.push(d.id);

      selectCard.forEach((f) => {
        const filt = dataArray.filter(function (value) {
          return value === f.id;
        });

        if (e.target.id === f.id) {
          console.log(dataArray);
          console.log(filt);
          localStorage.setItem("new", JSON.stringify(filt));
          // window.location.href = `./descriptions/bookDescription.html`
        }
      });
    });
  });

  const favIcon = document.querySelectorAll(".fa-heart");

  favIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const localD = JSON.parse(localStorage.getItem("favourite"));

      if (!e.target.classList.contains("heart-active")) {
        if (favIconId.length < data.length) {
          favIconId.push(e.target.id);

          localStorage.setItem("favourite", JSON.stringify(favIconId));
        }
        e.target.classList.add("heart-active");
      } else {
        e.target.classList.remove("heart-active");
        let ab = localD.filter(function result(value) {
          return value !== e.target.id;
        });
        favIconId = ab;
        localStorage.setItem("favourite", JSON.stringify(favIconId));
      }
    });
    
    
      let takeLocalData = JSON.parse(localStorage.getItem("favourite"));
      if(!takeLocalData){
        takeLocalData = []
        localStorage.setItem('favourite' , JSON.stringify(takeLocalData))
      }else{
        takeLocalData.forEach((d) =>{
          if(d == icon.id){
            icon.classList.add('heart-active')
          }
        })
      }

    
  });
}

fetchData();



favouriteLink.addEventListener('click',() =>{
  let localData = JSON.parse(localStorage.getItem('favourite'))
  const card = document.querySelectorAll('.good')
  let newDiv = document.createElement('div')
  card.forEach(ele =>{
     localData.forEach(element => {
       if(element == ele.id) {
          bookContainer.style.display = "flex"
          
          bookContainer.innerHTML =''
          newDiv.appendChild(ele)
          newDiv.classList ='nice'
          bookContainer.append(newDiv)
       }
      
     });
    
  })
})



//mobileFavouriteLink.addEventListener('click',favourite())

function favourite (){
  
}

// For humburger clicking

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


mobileFavouriteLink.addEventListener('click' ,()=>{
  let localData = JSON.parse(localStorage.getItem('favourite'))
  const card = document.querySelectorAll('.good')
  let newDiv = document.createElement('div')
  card.forEach(ele =>{
     localData.forEach(element => {
       if(element == ele.id) {
          bookContainer.style.display = "flex"
          
          bookContainer.innerHTML =''
          newDiv.appendChild(ele)
          newDiv.classList ='nice'
          bookContainer.append(newDiv)
       }
      
     });
    
  })
      afterClickContainer.style.transform = 'translateX(150%) scale(0)'
      one.style.transform = 'translateY(0) rotate(0)'
      
      two.style.opacity = '1'
      
      three.style.transform = 'translateY(0) rotate(0)'
      humburger.classList.remove('active')
      humburger.style.zIndex = 1
})