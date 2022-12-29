// v.1.0.0



function divIdToTag(printId){
var allIdOnPage = '';
let allDivId = document.querySelectorAll('div');
allDivId.forEach((item, index) => {
if(item.id != ''){
allIdOnPage += `
<a class="tag border2 op" href="#`+item.id+`">`+item.id+`</a>
`
}
});
allIdOnPage = `
<div class="block tagList tCenter padding">`+allIdOnPage+`</div>
`;
//document.getElementsByClassName('print')[0].innerHTML = allIdOnPage;

if(document.getElementById(printId) == null){
console.log('id for print null');
}else{
document.getElementById(printId).innerHTML = allIdOnPage;
}
}

window.onload = divIdToTag('print'); //https://stackoverflow.com/questions/191157/window-onload-vs-body-onload




