// PERSON CLASS
class person {
  constructor(Name, Age, Marital_status, Nationality, Occupation, Education) {
    this.Name = Name;
    this.Age = Age;
    this.Marital_status = Marital_status;
    this.Nationality = Nationality;
    this.Occupation = Occupation;
    this.Education = Education;
  }
}

const Candidate_1 = new person(
  "Karthick",
  24,
  "single",
  "Indian",
  "Mechanical-Engineer",
  "B.E"
);
console.log(Candidate_1);
