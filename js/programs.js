let coursesDiv = document.getElementsByClassName("coursesDiv");

let courses = [
  {
    id: 1,
    name: "Group Course",
    duration: 3,
    sessions: 24,
    price: 8000,
    mrp: 8800,
    pps: 334,
  },
  {
    id: 2,
    name: "Group Course",
    duration: 4,
    sessions: 48,
    price: 12000,
    mrp: 9600,
    pps: 412,
  },
  {
    id: 3,
    name: "Group Course",
    duration: 3,
    sessions: 36,
    price: 14400,
    mrp: 12800,
    pps: 446,
  },
]

coursesDiv = courses.map({
    let card = document.createElement("div");
    card.class = "cardDiv";

    let head = document.createElement("h1");
    head.value = courses
    


})