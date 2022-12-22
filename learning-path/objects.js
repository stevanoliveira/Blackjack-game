
let course = {
  title: "Learn CSS Grid for free",
  lessosn: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "CSS"],
  sayHello: function() {
    console.log("Hello!")
  }
}

console.log( course["tags"] );

course.sayHello()