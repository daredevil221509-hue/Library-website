let books = [
    {title:"Harry Potter", author:"J.K. Rowling"},
    {title:"Atomic Habits", author:"James Clear"},
    {title:"Rich Dad Poor Dad", author:"Robert Kiyosaki"}
];

function loadBooks(){
    let container = document.getElementById("books");
    container.innerHTML = "";

    books.forEach(b=>{
        container.innerHTML += `
        <div class="book">
            <h3>${b.title}</h3>
            <p>${b.author}</p>
            <button onclick="alert('Borrowed!')">Borrow</button>
        </div>
        `;
    });
}

loadBooks();

// Search
document.getElementById("search").addEventListener("keyup", function(){
    let val = this.value.toLowerCase();
    let cards = document.querySelectorAll(".book");

    cards.forEach(c=>{
        c.style.display = c.innerText.toLowerCase().includes(val) ? "block":"none";
    });
});