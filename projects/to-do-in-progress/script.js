// v.1.0.0


function fuToDo(printPlace){


let print = '';




let dbName = 'x3';

// This is what our customer data looks like.
const data = [
  { title: "test1", text: "Bill", url: "sdklfj"  },
  { title: "test2", text: "Donna", url: "sdkfjl" }
];





let db;
const request = indexedDB.open(dbName, 1);


request.onerror = (event) => {
  console.log("request.onerror = (event)");
};







request.onupgradeneeded = (event) => {

const db = event.target.result;




const objectStore = db.createObjectStore("test", { autoIncrement : true });

  objectStore.createIndex("tile", "title", { unique: false });
  objectStore.createIndex("text", "text", { unique: false });
  objectStore.createIndex("url", "url", { unique: false });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const customerObjectStore = db.transaction("test", "readwrite").objectStore("test");
    data.forEach((test) => {
      customerObjectStore.add(test);
    });
  };

console.log("objectStore = db.createObjectStore");









};


request.onsuccess = (event) => {
console.log("request.onsuccess = (event)");
const db = event.target.result;


db.onerror = (event) => {
  console.error(`Database error: ${event.target.errorCode}`);
};


const transaction = db.transaction(["test"], "readwrite");

transaction.oncomplete = (event) => {
  console.log("All done!");
};


transaction.onerror = (event) => {
  // Don't forget to handle errors!
};


const objectStore = transaction.objectStore("test");
data.forEach((test) => {
  const request = objectStore.add(test);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
console.log('donnnn');
  };
});


};








// print from db
request.onsuccess = (event) => {
const db = event.target.result;




const transaction = db.transaction(["test"]);
const objectStore = transaction.objectStore("test");
const index = objectStore.index("name");

index.get("title").onsuccess = (event) => {
  console.log(event.target.result.name);
};

}


print = `
<div class="center">
<div class="wrapper">

<div class="post border3List light2">
[ `+print+` ]

</div>




</div>
</div>
`;



document.getElementById(printPlace).innerHTML = print;
}
