let Book =  [{BookName: `The Hobbit`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             Status : `Not Readed`,
}]


AdditionToArray();

function AdditionToArray(){

document.querySelector(`.add-button-books`).addEventListener(`click`,()=>{
            

            let FillForm = document.querySelector(`.fill-form`);
            FillForm.classList.add(`display-list`);
            document.querySelector(`.Close-Button`).classList.add(`Close-Button-after`)
            document.querySelector(`.book-section`).classList.add(`book-section-change`)


            document.querySelector(`.Close-Button`).addEventListener(`click`,()=>{

                document.querySelector(`.fill-form`).classList.remove(`display-list`);
        
                document.querySelector(`.Close-Button`).classList.remove(`Close-Button-after`);
                document.querySelector(`.book-section`).classList.remove(`book-section-change`)

                
        
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

         localStorage.setItem(`Book`, JSON.stringify(Book))

         if(document.querySelector(`.input-BookName`).value !== `` && document.querySelector(`.input-BookName`).value !== `` && document.querySelector(`.input-Author`).value !== ``&&
         document.querySelector(`.input-Pages`).value !== `` && TheValue !== undefined
 
        ){
 
            
            document.querySelector(`.fill-form`).classList.remove(`display-list`);
            document.querySelector(`.Close-Button`).classList.remove(`Close-Button-after`);
            document.querySelector(`.book-section`).classList.remove(`book-section-change`)

            RenderTheBooks();
            document.querySelector(`.input-BookName`).value = `` 
            
            document.querySelector(`.input-BookName`).value = `` 
            
            document.querySelector(`.input-Author`).value = ``

         document.querySelector(`.input-Pages`).value = ``
 
 
        }else{
 
            alert(`The fields are empty`)
 
        }

       
        

      


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

         localStorage.setItem(`Book`, JSON.stringify(Book))

       
        

        if(document.querySelector(`.input-BookName`).value !== ``  && document.querySelector(`.input-Author`).value !== ``&&
        document.querySelector(`.input-Pages`).value !== `` && TheValue !== undefined

       ){


           document.querySelector(`.fill-form`).classList.remove(`display-list`);
           document.querySelector(`.Close-Button`).classList.remove(`Close-Button-after`);
           document.querySelector(`.book-section`).classList.remove(`book-section-change`)

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
<div class="Book-formed-${index} Absolute-Reading-Name"><div class="Book-Reading-Pre">Reading status:</div><div class="Book-Reading">${IndBook.Status}</div></div>
<button data-delete-no="${index}" class="DeleteButton" > <img style="height: 30px;"  src="remove.jpg"> </button>
<button data-status-no="${index}"  class="status-change" ><img style="height: 30px;" src="reuse.png"></button>
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

        if(document.querySelector(`.Book-formed-${button.dataset.statusNo}`).innerText === `Reading status: Read`){


            document.querySelector(`.Book-formed-${button.dataset.statusNo}`).innerText = `Reading status: Not Readed`


        }else{

document.querySelector(`.Book-formed-${button.dataset.statusNo}`).innerText = `Reading status: Read`

        }


    })


  })

  

  


}








    
      
       
        
    
    








