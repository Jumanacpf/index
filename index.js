const input = document.getElementById("text-box")
btn.addEventListener("click",function(e){
    let text = input.value 
        if(text===""){
            alert("EMPTY!!!")
        }else{
        const newtask=document.createElement("p")
        newtask.classList.add("task")

        newtask.addEventListener('dblclick', () =>{
            newtask.classList.add('line-through')
            
         })
        let addvalue = document.createElement("span")
            addvalue.innerHTML = text
            newtask.appendChild(addvalue)
        
        let toEdit =document.createElement("button")
            toEdit.classList.add("editt")
            toEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
            newtask.appendChild(toEdit)

        let toDelete =document.createElement("button")
            toDelete.classList.add("editt")
            toDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
            newtask.appendChild(toDelete)


            toEdit.addEventListener("click",()=>{
                    let val=prompt("Edit please")
                    console.log(val)
                    addvalue.innerHTML=val
                })

                toDelete.addEventListener("click",()=>{
                    newtask.remove()
                })


       tasks.appendChild(newtask)
    }
    input.value=""  
})