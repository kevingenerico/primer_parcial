$(document).ready(function(){
//variables globales

let valueName = "";
let valueProvincia = "";
let valueSector = "";
let valueCiudad = "";
let valueCarrera = "";

let materia_1 = "";
let materia_2 = "";
let materia_3 = "";
let materia_4 = "";
let materia_5 = "";

let valueHorario_1 = "";
let valueHorario_2 = "";
let valueHorario_3 = "";
let valueHorario_4 = "";
let valueHorario_5 = "";

let M1_lunes = "";
let M1_jueves = "";
let M1_martes = "";

let M2_vi = "";
let M2_mi = "";
let M2_lu = "";

let M3_ju = "";
let M3_lu = "";
let M3_ma = "";

let M4_ju = "";
let M4_lu = "";
let M4_ma = "";

let M5_ju = "";
let M5_lu = "";
let M5_ma = "";

//eventos
  $("#container").on("click", "#btn-clear", function () {
    Clear();
  });

  $("#container").on("click", "#btn-register", function () {
    create();
  });

  $("#container").on("click", "#btn-volver", function () {
    generateHtmlForm();
  });

  $("#container").on("click", "#btn-aceptar", function () {
    generateHtmlConfirm();
  });

  $("#container").on("click", "#btn-volver-home", function () {
    generateHtmlForm();
  });

  $("#container").on("click", "#btn-atras", function () {
    generateHtmlMaterias();
  });

  $("#container").on("click", "#btn-final", function () {
    generateHtmlForm();
    Clear();
  });

//if
function generateIf(){
    
    valueHorario_1 = $("#radio-container-1 input[type='radio']:checked").val();
    valueHorario_2 = $("#radio-container-2 input[type='radio']:checked").val();
    valueHorario_3 = $("#radio-container-3 input[type='radio']:checked").val();
    valueHorario_4 = $("#radio-container-4 input[type='radio']:checked").val();
    valueHorario_5 = $("#radio-container-5 input[type='radio']:checked").val();

    //M1
    if (valueHorario_1 == "Lu 10:00 a 13:00") {
        M1_lunes = valueHorario_1;
    }
    if (valueHorario_1 == "Ju 10:00 a 13:00") {
        M1_jueves = valueHorario_1;
    }
    if (valueHorario_1 == "Ma 10:00 a 13:00") {
        M1_martes = valueHorario_1;
    }
    //M2
    if (valueHorario_2 == "Vi 18:00 a 22:00") {
        M2_vi = valueHorario_2;
    }
    if (valueHorario_2 == "Mi 18:00 a 22:00") {
        M2_mi = valueHorario_2;
    }
    if (valueHorario_2 == "Lu 18:00 a 22:00") {
        M2_lu = valueHorario_2;
    }
    //M3
    if (valueHorario_3 == "Ju 14:00 a 16:00") {
        M3_ju = valueHorario_3;
    }
    if (valueHorario_3 == "lu 14:00 a 16:00") {
        M3_lu = valueHorario_3;
    }
    if (valueHorario_3 == "Ma 14:00 a 16:00") {
        M3_ma = valueHorario_3;
    }
    //M4
    if (valueHorario_4 == "Ju 14:00 a 16:00") {
        M4_ju = valueHorario_4;
    }
    if (valueHorario_4 == "lu 14:00 a 16:00") {
        M4_lu = valueHorario_4;
    }
    if (valueHorario_4 == "Ma 14:00 a 16:00") {
        M4_ma = valueHorario_4;
    }
    //M5
    if (valueHorario_5 == "Ju 14:00 a 16:00") {
        M5_ju = valueHorario_5;
    }
    if (valueHorario_5 == "lu 14:00 a 16:00") {
        M5_lu = valueHorario_5;
    }
    if (valueHorario_5 == "Ma 14:00 a 16:00") {
        M5_ma = valueHorario_5;
    }

    //carrera
    if (valueCarrera == "sofware") {

        materia_1 = "Programacion 1";
        materia_2 = "Programacion 2";
        materia_3 = "Programacion 3";
        materia_4 = "Introduccion a BD";
        materia_5 = "BD avanzada";
    }
    if (valueCarrera == "multimedia") {

        materia_1 = "Renderizado 3D";
        materia_2 = "Audio Digital";
        materia_3 = "Audio Digital Avanzado";
        materia_4 = "Diseño y maquetacion de interfaz";
        materia_5 = "publicidad";
         
    }
    if (valueCarrera == "mecatronica") {
        
        materia_1 = "Circuitos electricos 1";
        materia_2 = "Circuitos electricos 2";
        materia_3 = "Electronica 1";
        materia_4 = "Electronica digital";
        materia_5 = "Electronica 2";
        
    }

};


//generacion de html

function create(){
    valueName = $("#name").val();
    valueProvincia = $("#provincia").val();
    valueSector = $("#sector").val();
    valueCiudad = $("#ciudad").val();
    valueCarrera = $("#carrera").val();
    generateIf();

    if (validate()) {

        generateHtmlMaterias();
    }else{
        alert("deve completar toda la informacion");
    }
}

function generateHtmlConfirm(){

    generateIf();
    const generateconfirm = `
    <div class="card">
        <div class="card-header bg-success text-white text-center">
            <h4>Confirmacion</h4>
        </div>
        <div class="card-body">
        <div class="card">
        <div class="card-header bg-primary text-white">
            <h6>datos basicos</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Nombre: ${valueName}</li>
                <li class="list-group-item">Provincia: ${valueProvincia}</li>
                <li class="list-group-item">Ciudad: ${valueCiudad}</li>
                <li class="list-group-item">Sector: ${valueSector}</li>
                <li class="list-group-item">carrera: ${valueCarrera}</li>
            </ul>
        </div>
    </div>
    <table class="table table-dark">
        <tbody>
            <tr>
                <td>Asignatura</td>
                <td>Lu</td>
                <td>Ma</td>
                <td>Mi</td>
                <td>Ju</td>
                <td>Vi</td>
                <td>Sa</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>${materia_1}</th>
                <th>${M1_lunes}</th>
                <th>${M1_martes}</th>
                <th></th>
                <th>${M1_jueves}</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th>${materia_2}</th>
                <th>${M2_lu}</th>
                <th></th>
                <th>${M2_mi}</th>
                <th></th>
                <th>${M2_vi}</th>
                <th></th>
            </tr>
            <tr>
                <th>${materia_3}</th>
                <th>${M3_lu}</th>
                <th>${M3_ma}</th>
                <th></th>
                <th>${M3_ju}</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th>${materia_4}</th>
                <th>${M4_lu}</th>
                <th>${M4_ma}</th>
                <th></th>
                <th>${M4_ju}</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th>${materia_5}</th>
                <th>${M5_lu}</th>
                <th>${M5_ma}</th>
                <th></th>
                <th>${M5_ju}</th>
                <th></th>
                <th></th>
            </tr>
        </tfoot>
    </table>
    <button type="button" class="btn btn-success float-end" id="btn-final">finalizar</button>
    <button type="button" class="btn btn-primary float-end mr-1" id="btn-volver-home">volver a home</button>
    <button type="button" class="btn btn-primary float-end mr-1" id="btn-atras">volver a seleccion</button>
    </div>
    </div>
        `;
        $("#container").html(generateconfirm);
    }
    
    function generateHtmlForm(){
        const generateForm = `
        <div class="card">
        <div class="card-header bg-dark text-white">
                <h5>Datos personales</h5>
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="name" />
            </div>
    
            <div class="mb-3">
                <label for="provincia" class="form-label">Provincia:</label>
                <input type="text" class="form-control" id="provincia" />
            </div>
    
            <div class="mb-3">
                <label for="ciudad" class="form-label">Ciudad:</label>
                <input type="text" class="form-control" id="ciudad" />
            </div>
    
            <div class="mb-3">
                <label for="sector" class="form-label">Sector:</label>
                <input type="text" class="form-control" id="sector" />
            </div>
    
            <div class="mb-3">
                <label for="carrera" class="form-label"
                  >Carrera:</label
                >
                <select class="form-select" id="carrera">
                  <option value="" selected>
                    Seleccione una opcion
                  </option>
                  <option value="sofware">sofware</option>
                  <option value="multimedia">multimedia</option>
                  <option value="mecatronica">mecatronica</option>
                </select>
              </div>
            <button type="button" class="btn btn-warning float-end" id="btn-clear">
                limpiar
            </button>
            <button type="button" class="btn btn-primary float-end mr-1" id="btn-register">
                registrar
            </button>
        </div>
    </div>
        `;
        $("#container").html(generateForm);
    
        $("#name").val(valueName);
        $("#provincia").val(valueProvincia);
        $("#sector").val(valueSector);
        $("#ciudad").val(valueCiudad);
        $("#carrera").val(valueCarrera);
    }
    
    
    
    function generateHtmlMaterias(){
    
        const htmlMaterias = `
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h5>Seleccion de materias</h5>
        </div>
        <div class="card-body">
            <div class="card">
                <label for="materia-1" class="form-label"
                >${materia_1}:</label
              >
                <div id="radio-container-1" class="mb-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-1"
                        id="radio-ph1"
                        value="Lu 10:00 a 13:00"
                      />
                      <label class="form-check-label" for="radio-academico"
                        >Lu 10:00 a 13:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-1"
                        id="radio-ph2"
                        value="Ju 10:00 a 13:00"
                      />
                      <label class="form-check-label" for="radio-personal"
                        >Ju 10:00 a 13:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-1"
                        id="radio-ph3"
                        value="Ma 10:00 a 13:00"
                      />
                      <label class="form-check-label" for="radio-laboral"
                        >Ma 10:00 a 13:00</label
                      >
                    </div>
                  </div>
            </div>
            <br>
            <div class="card">
                <label for="materia-2" class="form-label"
                >${materia_2}:</label
              >
                <div id="radio-container-2" class="mb-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-2"
                        id="radio-p2h1"
                        value="Vi 18:00 a 22:00"
                      />
                      <label class="form-check-label" for="radio-academico"
                        >Vi 18:00 a 22:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-2"
                        id="radio-p2h2"
                        value="Mi 18:00 a 22:00"
                      />
                      <label class="form-check-label" for="radio-personal"
                        >Mi 18:00 a 22:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-2"
                        id="radio-p2h3"
                        value="Lu 18:00 a 22:00"
                      />
                      <label class="form-check-label" for="radio-laboral"
                        >Lu 18:00 a 22:00</label
                      >
                    </div>
                  </div>
            </div>
            <br>
            <div class="card">
                <label for="materia-3" class="form-label"
                >${materia_3}:</label
              >
                <div id="radio-container-3" class="mb-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-3"
                        id="radio-p3h1"
                        value="Ju 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-academico"
                        >Ju 14:00 a 16:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-3"
                        id="radio-p3h2"
                        value="lu 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-personal"
                        >lu 14:00 a 16:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-3"
                        id="radio-p3h3"
                        value="Ma 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-laboral"
                        >Ma 14:00 a 16:00</label
                      >
                    </div>
                  </div>
            </div>
            <br>
            <div class="card">
                <label for="materia-4" class="form-label"
                >${materia_4}:</label
              >
                <div id="radio-container-4" class="mb-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-4"
                        id="radio-bh1"
                        value="Ju 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-academico"
                        >Ju 14:00 a 16:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-4"
                        id="radio-bh2"
                        value="lu 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-personal"
                        >lu 14:00 a 16:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-4"
                        id="radio-bh3"
                        value="Ma 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-laboral"
                        >Ma 14:00 a 16:00</label
                      >
                    </div>
                  </div>
            </div>
            <br>
            <div class="card">
                <label for="materia-5" class="form-label"
                >${materia_5}:</label
              >
                <div id="radio-container-5" class="mb-3">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-5"
                        id="radio-ah1"
                        value="Ju 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-academico"
                        >Ju 14:00 a 16:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-5"
                        id="radio-ah2"
                        value="lu 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-personal"
                        >lu 14:00 a 16:00</label
                      >
                    </div>
    
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="materia-5"
                        id="radio-ah3"
                        value="Ma 14:00 a 16:00"
                      />
                      <label class="form-check-label" for="radio-laboral"
                        >Ma 14:00 a 16:00</label
                      >
                    </div>
                  </div>
            </div>
            <br>
            <button type="button" class="btn btn-danger float-end" id="btn-volver">
                volver al Home
            </button>
            <button type="button" class="btn btn-primary float-end mr-1" id="btn-aceptar">
                acerptar
            </button>
            </div>
            </div>
        </div>
    </div>


    `;
    $("#container").html(htmlMaterias);
};


  //funciones basicas
  function Clear() {
    $("#name").val("").removeClass("input-error").focus();
    $("#provincia").val("").removeClass("input-error");
    $("#ciudad").val("").removeClass("input-error");
    $("#sector").val("").removeClass("input-error");
    $("#carrera").val("").removeClass("input-error");

    valueName = "";
    valueProvincia = "";
    valueSector = "";
    valueCiudad = "";
    valueCarrera = "";

  }

function validate(){

  let valid = true;

    if (valueName == "" || valueName == undefined || valueName == null) {
        valid = false;
        $("#name").addClass("input-error");
      } else {
        $("#name").removeClass("input-error");
      }
      if (valueProvincia == "" || valueProvincia == undefined || valueProvincia == null) {
        valid = false;
        $("#provincia").addClass("input-error");
      } else {
        $("#provincia").removeClass("input-error");
      }
      if (valueCiudad == "" || valueCiudad == undefined || valueCiudad == null) {
        valid = false;
        $("#ciudad").addClass("input-error");
      } else {
        $("#ciudad").removeClass("input-error");
      }
      if (valueSector == "" || valueSector == undefined || valueSector == null) {
        valid = false;
        $("#sector").addClass("input-error");
      } else {
        $("#sector").removeClass("input-error");
      }
      if (
        valueCarrera == "" ||
        valueCarrera == undefined ||
        valueCarrera == null
      ) {
        valid = false;
        $("#carrera").addClass("input-error");
      } else {
        $("#carrera").removeClass("input-error");
      }
      return valid;
};

})