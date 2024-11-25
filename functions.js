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
            <button class="Enter-Button">Enter</button>
            <input type="radio" name="options" class="InputSelectors" value="Read"><div>Read</div>
            <input type="radio" name="options" class="InputSelectors" value="Not Readed"><div>Not Readed</div>
            `;
            document.querySelectorAll(`.input-bar`).forEach((input)=>{
        
                input.focus();

                document.querySelectorAll(`.Enter-Button`).forEach((EnterButton)=>{

                    EnterButton.addEventListener(`click`,()=>{

                        document.querySelectorAll(`.InputSelectors`).forEach((Selector)=>{

                            console.log(Selector.checked.value)



                        })


                     
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
let Index;

Book.forEach((IndBook,index)=>{


TheHtml = `<div class="Book-formed">

<div> Book Name: ${IndBook.BookName} </div>
<div> Book Author: ${IndBook.Author} </div>
<div> Book page: ${IndBook.Pages} </div>
<div>Reading Status: </div>
<button data-delete-no="${index}" class="DeleteButton" > Delete Button </button>
</div>`

Index = index
 
})   

  document.querySelector (`.book-section`).innerHTML += `<div class="books" data-index-no="${Index}" >${TheHtml}</div>`
  AddingTheListener();

  document.querySelectorAll(`.DeleteButton`).forEach((DeleteButton)=>{


    DeleteButton.addEventListener(`click`,()=>{

        Index = DeleteButton.dataset.deleteNo


        document.querySelectorAll(`.books`).forEach((book)=>{

            if(book.dataset.indexNo === Index ){
            
                book.remove();
                
             }


        })






    Book.splice(Index,1)

 

    console.log(Book)

    })



  })



}








    
      
       
        
    
    








