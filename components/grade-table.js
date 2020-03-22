class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    console.log(grades);
    var tableofGrades = document.querySelector("tbody");
    tableofGrades.innerHTML = "";
    for(var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");
      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;
      row.appendChild(name);
      row.appendChild(course);
      row.appendChild(grade);
      row.classList.add('table-sm');
      if(i === 0 || i % 2 === 0) {
        row.classList.add("table-secondary");
      }
      tableofGrades.appendChild(row);
    }
  }
}
