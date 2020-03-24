class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    console.log(grades);
    var tableOfGrades = document.querySelector("tbody");
    tableOfGrades.innerHTML = "";
    var p = document.getElementById("no-grades")
    if(grades.length === 0)
      p.classList.remove("d-none");
    else
      p.classList.add("d-none");

    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      tableOfGrades.appendChild(row);
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tRow = document.createElement("tr");
    var studentName = document.createElement("td");
    var courseName = document.createElement('td');
    var studentGrade = document.createElement("td");
    var buttonData = document.createElement("td");
    var deleteButton = document.createElement("button");
    studentName.textContent = data.name;
    courseName.textContent = data.course;
    studentGrade.textContent = data.grade;
    deleteButton.textContent = "DELETE";
    deleteButton.className = "btn btn-danger btn-sm"
    deleteButton.addEventListener("click", function () {
      deleteGrade(data.id);
    })
    buttonData.appendChild(deleteButton);
    tRow.appendChild(studentName);
    tRow.appendChild(courseName);
    tRow.appendChild(studentGrade);
    tRow.appendChild(buttonData);
    return tRow;
  }
}
