/* Rivediamo l’esercizio della lista della spesa visto insieme, 
ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzione a non dimenticare tutte le differenze implementative che 
il ciclo while ci impone, in particolare alla variabile di indice. */
console.log('JS OK')

const listArray= [
    'Uova',
    'Pane',
    'Latte',
    'Biscotti',
    'Pasta',
    'Affettati',
    'Formaggio',
    'Verdura',
    'Frutta',
];

const shoppingList = document.getElementById('shopping-list');
let i = 0;
while (i < listArray.length ){
    const shoppingListElement = document.createElement('li');
    shoppingList.append(shoppingListElement);
    shoppingListElement.innerHTML = listArray[i];
    i++;
}
console.log(listArray)
    