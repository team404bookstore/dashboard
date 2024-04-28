function displayaddform() {
    const addbookbtn = document.getElementById("addbtn");
    const cancelbtn = document.getElementById("cancelbtn");
    const displaybtn = document.getElementById("displaybtn");
    const addbookform = document.getElementById("add_book_div");


    // Event listener for display button
    displaybtn.addEventListener("click", () => {
        addbookform.style.display = "flex";
        document.getElementById("body").style.display = "none";
    });
    // Event listener for cancel button
    cancelbtn.addEventListener("click", () => {
        addbookform.style.display = "none";
        document.getElementById("body").style.display = "block";
    });
    // Event listener for add book button
    addbookbtn.addEventListener("click", () => {
        addbookform.style.display = "none";
        document.getElementById("body").style.display = "block";
    });
}



function displayeditform() {
    const saveeditbtn = document.getElementById("savebtn");
    const canceleditbtn = document.getElementById("canceleditbtn");
    const displayeditbtn = document.getElementById("displayeditbtn");
    const editbookform = document.getElementById("edit_book_div");

    // Event listener for display button
    displayeditbtn.addEventListener("click", () => {
        editbookform.style.display = "flex";
        document.getElementById("body").style.display = "none";
    });
    // Event listener for cancel button
    canceleditbtn.addEventListener("click", () => {
        editbookform.style.display = "none";
        document.getElementById("body").style.display = "block";
    });
    // Event listener for add book button
    saveeditbtn.addEventListener("click", () => {
        editbookform.style.display = "none";
        document.getElementById("body").style.display = "block";
    });
}


function deletebook() {
    const deleteicon = document.getElementById("delete");

    deleteicon.addEventListener("click", () => {
        deleteicon.parentElement.parentElement.remove(); 
    });

}