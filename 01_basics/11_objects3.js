// destructuring 

const course = {
    coursename: "JS hindi",
    price: "999",
    courseTeacher: "Samridh"
}

// console.log(course.courseTeacher);

const {courseTeacher: Teacher} = course

console.log(Teacher);

