function _load(){

/*to do list,  webes felület létrehozása:
legyen legalább 10 sor a webes felületen, 
minden sorban egy check box,
    -mellette legyen egy szöveges mező, amibe be lehet írni a feladatot,
    -minden sorban egy törles gomb
10 db elemből álljon a lista, de bővitheto legyen egy új feladat hozzáadasa gombbal*/


//0. lépés: egy változóban eltárolni a root elemet

let rootE = document.getElementById("root");


//1. változóban beleírni több soros idézőjelek között, amiben van egy div, diven belül pedig van egy check, input és button nevű gomb, a gomboknak adunk egy class-t
let rows = `
<div class="row">
    <input type="checkbox">
    <input type="text" placeholder="Task for the day"></input>
    <button class="delete">Delete task</button>
</div>
`;

//2. változóban elmenteni a 10-es számot

let nr_rows = 10;


//3. for ciklust indítani, 0-10-ig insertAdjecentHtml-el létrehpzni 10 db másolatot az 1. pontban létrehpzptt sort. A beforeend típus kell az injertAdjecentHtml-ből, mert a root elemen belül szökséges

for (let index=0; index < nr_rows; index++) {
    rootE.insertAdjacentHTML("beforeend", rows);
}


//4. az add gomb hozzáadása insertAdjecentHtml-el a rooton kivül kell elhelyezni (afterend pozícióval)

rootE.insertAdjacentHTML ("afterend" ,`
    <button id="plus_row">New item</button>
` )

//5. add gomb-nak ID adható, click esemény hozzáadása és függvény létrehozása, amely click meghívására lefut. click esemény lefutásakor, új sor hozzáadása történik (ez változóban van lementve)

let plus_button= document.getElementById("plus_row");

function plus_row_function () {
    rootE.insertAdjacentHTML("beforeend", rows);

//TODO valahogy itt kellene rátenni az új elemre a törlés függvényt

}

plus_button.addEventListener ("click", plus_row_function);


//6. el kell menteni querySelectorral az összes sort, törlés gombot. 

let deleteButtons= rootE.querySelectorAll(".delete");
//console.log(deleteButtons);

function deleteItem(e) {
    //console.log("Delete button is clicked!");
    //console.log(e.target);
    e.target.parentElement.remove();

}

for (let index=0; index < deleteButtons.length; index++){
    deleteButtons[index].addEventListener("click", deleteItem);
}


//7. for ciklussal végig kell menni a 6.sorban összegyűjtött HTML elemeken, a tömb hosszúságát kell körbejárni. Mindegyikre rá kell tenni egy click eseményt, ehhez fügvény készítése.


//8. Elkészített függvényben a törlés gomb befoglaló sorát kitöröljük. 
}

window.addEventListener("load", _load);
