const students = [
    {
    name: 'Martin',
    lastName: 'Lant',
    marks: [9, 8, null, 7, 5],
    },
    {
    name: 'Francesco',
    lastName: 'Portus',
    marks: [5, 4, 2, 3, 2],
    },
    {
    name: 'Bill',
    lastName: 'Merdoc',
    marks: [10, null, null, null, 10],
    },
    {
    name: 'John',
    lastName: 'Entman',
    marks: [9, 8, 9, 7, 5],
    },
    ];

    // Disabling all backgroun grays except provided id
function disableAll(indexExcept){
    for(let i=0;i<students.length;i++){
        if(i===indexExcept) continue
        document.getElementById(i).classList.remove("grayBackground")
    }
}

// Document onload listener
window.addEventListener('load',()=>{

    // For each studentinfo
    students.forEach((studentInfo,index)=>{

        // Initializing elements
        let cardElement=document.createElement('div')
        let nameElement=document.createElement('div')
        let lastnameElement=document.createElement('div')
        let quantityElement=document.createElement('div')
        let avgMark=document.createElement('div')

        // Adding classes and id
        cardElement.className="card"
        cardElement.id=index
        
        // Calculating quantity of visited lectures
        const quantityValue=studentInfo.marks.filter(mark=> mark!==null).length

        // Calculating average for marks
        const avgMarkValue=studentInfo.marks.reduce((acc, curr)=>{
            if(curr===null)return acc
            return acc+curr
        })/studentInfo.marks.length

        // Condition to change border color
        if(avgMarkValue>5){
            cardElement.classList.add("greenBorder")
        }else{
            cardElement.classList.add("redBorder")
        }

        // Adding content to elements
        nameElement.innerHTML=studentInfo.name
        lastnameElement.innerText=studentInfo.lastName
        quantityElement.innerHTML=`Num: ${quantityValue}`
        avgMark.innerText=`AVG: ${avgMarkValue}`

        // Appending element to cardcontainer
        cardElement.appendChild(nameElement)
        cardElement.appendChild(lastnameElement)
        cardElement.appendChild(quantityElement)
        cardElement.appendChild(avgMark)

        // ClickeHandler grabackground
        cardElement.addEventListener('click',()=>{
            disableAll(index)
            cardElement.classList.toggle("grayBackground")

            
        })

        // Appending card to container
        document.getElementById("cardContainer").appendChild(cardElement)
    })
})