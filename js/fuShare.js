// v.1.0.11

function fuShare(t, u){
var host = '/';

t = decodeURIComponent(t);
u = decodeURIComponent(u);



if(t == ''){ t = q; }
var tshare = encodeURIComponent(t);
var ushare = encodeURIComponent(u);

var target = ' target="_blank" ';

var share = '';

if (navigator.share) {
share += `<input type="button" class="dropbtn border1 tag light" style="display: inline-block;" value="mobile share" onClick="fuMobileShare('`+tshare+`',	'`+ushare+`')" />`;
}

share += `
<a $target class="border2 tag light" href="https://twitter.com/intent/tweet?text=`+tshare+' '+ushare+`">twitter</a>
<a $target class="border2 tag light" href="https://tumblr.com/widgets/share/tool?canonicalUrl=`+ushare+`">tumblr</a>
<a $target class="border2 tag light" href="mailto:?subject=`+tshare+`&body=`+ushare+`">email</a>
<a $target class="border2 tag light" href="https://validator.w3.org/nu/?doc=`+ushare+`">w3.org</a>
<a class="border2 tag light" href="`+host+`projects/game-typing-speed/?mode=input&q=`+tshare+`">input</a>
`;

share = `
<div style="text-align:center; width: 100%;" class="op gray">
`+share+`
</div>
`;


return share;


}

function fuMobileShare(q, url) {

if (navigator.share) {
  navigator.share({
    title: q,
    text: q+' '+url,
    //url: url,
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
}
