var table = document.getElementById("grade-table");
var noGradeElements = document.getElementById("no-grades");
var gradeTable = new GradeTable(table, noGradeElements);
var header = document.getElementById("student-table-header");
var tableHeader =  new PageHeader(header);
var form = document.getElementById("form-section");
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, tableHeader, gradeForm);
app.start();
