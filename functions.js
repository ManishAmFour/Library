let Book = [{BookName: `The Hobbit`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             ReadingStatus : `Read`,
}]

AddingTheListener();

function AddingTheListener(){

document.querySelector(`.add-button-books`).addEventListener(`click`,()=>{
            
        if(document.querySelector(`.add-button-books`).innerText === `Add New Book`){
    
            let FillForm = document.querySelector(`.fill-form`);

            FillForm.classList.add(`display-list`)

        
            document.querySelectorAll(`.input-bar`).forEach((input)=>{
        
                input.focus();

               


                })

                //document.querySelector(`.input-BookName`)


                document.querySelector(`.Enter-Button`).addEventListener(`click`,()=>{




                    //let RadioSelectorValue 

                    /*document.querySelectorAll(`input[type=radio]:checked`).forEach((selected)=>{

                       RadioSelectorValue = (selected.value)



                    })*/

                       Book.push({
                        BookName: document.querySelector(`.input-BookName`).value,
                        Author:  document.querySelector(`.input-Author`).value,
                        Pages: document.querySelector(`.input-Pages`).value, 
                        //Status: RadioSelectorValue
                    })
                  
            
        
                    //document.querySelector(`.add-button-books`).innerText = `Add New Book`;
                    FillForm.classList.remove(`display-list`)

                    RenderTheBooks();



                })

            




                /*input.addEventListener(`keydown`,(event)=>{
        
                    if(event.key === `Enter`){

                        
                        let RadioSelectorValue 

                        document.querySelectorAll(`input[type=radio]:checked`).forEach((selected)=>{

                           RadioSelectorValue = (selected.value)



                        })

                      
                     
                        Book.push({
                            BookName: document.querySelector(`.input-BookName`).value,
                            Author:  document.querySelector(`.input-Author`).value,
                            Pages: document.querySelector(`.input-Pages`).value, 
                            Status: RadioSelectorValue
                        })
            
                        document.querySelector(`.add-button-books`).innerText = `Add New Book`;
                        RenderTheBooks();
    
            
                    }
            
            
                })*/
            
    }    })
        
        
        
        
        }
        
        


RenderTheBooks();

function RenderTheBooks(){


let TheHtml;
let Index;

Book.forEach((IndBook,index)=>{


TheHtml = `<div class="Book-formed ">

<div> Book Name: ${IndBook.BookName} </div>
<div> Book Author: ${IndBook.Author} </div>
<div> Book page: ${IndBook.Pages} </div>
<div class="Book-formed-${index}">Reading Status: ${IndBook.Status} </div>
<button data-delete-no="${index}" class="DeleteButton" > Delete Button </button>
<button data-status-no="${index}"  class="status-change" >Change Status</button>
</div>`

Index = index
 
})   

  document.querySelector (`.book-section`).innerHTML += `<div class="books" data-index-no="${Index}" >${TheHtml}</div>`

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

  document.querySelectorAll(`.status-change`).forEach((button)=>{

    button.addEventListener(`click`,()=>{

        if(document.querySelector(`.Book-formed-${button.dataset.statusNo}`).innerText === `Reading Status: Read`){


            document.querySelector(`.Book-formed-${button.dataset.statusNo}`).innerText = `Reading Status: Not Readed`


        }else{

document.querySelector(`.Book-formed-${button.dataset.statusNo}`).innerText = `Reading Status: Read`

        }


    })


  })



}








    
      
       
        
    
    








