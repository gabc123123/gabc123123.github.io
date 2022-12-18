




let i = 0;

while(i <= 10){
console.log(i);
if(i == 5){ break; }
i++;
}

let uri = "https://w3schools.com/my test.asp?name=#pop";
let encoded = encodeURIComponent(uri);
let decoded = decodeURIComponent(encoded);

