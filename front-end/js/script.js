$(document).ready(function () {
  //Configuración de DataTables y llamada al API
  $("#tablaDatos").DataTable({
    ajax: {
      url: "http://linux-vm14:5000/api/get_inscripciones",
    },
    error: function (xhr, status, error) {
      console.log("Error al obtener los datos del API:", error);
    },
    columns: [
      { data: "nombre" },
      { data: "telefono" },
      { data: "email" },
      { data: "direccion_fisica" },
      { data: "fecha_registro" },
      { data: "fecha_evento"},
      { data:"lugar"},
      { data:"tipo"},
      { data:"descripcion"}
      
    ],
  });

  $("#tablaeventos").DataTable({
    ajax: {
      url: "http://linux-vm14:5000/api/get_eventos",
    },
    error: function (xhr, status, error) {
      console.log("Error al obtener los datos del API:", error);
    },
    columns: [
      { data: "id_evento" },
      { data: "fecha_registro" },
      { data: "fecha_evento" },
      { data: "lugar" },
      { data: "tipo"},
      { data:"descripcion"},
    ],
  });
});
