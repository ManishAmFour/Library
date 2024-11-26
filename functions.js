let Book = [{BookName: `The Hobbit`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             Status : `Read`,
}]


AdditionToArray();

function AdditionToArray(){

document.querySelector(`.add-button-books`).addEventListener(`click`,()=>{
            

            let FillForm = document.querySelector(`.fill-form`);

            FillForm.classList.add(`display-list`);

               
              
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

       
         document.querySelector(`.input-BookName`).value = ``;
         document.querySelector(`.input-Author`).value = ``;

        document.querySelector(`.input-Pages`).value = ``;

         document.querySelector(`.fill-form`).classList.remove(`display-list`);
         RenderTheBooks();


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

       
         document.querySelector(`.input-BookName`).value = ``;
         document.querySelector(`.input-Author`).value = ``;

        document.querySelector(`.input-Pages`).value = ``;

         document.querySelector(`.fill-form`).classList.remove(`display-list`);
         RenderTheBooks();






        }



     })

        
    }
        
        
        


RenderTheBooks();


function RenderTheBooks(){


let TheHtml;
let Index;

Book.forEach((IndBook,index)=>{


TheHtml = `<div class="Book-formed Book-Details-${index}">

<div class="Book-Name-${index}" > Book Name: ${IndBook.BookName} </div>
<div class="Author-Name-${index}" > Book Author: ${IndBook.Author} </div>
<div class="Page-Number-${index}" > Book page: ${IndBook.Pages} </div>
<div class="Book-formed-${index}">Reading Status: ${IndBook.Status}</div>
<button data-delete-no="${index}" class="DeleteButton" > Delete Button </button>
<button data-status-no="${index}"  class="status-change" >Change Status</button>
<button data-edit-no="${index}" class="edit-change" > Edit </button>
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

  
document.querySelectorAll(`.edit-change`).forEach((editButton,index)=>{


   editButton.addEventListener(`click`,()=>{

    if(editButton.innerText === `Edit`){  

    document.querySelector(`.Book-Name-${index}`).innerHTML = `Book Name: <input class="edited-name">`
    document.querySelector(`.Author-Name-${index}`).innerHTML = `Book Author: <input class="edited-author">`
    document.querySelector(`.Page-Number-${index}`).innerHTML = ` Book page: <input class="edited-pages">`

        editButton.innerText = `Save`

    }else{

        if(document.querySelector(`.edited-name`).value !== `` && document.querySelector(`.edited-author`).value !== `` &&
    
        document.querySelector(`.edited-pages`).value !== ``
    
    ){


        document.querySelector(`.Book-Name-${index}`).innerHTML =`Book Name: ${document.querySelector(`.edited-name`).value}`
        document.querySelector(`.Author-Name-${index}`).innerHTML = `Book Author: ${document.querySelector(`.edited-author`).value}`
        document.querySelector(`.Page-Number-${index}`).innerHTML = `Book page: ${document.querySelector(`.edited-pages`).value}`
    



        editButton.innerText = `Edit`





        }else{

            alert(`please fill in the entries`)


        }



        

        


    }
 



   })
    

})

  


}








    
      
       
        
    
    








