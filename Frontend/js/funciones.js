function openExtra() {
  var acordeon = document.getElementById('extra');  
  acordeon.classList.toggle('animShared');
}
function subMenu () {
  var subMenus = document.getElementById('submenuDiv');  
  subMenus.classList.toggle('submenuO');
}
function backgroundColor () {
  var backColor = document.getElementById('backCambioColor');  
  backColor.classList.toggle('backgroundCambioActive');
}
function colorWorkSpaceGris () {
  var workSpaceDiv = document.getElementById('workspace');  
  var backCont = document.getElementById('backCont');
  var clrGris = document.getElementById('clrGris');
  clrGris.classList.toggle('clrBlanco');
  backCont.classList.toggle('clrGris');
  workSpaceDiv.classList.toggle('clrGris');
}
function colorWorkSpaceOscuro () {
  var clrOscuro = document.getElementById('clrOscuro');
  var workSpaceDiv = document.getElementById('workspace');  
  var backCont = document.getElementById('backCont');
  clrOscuro.classList.toggle('clrBlanco');
  backCont.classList.toggle('clrOscuro');
  workSpaceDiv.classList.toggle('clrOscuro');
}
function verDetalle(){
  var detalleTxt = document.getElementById('txtModal');  
  detalleTxt.classList.toggle('detalleTxt');
}
function openPaleta () {
  var paletaOp = document.getElementById('paletaCl');  
  paletaOp.classList.toggle('pclr');
}
function openLogo () {
  var paletaOp = document.getElementById('logoImagen');  
  paletaOp.classList.toggle('lI');
}
function verTextos () {
  var txtDiv = document.getElementById('txtDiv');
  txtDiv.classList.toggle('txtDivMost');
}
function verColores () {
  var verClrs = document.getElementById('clrDiv');
  verClrs.classList.toggle('rltClr');
}
function getFree() {
  var getfree = document.getElementById('getfree');
  getfree.classList.toggle('getFreeVer');
}
function sendSucess() {
  var sendSucces = document.getElementById('sendSuc');
  var formSucc = document.getElementById('formSucc');
  formSucc.style.display='none';
  sendSucces.classList.toggle('sendSuccessOc');
}


