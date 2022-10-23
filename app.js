let grades = [ 'A', 'A+', 'Fail', 'B', 'C']

let goodGrades = []

for ( let i = 0; i < grades.length; ++i) {
    if (grades [i] !== 'Fail'){
        goodGrades.push (grades[i])
    }
}

console.log(goodGrades)