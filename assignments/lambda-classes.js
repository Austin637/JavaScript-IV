// ------------------------------------- Classes ------------------------------------- 
class Person {
    constructor(personAttr) {
     this.name = personAttr.name;
     this.age = personAttr.age;
     this.location = personAttr.location;
     this.gender = personAttr.gender;
    }
    speak() {
     return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
   }   
   
   class Instructors extends Person {
    constructor(instructorsAttr) {
     super(instructorsAttr);
     this.specialty = instructorsAttr.specialty;
     this.favLanguage = instructorsAttr.favLanguage;
     this.catchPhrase = instructorsAttr.catchPhrase;
    }
    demo(subject) {
     return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
     return `${student.name} receives a perfect score on ${subject}`;
    }
   }   
   
   class Students extends Person {
    constructor(studentsAttr) {
     super(studentsAttr);
     this.previousBackground = studentsAttr.previousBackground;
     this.className = studentsAttr.className;
     this.favSubjects = studentsAttr.favSubjects;
    }
    listsSubjects() {
     return `${this.name} likes ` + this.favSubjects.map(function(subject) {
      return subject;
     }).join(", ");
    }
    PRAssignment(subject) {
     return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
     return `${this.name} has begun sprint challenge on ${subject}`;
    }
   }
   
   class ProjectManagers extends Instructors {
    constructor(projectManagersAttr) {
     super(projectManagersAttr);
     this.gradClassName = projectManagersAttr.gradClassName;
     this.favInstructor = projectManagersAttr.favInstructor;
    }
    standUp(channel) {
     return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
     return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
   }
   
   // ------------------------------------- Student Objects -------------------------------------    
   const student_austinEsp = new Students({
    name: 'Austin',
    age: 30,
    location: 'Riverside, CA',
    gender: 'M',
    previousBackground: true,
    className: 'WEBPT4',
    favSubjects: [
     'HTML5',
     'FlexBox',
     'JavaScript'
    ]
   });
   
   const student_matt = new Students({
    name: 'Matthew',
    age: 32,
    location: 'Boise, ID',
    gender: 'M',
    previousBackground: true,
    className: 'WEBPT4',
    favSubjects: [
     'CSS',
     'HTML'
    ]
   });   
   
   const student_junior = new Students({
    name: 'Junior',
    age: 26,
    location: 'New York, NY',
    gender: 'M',
    previousBackground: false,
    className: 'WEBPT4',
    favSubjects: [
     'JavaScript',
     'HTML'
    ]
   });
   
   // ------------------------------------- Instructor Objects -------------------------------------    
   const instructor_cam = new Instructors({
    name: 'Cameron',
    age: 38,
    location: 'Los Angeles, CA',
    gender: 'M',
    specialty: 'JavaScript',
    favLanguage: 'RoR',
    catchPhrase: 'Watch the videos again.'
   });
   
   const instructor_tylar = new Instructors({
    name: 'Tylar',
    age: 33,
    location: 'Houston, Tx',
    gender: 'F',
    specialty: 'CSS',
    favLanguage: 'JavaScript',
    catchPhrase: 'Heres your assignment.'
   });
   
   // ------------------------------------- PM Objects -------------------------------------    
   const pm_jefferey = new ProjectManagers({
    name: 'Jefferey',
    age: 27,
    location: 'San Fran, CA',
    gender: 'M',
    gradClassName: 'WEBPT03',
    favInstructor: 'Cameron',
    favLanguage: 'JavaScript',
   });
   
   const pm_lola = new ProjectManagers({
    name: 'Lola',
    age: 28,
    location: 'Roswell, NM',
    gender: 'F',
    gradClassName: 'WEBPT03',
    favInstructor: 'Cameron',
    favLanguage: 'JavaScript',
    catchPhrase: 'Im moving on up.'
   });
   
   // ------------------------------------- Testing Objects -------------------------------------    
   console.log(student_austinEsp);
   console.log(student_matt);
   console.log(student_junior);
   console.log(pm_jefferey);
   console.log(pm_lola);
   console.log(instructor_cam);
   console.log(instructor_tylar);
   
   // ------------------------------------- Testing Methods -------------------------------------    
   console.log(student_austinEsp.listsSubjects());
   console.log(student_austinEsp.favSubjects);
   console.log(student_austinEsp.PRAssignment('React'));
   console.log(student_austinEsp.sprintChallenge('Computers III'));
   console.log(instructor_cam.demo('IoT'));
   console.log(instructor_cam.grade(student_austinEsp, 'JavaScript IV'));
   console.log(pm_jefferey.standUp('webpt4jeff'));
   console.log(pm_jefferey.debugsCode(student_matt, 'CSS'));