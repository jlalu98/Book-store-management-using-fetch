const id= new URLSearchParams(window.location.search).get('id');
let container=document.querySelector('.details');
let delBtn=document.querySelector('#del-button');
console.log(delBtn);
const renderDetails=async()=>{
    const response=await fetch('http://localhost:3000/books/'+id);
    const book= await response.json();
    console.log(book);
    let template=`
    <div class="card">
    <img src="${book.cover}" alt="${book.title}" style="width:20%">
    <p><strong>Author:${book.author}</strong></p> 
    <p><strong>Rating:${book.rating}</strong></p>
    <p><strong>Series:${book.series}</strong></p>
    <p><strong>Genre :${book.tags}</strong><p>
    <p><strong>Price :₹${book.price}</strong></p>
    <h1>${book.title}</h1>
    <br>
    <p style="text-align:justify"><strong>${book.description}</strong></p>
    </div>
    `
    container.innerHTML=template;
};
delBtn.addEventListener('click',async (e)=>{

    const res=await fetch('http://localhost:3000/books/'+id,{
        method:'DELETE'
    });
    window.location.replace('/index.html');
});
window.addEventListener('DOMContentLoaded',()=>renderDetails());