const dat = JSON.parse(localStorage.getItem('new'))

const abc = document.querySelector(".container")
const a = document.querySelector("main")
const b = document.querySelector(".b")
const c = document.querySelector(".c")

const url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

let itemArray = []
async function fetchD (){

    const response = await fetch(url)
    const data = await response.json()

    const item = data.items
    
    for(let i = 0 ; i < item.length ; i++){
        itemArray.push(item[i])
        dat.map((d)=>{
            if(d == i){
                
            }
            
        })
    }

    console.log(itemArray);
    

}

fetchD()