function pisca(){
    var f = document.getElementById('precoPromocao');
    var fundo = document.getElementById('promocao');
    setInterval(function(){
        f.style.color= (f.style.color === 'yellow' ? 'white' : 'yellow');
        
    },150);
}
pisca();