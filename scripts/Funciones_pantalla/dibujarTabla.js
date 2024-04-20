function dibujarTabla(){
  const lienzo = document.getElementById("lienzo-tabla");
  let contexto = lienzo.getContext("2d");
    
  //Dibujando las cuatro rayas de la tabla  
    
  const anchoRectV = lienzo.width / 100 * 3;
  const anchoRectH = lienzo.height / 100 * 3;
    
  contexto.fillRect(
    (lienzo.width / 100 * 31),
    0,
    anchoRectV,
    (lienzo.height));
    
  contexto.fillRect(
    (lienzo.width / 100 * 66),
    0,
    anchoRectV,
    (lienzo.height));
    
  contexto.fillRect(
    0,
    (lienzo.height / 100 * 31),
    (lienzo.width),
    anchoRectH);
    
  contexto.fillRect(
    0,
    (lienzo.height / 100 * 66),
    (lienzo.width),
    anchoRectH);  
}

dibujarTabla();