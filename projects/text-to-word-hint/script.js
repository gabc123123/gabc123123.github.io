// v.1.0.0




function textToWordHint(inputText, textForHint, printId, inputId){
const symbolForSplit = 'pwxortuzqu';

textForHint = textForHint.replace(" ", symbolForSplit); 
textForHint = textForHint.replace(",", symbolForSplit);
textForHint = textForHint.replace(",", symbolForSplit); 
textForHint = textForHint.replace(/\r\n/g, symbolForSplit);
textForHint = textForHint.replace(/\r/g, symbolForSplit);
textForHint = textForHint.replace(/\n/g, symbolForSplit);

textForHint = textForHint.split(symbolForSplit);


// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// count dublicate for relevant result as weight, object: word, count

let textForHintUniq = {};
textForHint.forEach(function (x) {
if(x != null&&x != ''){
textForHintUniq[x] = (textForHintUniq[x] || 0) + 1;
}
});




textForHint.forEach(function (item) {
if(x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});

qSearch = (q.toLowerCase()).replace(/ /g, "|");
if(((postText+' '+postTag).toLowerCase()).search(qSearch) != -1){
}







}






//fuWorker('on');
