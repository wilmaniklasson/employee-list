import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './fire.js';

// Example: read all documents in the "shoppingList" collection
async function getShoppingList() {
    const shoppingListCollection = collection(db, 'shoppingList'); // 'shoppingList' is the collection name
    const shoppingListSnapshot = await getDocs(shoppingListCollection); // getDocs returns a promise
    //console.log('getShoppingList: snapshot is', shoppingListSnapshot); // log the snapshot
    const itemList = shoppingListSnapshot.docs.map(doc => withKey(doc)); // map the snapshot to an array of objects
    return itemList;
}

// Use this if you don't have an id in the objects themselves
function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;  // "id" is the document reference
    return o;
}

export { getShoppingList };
