// Project
// Output: 15/20 => You got a C (75%)!
// Grade Groups: A 100-90, B 89-80, C 79-70, D 69-60, F 59-0

// Note: const was applied after finishng the "objects/const.js"

const calculateGrade = function (actualScore, totalScore) {

    if (typeof actualScore !== 'number') {
        throw Error('The actualScore parameter is not a number data type.')
    }
    if (typeof totalScore !== 'number') {
        throw Error('The totalScore parameter is not a number data type.')
    }

    if (actualScore > totalScore) {
        return 'The actual score is greater than the total score.';
    }
    if (actualScore < 0) {
        return 'Please provide proper actual score. Must be greater than 0.'
    }

    const determineGradePercentage = function (actualScore, totalScore) {
        return (actualScore / totalScore) * 100;
    };

    const determineGradeGroups = function (gradePercentage) {
        if (gradePercentage <= 100 && gradePercentage >= 90) {
            return 'A';
        } else if (gradePercentage <= 89 && gradePercentage >= 80) {
            return 'B';
        } else if (gradePercentage <= 79 && gradePercentage >= 70) {
            return 'C';
        } else if (gradePercentage <= 69 && gradePercentage >= 60) {
            return 'D';
        } else if (gradePercentage <= 59 && gradePercentage >= 0) {
            return 'F';
        } else {
            return 'N/A'
        }
    };

    const resultGradePercentage = determineGradePercentage(actualScore, totalScore);
    const resultGradeGroups = determineGradeGroups(resultGradePercentage);

    return `${actualScore}/${totalScore} => You got a ${resultGradeGroups} (${resultGradePercentage}%)!`;
};

try {
    console.log(calculateGrade(0, 20));
} catch (e) {
    console.log(e.message)
}
