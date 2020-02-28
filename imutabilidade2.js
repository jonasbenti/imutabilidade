const students = [
    {
        name: 'Jonas',
        grade: 7
    },
    {
        name: 'Carlos',
        grade: 4
    },
    {
        name: 'Flavia',
        grade: 10
    }

];
// Grade = nota
function getApprovedStudents(studentList) {
    return studentList.filter(student => student.grade >= 7);//filtra os alunos com grade >= 7 e insere no novo array
}


console.log('alunos aprovados');
console.log(getApprovedStudents(students));
console.log('\nLista de alunos');
console.log(students);