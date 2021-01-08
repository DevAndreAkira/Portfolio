
var btnProject = document.getElementById("btn-project");
var modalproject = document.getElementById("modal-project");
var btnfechar = document.getElementById("fecharModal");

var site1 = document.getElementById("site1");
var site2 = document.getElementById("site2");
var site3 = document.getElementById("site3");
var site4 = document.getElementById("site4");
var site5 = document.getElementById("site5");
var site6 = document.getElementById("site6");

btnProject.onclick = function () {
  modalproject.classList.remove('none');
}

btnfechar.onclick = function () {
  modalproject.classList.add('none');
  site1.classList.remove("selecaoOn");
  site1.classList.add("selecao");
  site2.classList.remove("selecaoOn");
  site2.classList.add("selecao");
  site3.classList.remove("selecaoOn");
  site3.classList.add("selecao");
  site4.classList.remove("selecaoOn");
  site4.classList.add("selecao");
  site5.classList.remove("selecaoOn");
  site5.classList.add("selecao");
  site6.classList.remove("selecaoOn");
  site6.classList.add("selecao");

  document.getElementById("a3tech").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("senaitechvagas").classList.add("none");
  document.getElementById("joel").classList.add("none");
  document.getElementById("transistor").classList.add("none");
  document.getElementById("cf").classList.add("none");
  document.getElementById("white").classList.remove("none");
}

site1.onclick = function () {
  site1.classList.remove("selecao");
  site2.classList.remove("selecaoOn");
  site3.classList.remove("selecaoOn");
  site4.classList.remove("selecaoOn");
  site5.classList.remove("selecaoOn");
  site6.classList.remove("selecaoOn");
  site1.classList.add("selecaoOn");
  site2.classList.add("selecao");
  site3.classList.add("selecao");
  site4.classList.add("selecao");
  site5.classList.add("selecao");
  site6.classList.add("selecao");
  document.getElementById("a3tech").classList.remove("none");
  document.getElementById("white").classList.add("none");
  document.getElementById("senaitechvagas").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("joel").classList.add("none");
  document.getElementById("transistor").classList.add("none");
  document.getElementById("cf").classList.add("none");
}

site2.onclick = function () {
  site1.classList.remove("selecaoOn");
  site3.classList.remove("selecaoOn");
  site4.classList.remove("selecaoOn");
  site5.classList.remove("selecaoOn");
  site6.classList.remove("selecaoOn");
  site2.classList.remove("selecao");
  site2.classList.add("selecaoOn");
  site1.classList.add("selecao");
  site3.classList.add("selecao");
  site4.classList.add("selecao");
  site5.classList.add("selecao");
  site6.classList.add("selecao");
  document.getElementById("labufalina").classList.remove("none");
  document.getElementById("white").classList.add("none");
  document.getElementById("a3tech").classList.add("none");
  document.getElementById("senaitechvagas").classList.add("none");
  document.getElementById("joel").classList.add("none");
  document.getElementById("transistor").classList.add("none");
  document.getElementById("cf").classList.add("none");
}

site3.onclick = function () {
  site1.classList.remove("selecaoOn");
  site2.classList.remove("selecaoOn");
  site4.classList.remove("selecaoOn");
  site5.classList.remove("selecaoOn");
  site6.classList.remove("selecaoOn");
  site3.classList.remove("selecao");
  site3.classList.add("selecaoOn");
  site1.classList.add("selecao");
  site2.classList.add("selecao");
  site4.classList.add("selecao");
  site5.classList.add("selecao");
  site6.classList.add("selecao");
  document.getElementById("senaitechvagas").classList.remove("none");
  document.getElementById("white").classList.add("none");
  document.getElementById("a3tech").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("joel").classList.add("none");
  document.getElementById("transistor").classList.add("none");
  document.getElementById("cf").classList.add("none");
}

site4.onclick = function () {
  site1.classList.remove("selecaoOn");
  site2.classList.remove("selecaoOn");
  site3.classList.remove("selecaoOn");
  site5.classList.remove("selecaoOn");
  site6.classList.remove("selecaoOn");
  site4.classList.remove("selecao");
  site4.classList.add("selecaoOn");
  site1.classList.add("selecao");
  site2.classList.add("selecao");
  site3.classList.add("selecao");
  site5.classList.add("selecao");
  site6.classList.add("selecao");
  document.getElementById("joel").classList.remove("none");
  document.getElementById("white").classList.add("none");
  document.getElementById("a3tech").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("senaitechvagas").classList.add("none");
  document.getElementById("transistor").classList.add("none");
  document.getElementById("cf").classList.add("none");
}

site5.onclick = function () {
  site1.classList.remove("selecaoOn");
  site2.classList.remove("selecaoOn");
  site3.classList.remove("selecaoOn");
  site4.classList.remove("selecaoOn");
  site6.classList.remove("selecaoOn");
  site5.classList.remove("selecao");
  site5.classList.add("selecaoOn");
  site1.classList.add("selecao");
  site2.classList.add("selecao");
  site3.classList.add("selecao");
  site4.classList.add("selecao");
  site6.classList.add("selecao");
  document.getElementById("transistor").classList.remove("none");
  document.getElementById("white").classList.add("none");
  document.getElementById("a3tech").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("senaitechvagas").classList.add("none");
  document.getElementById("joel").classList.add("none");
  document.getElementById("cf").classList.add("none");
}

site6.onclick = function () {
  site1.classList.remove("selecaoOn");
  site2.classList.remove("selecaoOn");
  site3.classList.remove("selecaoOn");
  site4.classList.remove("selecaoOn");
  site5.classList.remove("selecaoOn");
  site6.classList.remove("selecao");
  site6.classList.add("selecaoOn");
  site1.classList.add("selecao");
  site2.classList.add("selecao");
  site3.classList.add("selecao");
  site4.classList.add("selecao");
  site5.classList.add("selecao");
  document.getElementById("cf").classList.remove("none");
  document.getElementById("white").classList.add("none");
  document.getElementById("a3tech").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("senaitechvagas").classList.add("none");
  document.getElementById("joel").classList.add("none");
  document.getElementById("transistor").classList.add("none");
}