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
window.addEventListener('load',()=>{

    students.forEach(studentInfo=>{
        let cardElement=document.createElement('div')
        cardElement.className="card"

        let nameElement=document.createElement('div')
        let lastnameElement=document.createElement('div')
        let quantityElement=document.createElement('div')
        let avgMark=document.createElement('div')
        
        const quantityValue=studentInfo.marks.reduce((acc=0, curr)=>{
            if(curr===null)return acc
            return acc+1
        })

        const avgMarkValue=studentInfo.marks.reduce((acc, curr)=>{
            if(curr===null)return acc
            return acc+curr
        })/studentInfo.marks.length

        if(avgMarkValue>5){
            cardElement.classList.add("greenBorder")
        }else{
            cardElement.classList.add("redBorder")
        }

        nameElement.innerHTML=studentInfo.name
        lastnameElement.innerText=studentInfo.lastName
        
        quantityElement.innerHTML=`Num: ${quantityValue}`
        

        avgMark.innerText=`AVG: ${avgMarkValue}`

        cardElement.appendChild(nameElement)
        cardElement.appendChild(lastnameElement)
        cardElement.appendChild(quantityElement)
        cardElement.appendChild(avgMark)

        cardElement.addEventListener('click',()=>{
            cardElement.classList.toggle("grayBackground")
        })

        document.getElementById("cardContainer").appendChild(cardElement)
    })
})