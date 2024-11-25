let Book = [{BookName: `The Hobbit`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             ReadingStatus : `You've read it!`,
}]

AddingTheListener();



function AddingTheListener(){

document.querySelectorAll(`.add-button-books`).forEach((ButtonInput)=>{

    ButtonInput.addEventListener(`click`,()=>{
            
        if(ButtonInput.innerText === `Add New Book`){
    
            ButtonInput.innerHTML = `BookName:- <input class="input-bar input-BookName">
            Author:- <input class="input-bar input-Author">
            Pages :- <input class="input-bar input-Pages">
            <button class="Enter-Button">Enter</button>`;
            document.querySelectorAll(`.input-bar`).forEach((input)=>{
        
                input.focus();

                document.querySelectorAll(`.Enter-Button`).forEach((EnterButton)=>{

                    EnterButton.addEventListener(`click`,()=>{


                     
                        Book.push({
                            BookName: document.querySelector(`.input-BookName`).value,
                            Author:  document.querySelector(`.input-Author`).value,
                            Pages: document.querySelector(`.input-Pages`).value, 
                        })
            
                        ButtonInput.innerText = `Add New Book`;
                        RenderTheBooks();
    


                    })


                })

                input.addEventListener(`keydown`,(event)=>{
        
                    if(event.key === `Enter`){
    
    
    
                     
                        Book.push({
                            BookName: document.querySelector(`.input-BookName`).value,
                            Author:  document.querySelector(`.input-Author`).value,
                            Pages: document.querySelector(`.input-Pages`).value, 
                        })
            

                        ButtonInput.innerText = `Add New Book`;
                        RenderTheBooks();
    
            
                    }
            
            
                })
            
            })
        
       
        
        
        }
        
        })
        
    })
}


RenderTheBooks();

function RenderTheBooks(){


let TheHtml;

Book.forEach((IndBook,index)=>{


TheHtml = `<div class="Book-formed">

<div> Book Name: ${IndBook.BookName} </div>
<div> Book Author: ${IndBook.Author} </div>
<div> Book page: ${IndBook.Pages} </div>
<button data-delete-no="${index}" class="DeleteButton" > Delete Button </button>
</div>`
 
})   

  document.querySelector (`.book-section`).innerHTML += `<div class="books ">${TheHtml}</div>`
  AddingTheListener();

  document.querySelectorAll(`.DeleteButton`).forEach((DeleteButton)=>{

    DeleteButton.addEventListener(`click`,()=>{

        Index = DeleteButton.dataset.deleteNo



    Book.splice(Index,1)
    console.log(Book)

    })



  })



}








    
      
       
        
    
    








