// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js';
import { getFirestore, collection, getDocs, doc, onSnapshot, getDoc, setDoc, deleteDoc, query, where } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';
import { getDatabase, ref, child, get } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoPsh6nbxQjGGyhqg6kD4riV_NuwxES6Y",
    authDomain: "pwafirebase-b016c.firebaseapp.com",
    projectId: "pwafirebase-b016c",
    storageBucket: "pwafirebase-b016c.appspot.com",
    messagingSenderId: "185087008653",
    appId: "1:185087008653:web:32b30260f5c8e6409e27c4",
    measurementId: "G-XGB476CFFZ",
    databaseURL: "https://pwafirebase-b016c-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// All variables
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const database = getDatabase();
const delbut = document.getElementById("buttoninputdelete");
const deletebutt = document.getElementById("deletebutton");
const sendbutton = document.getElementById("send");
const input = document.getElementById("input");
const additems = document.getElementById("addingitems");
const inputfield = document.getElementById("typebox");
//const footer = document.getElementById("bottom");
const inputbutton = document.getElementById("buttoninput");

// All addEvenlisteners
sendbutton.addEventListener("click", noinfo);
//additems.addEventListener("click", showInput);
inputbutton.addEventListener("click", sendData2);
//inputfield.addEventListener("click", hidefooter);


var tbody = document.getElementById("tbody");

// Makes items on you list which is displayed on your screen
function addItemsToTable(type, /*sort,*/ id) {

    let trow = document.createElement("tr");

    let td2 = document.createElement("td");
    let dbutton = document.createElement("button");
    let check = document.createElement("input");

    check.type = "checkbox";
    check.id = "checked";

    dbutton.id = "deletebutton";
    dbutton.textContent = "delete";
    //dbutton.innerHTML = '<img id="crossicon" src="Images/cross.svg.png"/>';
    dbutton.dataset.id = id;
    dbutton.addEventListener("click", (event) => {
        console.log(event.target.dataset.id)
        console.log(event);
        deleteFirebase(event.target.dataset.id)
        event.target.closest("tr").remove();
    });

    td2.innerHTML = type;

    trow.appendChild(td2);
    trow.appendChild(dbutton);
    td2.appendChild(check);

    tbody.appendChild(trow);

    function showdelbutton() {
        if (dbutton.style.display === "none") {
            dbutton.style.display = "block";
            delbut.innerHTML = '<img id="inputimg" src="./Images/check.png"/>'
        } else {
            dbutton.style.display = "none";
            delbut.innerHTML = '<img id="inputimg" src="./Images/delete.png"/>';
            deletebutt.style.display = "block";
        }
    }

    delbut.addEventListener("click", showdelbutton);
}

// Adds items to the table on your screen
function addAllItemsToTable(grocery) {
    tbody.innerHTML = "";
    grocery.forEach(element => {
        addItemsToTable(element.type /*, element.sort*/ , element.id);
    });
}

// Gets all the data from the firebase
async function GetAllData() {
    const querySnapshot = await getDocs(collection(db, "ShoppingItems"));

    var groceries = [];

    querySnapshot.forEach(doc => {
        const grocery = doc.data();
        grocery.id = doc.id
        groceries.push(grocery);
        console.log(grocery)
    })
    addAllItemsToTable(groceries);
}

window.onload = GetAllData;

// Makes the elements where you can fill in your input
var typeV; //, sortV;

function Ready() {
    typeV = document.getElementById("typebox").value;
    // sortV = document.getElementById("sortbox").value;
}

// Makes a random id which is connected to the firebase
function randomId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Sending data to the firebase
async function sendData2() {
    Ready();
    await setDoc(doc(db, "ShoppingItems", randomId(15)), {
        type: typeV,
        //sort: sortV,
    });

    (event) => {
        event.target.closest("tr").appendChild();
    }
    inputfield.value = "";
    GetAllData();
}

function noinfo() {
    if (inputfield.value == '') {
        inputfield.style.border = "solid";
        inputfield.style.borderColor = "black";
        input.style.animation = "shake 0.2s ";
        return;
    } else {
        sendData2();
    }
}

// Delete function for the firebase
async function deleteFirebase(id) {
    const result = await deleteDoc(doc(db, "ShoppingItems", id));
    console.log(result, id);
    //console.log(doc.id);
    //console.log(idnames);
}

/*function showInput() {
    if (input.style.display === "block") {
        //additems.textContent = "Add item";
        //additems.innerHTML = '<img id="adddelete" src="./Images/addicon.png"/>';
        //additems.style.display = "flex";
        inputfield.style.display = "block"
        delbut.style.display = "flex";
        sendbutton.style.display = "none";
        input.style.display = "none";
    } else {
        //additems.textContent = "Cancel";
        //additems.innerHTML = '<img id="adddelete" src="./Images/cancel.png"/>';
        delbut.style.display = "none";
        additems.style.display = "flex";
        sendbutton.style.display = "flex";
        input.style.display = "block";
        inputfield.style.display = "block";
    }
}*/

/*function hidefooter() {
    footer.style.display = "none";
}*/