var table = document.getElementById("grade-table");
var gradeTable = new GradeTable(table);
var header = document.getElementById("student-table-header");
var tableHeader =  new PageHeader(header);
var form = document.getElementById("form-section");
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, tableHeader);
app.start();
