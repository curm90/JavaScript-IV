// CODE here for your Lambda Classes
class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.location = data.location;
  }
  speak() {
    return `Hello my name is ${this.name} i am from ${this.location}.`
  }
}

const liam = new Person({
  name: 'Liam',
  age: 29,
  location: 'UK'
})

class Instructor extends Person {
  constructor(data) {
    super(data);
    this.speciality = data.speciality;
    this.favLanguage = data.favLanguage;
    this.catchPhrase = data.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  markWork(student) {
    let randomNum = (Math.floor(Math.random()*20)) * (Math.random() > 0.5 ? 1 : -1);
    student.grade += randomNum;
    return student.grade >= 100 ? student.grade = 100 : student.grade + 1;
  }
}

const gabe = new Instructor({
  name: 'Gabe',
  age: 42,
  location: 'USA',
  speciality: 'Web development',
  favLanguage: 'JavaScript',
  catchPhrase: 'Don\'t pollute the soup'
})

class Student extends Person {
  constructor(data) {
    super(data);
    this.previousBackground = data.previousBackground;
    this.className = data.className;
    this.favSubjects = data.favSubjects;
    this.grade = Math.floor(Math.random() * 100);
  }
  listSubjects() {
    return this.favSubjects.forEach(item => console.log(item));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge ${subject}`);
  }
  graduate() {
    if (this.grade >= 70) {
      return `${this.name} Graduated Lambda-School.`
    } else {
      return `${this.name} needs some extra lessons.`
    }
  }
}

const alex = new Student({
  name: 'Alex',
  age: 22,
  location: 'Canada',
  previousBackground: 'Data Science',
  className: 'Alex22',
  favSubjects: ['Philosophy', 'Physics', 'Economics'],
})

class ProjectManager extends Instructor {
  constructor(data) {
    super(data);
    this.gradClassName = data.gradClassName;
    this.favInstructor = data.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const bossMan = new ProjectManager({
  name: 'Barney',
  age: 44,
  location: 'USA',
  speciality: 'Bossiness',
  favLanguage: 'Russian',
  catchPhrase: 'I\'m the boss',
  gradClassName: 'The boss',
  favInstructor: 'Gabe'
})