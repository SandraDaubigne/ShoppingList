/* Hämtar ifrån ID itemAdd
Hämtar ifrån class additem
Hämtar ifrån UL */
let input = document.querySelector('#itemAdd');
let addButton = document.querySelector('.additem');
let ul = document.querySelector('ul');

// Ändrar färg på input fältet
document.querySelector('input').style.color = "#C71585";

/* skapar varabel som blir li lista
lägger till ett barn och skapar skapar en textsträng som tar emot värde.
När en text sträng matas in skapas en underlista 
När man klickar på elementet så töms textsträngen */
addInputItem = e => {
    let newListItem = document.createElement('li');
    newListItem.appendChild(document.createTextNode(input.value));
    ul.appendChild(newListItem);
    newListItem.addEventListener("click", itemDone);
    document.querySelector('input').value = '';
    // document.querySelector('input').style.color="pink";
};


/* Funktionen hanterar delete 
Vid omkoppling(ändring) lägg css klassen done
skapar en delete knapp
lägger till ett barn som innehåller en textsträng på knappen
OM deleteknappen har ett värde
ta bort barnet till delete-knappen som är en textsträng.
ANNARS fortsätt lyssna efer klick och isåfall radera föräldern(textsträng).
*/
itemDone = e => { // Inga paranteser behövs om det är 1 parameter.
    e.target.classList.toggle('done', true); // ClassList används för att adda, ta bort och TOGGLE(ändra) i CSS classer.
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.style.color = "black";
    deleteButton.style.backgroundColor = "white";
    deleteButton.style.border= "solid";
    deleteButton.style.borderRadius= "10%";
    if (e.target.firstElementChild !== null) {
        but = e.target.firstElementChild;
        e.target.removeChild(but);
    } else {
        e.target.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteParent);
    }
};

/* Raderar förälder till delete knappen som är en textsträng */
deleteParent = e => {
    e.target.parentElement.remove();
};

/* Om det klickas på addbutton och
OM värdet inte är 0
Anropa funkitionen add item som lägger till funktionen. */
addButton.addEventListener("click", function () {
    if (input.value.length !== 0) {
        addInputItem();
    }
});




/* Byter bakgrundsfärg på body */
let body = document.querySelector('body');

changeColorBody = body => {
    document.body.style.backgroundColor = "beige";
};
document.addEventListener("click", changeColorBody);



/* Byter färg på h1 */
let h1 = document.querySelector('h1');

changeColorHeading = h1 => {
    document.querySelector("h1").style.color = "darkgrey";
};
document.addEventListener("mouseout", changeColorHeading);










/*------ Övrig info -----*/
// Vid event 
// klick är det bästa att använda
// Fokus är bra att använda
// Mouse over ska aldrig användas eftersom många använder telefoner och ipads.


/* Tar bort cirkeln till UL elementet*/
// Display block
// Float left
// width 100 %      




// input.addEventListener("keypress", function () {
//     if (event.which === 13 && input.value.length !== 0) {
//         addItem();
//     }
// });


// //add delete and strike out functionality to existing list items
// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", itemDone);
// }