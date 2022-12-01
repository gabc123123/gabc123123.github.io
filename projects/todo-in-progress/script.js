// v.1.0.3




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
let tableName = 'toDo';

// This is what our customer data looks like.
var data = [
  { title: "title", text: "text", url: "url"  }
];





let db;
const request = indexedDB.open(dbName, 1);


request.onerror = (event) => {
  console.log("request.onerror = (event)");
};







request.onupgradeneeded = (event) => {

const db = event.target.result;


const objectStore = db.createObjectStore(tableName, { autoIncrement : true });

  objectStore.createIndex("title", "title", { unique: false });
  objectStore.createIndex("text", "text", { unique: false });
  objectStore.createIndex("url", "url", { unique: false });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const customerObjectStore = db.transaction(tableName, "readwrite").objectStore(tableName);
    data.forEach((tableName) => {
      customerObjectStore.add(tableName);
    });
  };

console.log("objectStore = db.createObjectStore");









};

if(com == "add"){

// test for add
data = [
  { title: title, text: "", url: ""  }
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



/*
if(com == "remove"){

// test for add
data = [
  { title: ''+title+'', text: "", url: ""  }
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
  const request = objectStore.remove(tableName);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
console.log('data remove');
runDb('show', '', '');
  };
});


transaction.oncomplete = (event) => {
  console.log("transaction.oncomplete");
};


transaction.onerror = (event) => {
  // Don't forget to handle errors!
  console.log("transaction.onerror");
};



};
}*/



/*
if(com == 'del'){


request.onsuccess = (event) => {
const db = event.target.result;


btnDelete.addEventListener("click", function() {
      var id, transaction, objectStore, request;



      transaction = db.transaction(dbName, "readwrite");
      objectStore = transaction.objectStore(tableName);
      request = objectStore.delete(text);
      request.onsuccess = function(evt) {
        console.log("deleted content");
runDb('show', '')
      };
    }, false);





print = '';

}
}

*/
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


// save me

objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;  console.log(id, status);
if (cursor) {  
if(cursor.key == id){

const updateData = cursor.value;
cursor.value.text = status;
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
let statusPrint = decodeURIComponent(cursor.value.text);

var textInputE = '';
let editPrint = '';
if(com == 'edit'&&id == idPrint){
editPrint = `<form style="margin: 10px 0;"><input id="inputTaskUp" class="padding" type="text" name="q" autofocus="autofocus" autocomplete="off" placeholder=" task" value="${titlePrint}" ><input type="hidden" name="com" value="edit"><input type="hidden" name="id" value="${idPrint}"><input type="submit"></form><div id="optionLinkUp"></div>`;
}else{
//editPrint = `<span onclick="runDb('edit', '`+idPrint+`', '', '')">${titlePrint}</span>`;
editPrint = `<span>${titlePrint}</span>`;
}


// show  & edit
let printTmp = '';
if(statusPrint == 'done'){
printTmp = `
<div class="op">${idPrint}</div>
<div><span class="pre"><input class="checkbox op" checked="checked" type="checkbox"  name="" value="undone" onclick="runDb('done', '`+idPrint+`', '', 'undone')"><span class="op" style="text-decoration: line-through;"> ${editPrint}</span></span></div>
`;
}else{
printTmp = `
<div class="op">${idPrint}</div>
<div><span class="pre"><input class="checkbox op" type="checkbox"  name="" value="done" onclick="runDb('done', '`+idPrint+`', '', 'done')"> ${editPrint}</span></div>
`;
}
print += `

<div class="post border3List light2 task">

${printTmp}

<div>
<span style="float:right">
<a class="tag border2 light" href="#" onclick="runDb('edit', '`+cursor.key+`')" title="runDb('edit', '`+cursor.key+`')">e</a>
<a class="tag border2 light" href="#" onclick="runDb('del', '`+cursor.key+`')" title="runDb('remove', '`+cursor.key+`')">x</a>
</span>
</div>

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

//window.location.href = '?#stopRepeatSubmit';

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




function submitLinkEdit(comInput, idInput, textInput){
runDb('upadate', idInput, textInput);
document.getElementById("inputTaskEdit").value = '';
}



