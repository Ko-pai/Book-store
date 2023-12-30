const dat = JSON.parse(localStorage.getItem('new'))

const abc = document.querySelector(".container")
const description = document.querySelector(".description")
const bookImage = document.querySelector(".book-img")
const tilteText = document.querySelector(".title")



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
            }
            
        })
    }

    console.log(itemArray);
    

}

fetchD()