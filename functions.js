let Book = [{BookName: `The Hobbit`,
             Author: `J.R.R Tolkien`,   
             Pages: `295 pages`,       
             ReadingStatus : `You've read it!`       
}]


let HTML = ``;


GenerateThePage();

function GenerateThePage(){

Book.forEach((IndBook)=>{

    HTML += `<div>
    ${IndBook.BookName}
    ${IndBook.Author}
    ${IndBook.ReadingStatus}
    </div>`


})

document.querySelector(`.book-section`).innerHTML = `<div>${HTML}</div> <button class="books add-button-books">Add New Book</button>`;

document.querySelector(`.add-button-books`).addEventListener(`click`,()=>{

    if(document.querySelector(`.add-button-books`).innerText === `Add New Book`){
    
        document.querySelector(`.add-button-books`).innerHTML = `BookName:- <input class="input-bar input-BookName">
        Author:- <input class="input-bar input-Author">
        Pages :- <input class="input-bar input-Pages">
        
        `;
        document.querySelector(`.input-bar`).focus();
        document.querySelectorAll(`.input-bar`).forEach((input)=>{
    
            input.addEventListener(`keydown`,(event)=>{
    
                if(event.key === `Enter`){
        
                    Book.push({
                        BookName: document.querySelector(`.input-BookName`).value,
                        Author:  document.querySelector(`.input-Author`).value,
                        Pages: document.querySelector(`.input-Pages`).value
        
                    })
        
                    console.log(Book)
                    GenerateThePage();
                
        
                }
        
        
            })
        
        })}})



}







    
      
       
        
    
    








