let ACIT1420 = {
    name: "System Administrators",
    code: "1420",
    program: "CIT",
}

let ACIT1620 = {
    name: "Web Fundamental Technologies",
    code: "ACIT 1620",
    program: "CIT",
}

let COMM1116 = {
    name: "Business Communications",
    code: "COMM 1116",
    program: "CIT",
}

const courseList = [ACIT1420, ACIT1620, COMM1116]

let input = ""
let initial = 0;

do {
    if (initial === 0) {
    input = prompt ("Enter a 4 digit course number");
    }
    else{
        input = prompt ("Not a valid course code");
    }
    initial++
}

while(input.length != 4 || (isNaN(Number(input))));

let check = 0;

for (let course of courseList){

    if(course.code.includes(input))
    
    {
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
    }
    else{
        check = check + 1;
    }
}


if (check === courseList.length){
    let newinput = {
        code: input, name: null,
    }

courseList.push(newinput);

console.log("success new course added");

}


