 
let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
  let count =0 
console.log(countEl)
  function increment() {
   
    count +=1
    countEl.textContent = count 
    
} 
function save ()
{
  
    let countstr = count + "-"
     saveEl.textContent += countstr //text content give proper space in text 
     console.log(count)
     countEl.textContent = 0

    
} 


