class GradeForm {

  onSumbit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;
  }
}
