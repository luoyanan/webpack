require('style-loader!css-loader!./style.css');
function test(){
    console.log('entry file');
    var div = document.createElement('div');
    div.innerHTML('test code');
    document.body.appendChild(div);
}
test();