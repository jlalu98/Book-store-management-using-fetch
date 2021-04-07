// javascript for index.html
const container=document.querySelector('.blogs');
const searchBar=document.querySelector('.search-area');
const renderBooks=async (term)=>{
    let  uri='http://localhost:3000/books?_sort=price';
    if(term){
        uri+=`&q=${term}`;
    }
    const response= await fetch(uri);
    const books= await response.json();
    console.log(books);
    let template='';
    books.forEach(book => {
        template+=`
        <a style="text-decoration:none" href="/details.html?id=${book.id}">
        <div class="book-card" id='${book.id}'>
        <br>
        <img src="${book.cover}" alt="${book.title}" style="width:50%">
        <h3>${book.title}</h3>
        <p style="text-align: center">Rating:${book.rating}</p>
        <p class="price" style="color:black"><strong>₹${book.price}</strong></p>
        </div>
        </a>
        `
    });
    container.innerHTML=template;
     
}
searchBar.addEventListener('submit',(e)=>{
    e.preventDefault();
    renderBooks(searchBar.search.value.trim());
})
window.addEventListener('DOMContentLoaded',()=>renderBooks());



