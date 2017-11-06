$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tarea.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Creacion y asignacion de tarea",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Un lider de equipo crea una tarea",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-lider-de-equipo-crea-una-tarea",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que soy el usuario \"Paula Perez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "cuando creo la tarea \"inscripcion\" , \"ID\" y \"Paula Perez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "se crea la tarea con nombre \"inscripcion\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Paula Perez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 180179094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 22
    },
    {
      "val": "ID",
      "offset": 38
    },
    {
      "val": "Paula Perez",
      "offset": 45
    }
  ],
  "location": "CreacionTareaSteps.cuando_creo_la_tarea(String,String,String)"
});
formatter.result({
  "duration": 296792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 29
    }
  ],
  "location": "CreacionTareaSteps.se_crea_la_tarea_con_nombre(String)"
});
formatter.result({
  "duration": 3438044,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Un analista funcional del equipo crea una tarea",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-analista-funcional-del-equipo-crea-una-tarea",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que soy el usuario \"Josefina Martinez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "cuando creo la tarea \"crear nuevo curso\" , \"ID\" y \"Josefina Martinez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "se crea la tarea con nombre \"crear nuevo curso\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Josefina Martinez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 171118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 22
    },
    {
      "val": "ID",
      "offset": 44
    },
    {
      "val": "Josefina Martinez",
      "offset": 51
    }
  ],
  "location": "CreacionTareaSteps.cuando_creo_la_tarea(String,String,String)"
});
formatter.result({
  "duration": 224872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 29
    }
  ],
  "location": "CreacionTareaSteps.se_crea_la_tarea_con_nombre(String)"
});
formatter.result({
  "duration": 129045,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Un lider de equipo asigna una tarea a un desarrollador",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-lider-de-equipo-asigna-una-tarea-a-un-desarrollador",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 15,
  "name": "que soy el usuario \"Paula Perez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "cuando asigno la tarea \"inscripcion\" a \"Christian Sanchez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 17,
  "name": "Christian Sanchez tiene la tarea \"inscripcion\" asignada",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Paula Perez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 154918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 24
    },
    {
      "val": "Christian Sanchez",
      "offset": 40
    }
  ],
  "location": "CreacionTareaSteps.cuando_asigno_la_tarea_a(String,String)"
});
formatter.result({
  "duration": 456876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 34
    }
  ],
  "location": "CreacionTareaSteps.Christian_Sanchez_tiene_la_tarea_asignada(String)"
});
formatter.result({
  "duration": 203661,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;",
  "type": "scenario",
  "keyword": "Escenario"
});
});