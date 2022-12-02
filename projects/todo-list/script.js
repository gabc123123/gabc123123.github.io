// v.1.0.5




var print = '';
var com = '';
var text = ''
var status = '';

/*function comGet(com2, id2, title2, status2){
com = com2;
id = id2;
title = title2;
status = status2;
if(com == ''||com == undefined){ com = 'show'; text = ''; id = 0; status = ''; }
}*/


//alert(com);

function runDb(com3, id3, title3, status3){
print = '';
//document.getElementById("result").innerHTML = '';  // clear

//comGet(com3, id3, title3, status3);

com = com3;
id = id3;
title = title3;
status = status3;
if(com == ''||com == undefined){ com = 'show'; text = ''; id = 0; status = ''; }





let dbName = 'db';
let dbVersion = 1;
let tableName = 'todo-list';

// This is what our customer data looks like.
/*var data = [
{
title:"title",
text:"text",
url:"url",
tag:"tiag",
time:"time",
data:"data",
data2:"data2",
data3:"data3"  }
];

*/



let db;
const request = indexedDB.open(dbName, dbVersion);


request.onerror = (event) => {
  console.log("request.onerror = (event)");
console.log(event.target);


// https://stackoverflow.com/questions/15861630/how-can-i-remove-a-whole-indexeddb-database-from-javascript
var req = indexedDB.deleteDatabase(dbName);
req.onsuccess = function () {
    console.log("Deleted database successfully");
};
req.onerror = function () {
    console.log("Couldn't delete database");
};
req.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
};


};







request.onupgradeneeded = (event) => {



const db = event.target.result;


const objectStore = db.createObjectStore(tableName, { autoIncrement : true });

objectStore.createIndex("title", "title", { unique: false });
objectStore.createIndex("text", "text", { unique: false });
objectStore.createIndex("url", "url", { unique: false });
objectStore.createIndex("tag", "tag", { unique: false });
objectStore.createIndex("time", "time", { unique: false });
objectStore.createIndex("data", "data", { unique: false });
objectStore.createIndex("data2", "data2", { unique: false });
objectStore.createIndex("data3", "data3", { unique: false });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
/*  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const customerObjectStore = db.transaction(tableName, "readwrite").objectStore(tableName);
    data.forEach((tableName) => {
      customerObjectStore.add(tableName);
    });
  };*/

console.log("objectStore = db.createObjectStore");









};





if(com == "clear"){



request.onsuccess = (event) => {
console.log("request.onsuccess = (event)");
const db = event.target.result;

// https://developer.mozilla.org/docs/Web/API/IDBObjectStore/clear
 const transaction = db.transaction([tableName], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = (event) => {
   // note.innerHTML += '<li>Transaction completed.</li>';
runDb('show', '', '');
  };

  transaction.onerror = (event) => {
    note.innerHTML += `<li>Transaction not opened due to error: ${transaction.error}</li>`;
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore(tableName);

  // Make a request to clear all the data out of the object store
  const objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
    //note.innerHTML += '<li>Request successful.</li>';
runDb('show', '', '');
  };



};
}








if(com == "add"){

// test for add
data = [
  { title:title }
];

request.onsuccess = (event) => {
console.log("request.onsuccess = (event)");
const db = event.target.result;


db.onerror = (event) => {
  console.error(`Database error: ${event.target.errorCode}`);
};


const transaction = db.transaction([tableName], "readwrite");
const objectStore = transaction.objectStore(tableName);
data.forEach((tableName) => {
  const request = objectStore.add(tableName);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
console.log('data added');
  };
});


transaction.oncomplete = (event) => {
  console.log("transaction.oncomplete");
runDb('show', '')
};


transaction.onerror = (event) => {
  // Don't forget to handle errors!
  console.log("transaction.onerror");
};



};
}


if(com == 'del'){

request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);

print = '';

// save me

objectStore.openCursor().onsuccess = function(event) {  
var cursor = event.target.result;  
if (cursor) {  
if(cursor.key == id){
cursor.delete();
}
//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.title);

cursor.continue();  
}  
else {  
console.log("Done with cursor");
runDb('show', '', '');
}  
};  

};

}







if(com == 'done'){
console.log('start done: '+id+status);
request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);


objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;  console.log(id, status);
if (cursor) {  
if(cursor.key == id){

const updateData = cursor.value;
cursor.value.data = status;
const request = cursor.update(updateData);
request.onsuccess = () => {
console.log('updated');
};
};

//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.title);
cursor.continue();  
}  
else {  
console.log("Done end");
}  
};  

transaction.oncomplete = (event) => {
console.log("transaction.oncomplete");
runDb('show', '')
};

};

}



if(com == 'update'){
console.log('[ start update: '+id+status+' ]');
request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);


// save me

objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;  console.log(id, status);
if (cursor) {  
if(cursor.key == id){

const updateData = cursor.value;
cursor.value.title = title;
const request = cursor.update(updateData);
request.onsuccess = () => {
console.log('updated');
};
};

//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.title);
cursor.continue();  
} 
else {
console.log("[ not cursor, done ]");
}  
};  

transaction.oncomplete = (event) => {
console.log("[ transaction.oncomplete ]");
runDb('show', '')
};

};

}


if(com == 'show'||com == 'edit'){


request.onsuccess = (event) => {
const db = event.target.result;





const transaction = db.transaction([tableName], 'readonly');
const objectStore = transaction.objectStore(tableName);

print = '';

// save me

objectStore.openCursor().onsuccess = function(event) {  
var cursor = event.target.result;  
if (cursor) { 
//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.title);

let idPrint = cursor.key;
let titlePrint = decodeURIComponent(cursor.value.title);
let statusPrint = decodeURIComponent(cursor.value.data);

let editPrint = '';
if(com == 'edit'&&id == idPrint){
/*editPrint = `<form style="margin: 10px 0;"><input id="inputTaskUp" class="padding" type="text" name="q" autofocus="autofocus" autocomplete="off" placeholder=" task" value="${titlePrint}"><input  type="hidden" name="com" value="edit"><input id="idInputE" type="hidden" name="id" value="${idPrint}"><input type="submit"></form><div id="option2"></div>`;*/

editPrint = `<form><textarea id="textInputE" class="padding" name="text" rows="3" cols="" placeholder=" edit">${titlePrint}</textarea><a class="block tCenter padding light border3List" href="#"  onclick="submitLinkEdit()">submit</a><input id="idInputE" type="hidden" name="id" value="${idPrint}"></form>
`;
}else{
//editPrint = `<span onclick="runDb('edit', '`+idPrint+`', '', '')">${titlePrint}</span>`;
editPrint = `<span>${titlePrint}</span>`;
}


// show  & edit
let printTmp = '';
if(statusPrint == 'done'){
printTmp = `
<div class="op xsmall m2">${idPrint}</div>
<div class="m2">
<div class="pre"><input class="checkbox op" checked="checked" type="checkbox"  name="" value="undone" onclick="runDb('done', '`+idPrint+`', '', 'undone')"> <span class="op" style="text-decoration: line-through;"> ${editPrint}</span></div>
</div>
`;
}else{
printTmp = `
<div class="op xsmall m2">${idPrint}</div>
<div class="m2">
<div class="pre"><input class="checkbox op" type="checkbox"  name="" value="done" onclick="runDb('done', '`+idPrint+`', '', 'done')"> ${editPrint}</div>
</div>
`;
}
print += `

<div class="post border3List light2 task m2">

${printTmp}


<span class="block tRight m2" style="float:right;">
<a class="tag2 border2 light op" href="#" onclick="runDb('edit', '`+cursor.key+`')" title="edit `+cursor.key+`">e</a>
<a class="tag2 border2 light op" href="#" onclick="runDb('del', '`+cursor.key+`')" title="remove `+cursor.key+`">x</a>
</span>


</div>


`;
cursor.continue();  
			  }  
			  else {  
			  	console.log("[ show end Done with cursor ]");
document.getElementById('result').innerHTML = print;




}


			  }  
			};  





}


}


runDb('', '');

print2 = `


<form>
<input id="inputTask" class="padding" type="search" name="q" autofocus="" autocomplete="off" placeholder=" task">
<input type="hidden" name="com" value="add">
</form>

<div id="option"></div>

<a class="butto op border2 light padding tCenter" style="float: right; margin-top: 50px;" href="#" onclick="runDb('clear')">clear</a>
`;


var geturl = window.location;
var url = new URL(geturl);
var textInput = url.searchParams.get("q");
var comInput = url.searchParams.get("com");
var idInput = url.searchParams.get("id");

if(comInput == 'add'||comInput == 'edit'){
textInput = decodeURIComponent(textInput);
textInput = encodeURIComponent(textInput);

if(textInput != null&&textInput != "null"&&textInput != ''){

if(comInput == 'edit'){ comInput = 'update'; }
runDb(comInput, idInput, textInput);


window.location.href = '?#stopRepeatSubmit';
}

}

document.getElementById('result2').innerHTML = print2;
var inputA = document.querySelectorAll('input')[0];
inputA.addEventListener('input', updateValueIn);

function updateValueIn(e) {
let textInput= encodeURIComponent(e.target.value);

var a = `
<a class="block tCenter padding light border3List" href="#" onclick="submitLink('`+textInput+`')">submit</a>
`;

document.getElementById("option").innerHTML = a; 
}




function submitLink(textInput){
runDb('add', '', textInput);
document.getElementById("inputTask").value = '';
}

document.getElementById('result2').innerHTML = print2;
var inputA = document.querySelectorAll('input')[0];
inputA.addEventListener('input', updateValueIn);

function updateValueIn(e) {
let textInput= encodeURIComponent(e.target.value);

var a = `
<a class="block tCenter padding light border3List" href="#" onclick="submitLink('`+textInput+`')">submit</a>
`;

document.getElementById("option").innerHTML = a; 
}


function submitLinkEdit(){
idInput = document.getElementById('idInputE').value;
textInput = document.getElementById('textInputE').value;
textInput = decodeURIComponent(textInput);
textInput = encodeURIComponent(textInput);

//alert('test'+idInput+textInput);
runDb('update', idInput, textInput);
//document.getElementById("inputTaskEdit").value = '';
}



/*document.getElementById("editor").addEventListener("input", function() {
textInputE = document.getElementById('editor').value;
var a2 = `
<a class="block tCenter padding light border3List" href="#" onclick="submitLinkEdit('', '`+idPrint+`', '`+textInputE+`')">submit</a>
`;

document.getElementById("option2").innerHTML = a2; 

}, false);*/

