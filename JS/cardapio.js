var win;
function PopUpPromocao(){
    pagina="../popUp.html";
    var left = (window.innerWidth-900)/2;
    var top = (window.innerHeight-600)/2;
    settings = 'toolbar=no, location=no,directories=no,status=no,menubar=no,width=400,height=420,left='+left+',top='+top+'scrollbars=no,copyhistory=yes';
    win= window.open(pagina,"Oferta",settings)
}
PopUpPromocao();