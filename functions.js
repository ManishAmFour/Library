let Book = [{BookName: `The Hobbit`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             ReadingStatus : `You've read it!`,
}]



function GenerateThePage(){

    let HTML = ``;

    let indexNo;

Book.forEach((IndBook,index)=>{

    indexNo = index

    HTML = `<div class="HTML-${index}"  data-index-name = "${indexNo}">
    ${IndBook.BookName}
    ${IndBook.Author}
    ${IndBook.ReadingStatus}
    ${indexNo}

    </div>`}

)

document.querySelectorAll(`.add-button-books`).forEach((fillIn)=>{

    fillIn.innerHTML = `<div class="books">${HTML}</div>`    

})

document.querySelector(`.book-section`).innerHTML += `<button class="books add-button-books">Add New Book</button>`;

document.querySelectorAll(`.add-button-books`).forEach((ButtonInput)=>{

ButtonInput.addEventListener(`click`,()=>{


    if(ButtonInput.innerText === `Add New Book`){

    
        ButtonInput.innerHTML = `BookName:- <input class="input-bar input-BookName">
        Author:- <input class="input-bar input-Author">
        Pages :- <input class="input-bar input-Pages">
        
        `;
        document.querySelectorAll(`.input-bar`).forEach((input)=>{
    
            input.focus();



            input.addEventListener(`keydown`,(event)=>{
    
                if(event.key === `Enter`){



                
                    Book.push({
                        BookName: document.querySelector(`.input-BookName`).value,
                        Author:  document.querySelector(`.input-Author`).value,
                        Pages: document.querySelector(`.input-Pages`).value, 
                    })
        
                    GenerateThePage();
                    ButtonInput.innerText = `Add New Book`;
                    //document.querySelector(``)

        
                }
        
        
            })
        
        })
    

    
    
    }
    
    
    
    
    
    
    })
    




})



}



GenerateThePage();





    
      
       
        
    
    








