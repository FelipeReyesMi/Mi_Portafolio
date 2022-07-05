let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $(".hide");
  x.click(ocultarMostrarHeader);
}

function ocultarMostrarHeader() {
  let x = $("nav ul");
  x.toggle("slow");
}