const getGrade = (score) => {
    let grade = null;
    if (score >= 70 && score <= 100) {
        return grade = 'A';
    } else if (score >= 60 && score < 70) {
        return grade = 'B';
    } else if (score >= 50 && score < 60) {
        return grade = 'C';
    } else if (score >= 40 && score < 50) {
        return grade = 'D';
    }else if (score >= 30 && score < 40) {
        return grade = 'E';
    }else if (score >= 0 && score < 30) {
        return grade = 'F';
    } else {
        return 'invalid score';
    }
}
module.exports = getGrade;