var table = document.getElementById("grade-table");
var gradeTable = new GradeTable(table);
var header = document.getElementById("student-table-header");
var tableHeader =  new PageHeader(header);
var app = new App(gradeTable, tableHeader);
app.start();
