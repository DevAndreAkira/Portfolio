
var btnProject = document.getElementById("btn-project");
var modalproject = document.getElementById("modal-project");
var btnfechar = document.getElementById("fecharModal");

var site1 = document.getElementById("site1");
var site2 = document.getElementById("site2");

btnProject.onclick = function () {
  modalproject.classList.remove('none');
}

btnfechar.onclick = function () {
  modalproject.classList.add('none');
  site1.classList.remove("selecaoOn");
  site1.classList.add("selecao");
  site2.classList.remove("selecaoOn");
  site2.classList.add("selecao");

  document.getElementById("a3tech").classList.add("none");
  document.getElementById("labufalina").classList.add("none");
  document.getElementById("white").classList.remove("none");
}

site1.onclick = function () {
  if (site1.classList == "selecao" && site2.classList == "selecao") {
    site1.classList.remove("selecao");
    site1.classList.add("selecaoOn");
    site2.classList.remove("selecaoOn");
    site2.classList.add("selecao");
    document.getElementById("a3tech").classList.remove("none");
    document.getElementById("white").classList.add("none");
  }
  else if (site1.classList == "selecao" && site2.classList == "selecaoOn") {
    site1.classList.remove("selecao");
    site1.classList.add("selecaoOn");
    site2.classList.remove("selecaoOn");
    site2.classList.add("selecao");
    document.getElementById("a3tech").classList.remove("none");
    document.getElementById("labufalina").classList.add("none");
  }
  else {

  }
}

site2.onclick = function () {
  if (site1.classList == "selecao" && site2.classList == "selecao") {
    site2.classList.remove("selecao");
    site2.classList.add("selecaoOn");
    site1.classList.remove("selecaoOn");
    site1.classList.add("selecao");
    document.getElementById("labufalina").classList.remove("none");
    document.getElementById("white").classList.add("none");
  }
  else if (site2.classList == "selecao" && site1.classList == "selecaoOn") {
    site2.classList.remove("selecao");
    site2.classList.add("selecaoOn");
    site1.classList.remove("selecaoOn");
    site1.classList.add("selecao");
    document.getElementById("labufalina").classList.remove("none");
    document.getElementById("a3tech").classList.add("none");
  }
  else if (site1.classList == "selecaoOn") {
    site1.classList.remove("selecaoOn");
    site1.classList.add("selecao");
    site2.classList.remove("selecao");
    site2.classList.add("selecaoOn");
    document.getElementById("labufalina").classList.remove("none");
    document.getElementById("a3tech").classList.add("none");

  }
  else {

  }
}