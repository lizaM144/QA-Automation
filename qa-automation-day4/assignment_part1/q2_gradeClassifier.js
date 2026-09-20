// Q2
// Task: Write getGrade(score) that returns a letter grade: 
// 90+ = 'A', 80-89 = 'B', 70-79 = 'C', 60-69 = 'D', below 60 = 'F'.
const getGrade = (score) => {
    if (score >=90) {
        console.log('A');
    }
    else if (score >=80) {
        console.log('B');
    }
    else if ( score >=70) {
        console.log('C');
    }
    else if (score >=60) {
        console.log('D');
    }
    else {
        console.log('F');
    }
}
getGrade(95);
getGrade(75);
getGrade(69);
getGrade(59);