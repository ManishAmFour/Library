let Book = [{BookName: `The Hobbi`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             Status : `Read`,
}]


AdditionToArray();

function AdditionToArray(){

document.querySelector(`.add-button-books`).addEventListener(`click`,()=>{
            

            let FillForm = document.querySelector(`.fill-form`);
            let TheCloseButton = document.querySelector(`.close-change`)
            FillForm.classList.add(`display-list`);
            TheCloseButton.classList.add(`close-change-changes`)

            document.querySelector(`.close-change-changes`).addEventListener(`click`,()=>{

                document.querySelector(`.fill-form`).classList.remove(`display-list`);
        
                document.querySelector(`.close-change`).classList.remove(`close-change-changes`);
                
        
             })


              
        })
        
        document.querySelector(`.Enter-Button`).addEventListener(`click`,()=>{

            let TheValue;


            let TheInputSelectors = document.querySelectorAll(`input[type='radio']:checked`);
            TheInputSelectors.forEach((Input)=>{

                TheValue = (Input.value)


            })

        
            Book.push({
             BookName: document.querySelector(`.input-BookName`).value,
             Author:  document.querySelector(`.input-Author`).value,
             Pages: document.querySelector(`.input-Pages`).value, 
             Status: TheValue
         })

         if(document.querySelector(`.input-BookName`).value !== `` && document.querySelector(`.input-BookName`).value !== `` && document.querySelector(`.input-Author`).value !== ``&&
         document.querySelector(`.input-Pages`).value !== ``
 
        ){
 
 
            document.querySelector(`.fill-form`).classList.remove(`display-list`);
            document.querySelector(`.close-change`).classList.remove(`close-change-changes`);

            RenderTheBooks();
            document.querySelector(`.input-BookName`).value = `` 
            
            document.querySelector(`.input-BookName`).value = `` 
            
            document.querySelector(`.input-Author`).value = ``

         document.querySelector(`.input-Pages`).value = ``
 
 
        }else{
 
            alert(`The fields are empty`)
 
        }

       
        /*document.querySelector(`.input-BookName`).value !== `` 
            
        document.querySelector(`.input-BookName`).value !== `` 
        
        document.querySelector(`.input-Author`).value !== ``

     document.querySelector(`.input-Pages`).value !== ``*/

      


     })

     window.addEventListener(`keydown`,(event)=>{

        if(event.key === 'Enter'){

            let TheValue;


            let TheInputSelectors = document.querySelectorAll(`input[type='radio']:checked`);
            TheInputSelectors.forEach((Input)=>{

                TheValue = (Input.value)


            })

        
            Book.push({
             BookName: document.querySelector(`.input-BookName`).value,
             Author:  document.querySelector(`.input-Author`).value,
             Pages: document.querySelector(`.input-Pages`).value, 
             Status: TheValue
         })

       
        

        if(document.querySelector(`.input-BookName`).value !== ``  && document.querySelector(`.input-Author`).value !== ``&&
        document.querySelector(`.input-Pages`).value !== ``

       ){


           document.querySelector(`.fill-form`).classList.remove(`display-list`);
           document.querySelector(`.close-change`).classList.remove(`close-change-changes`);

           RenderTheBooks();
           document.querySelector(`.input-BookName`).value = ``;
           document.querySelector(`.input-Author`).value = ``;
  
          document.querySelector(`.input-Pages`).value = ``;


       }else{

           alert(`The fields are empty`)

       }





        }



     })

     /**/


        
    }
        
        
        


RenderTheBooks();


function RenderTheBooks(){


let TheHtml;
let Index;

Book.forEach((IndBook,index)=>{


TheHtml = `<div class="Book-formed Book-Details-${index}">

<div class="Book-Name-${index} Book-Name-full" ><div class="Book-Name-Pre"> Book Name:</div> <div class="Book-Name">${IndBook.BookName}</div></div>
<div class="Author-Name-${index} Absolute-Author-Name" > <div class="Book-Author-Pre"> Book Author:</div><div class="Book-Author">${IndBook.Author}</div></div>
<div class="Page-Number-${index} Absolute-Page-Number" ><div class="Book-Page-Pre">  Book page:</div><div class="Book-Page">${IndBook.Pages}</div></div>
<div class="Book-formed-${index} Absolute-Reading-Name"><div class="Book-Reading-Pre"> Reading status:</div><div class="Book-Reading">${IndBook.Status}</div></div>
<button data-delete-no="${index}" class="DeleteButton" > Delete Button </button>
<button data-status-no="${index}"  class="status-change" >Change Status</button>
<button class= "close-change" > Close Button </button>
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








    
      
       
        
    
    








