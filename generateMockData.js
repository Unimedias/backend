const jsf = require('json-schema-faker');
const mockDataSchema = require('./mockDataSchema');
const fs = require('fs');

const uniqByObjProp = (objArr, objProp) => {
  const index = [];

  return objArr.filter(item => {
    return index.indexOf(item[objProp]) >= 0 ? false : index.push(item[objProp]);
  });
}

const sortByProp = (prop) => (a, b) => {
  if (a[prop] > b[prop]) {
    return 1;
  }

  if (a[prop] < b[prop]) {
    return -1;
  }

  return 0;
}

const sortByPropLength = (prop) => (a, b) => {
  if (a[prop].length > b[prop].length) {
    return 1;
  }

  if (a[prop].length < b[prop].length) {
    return -1;
  }

  return 0;
}

const { student } = jsf.generate(mockDataSchema);

const uniqStudentYears = uniqByObjProp(student.years, 'label');

uniqStudentYears.sort(sortByProp('label'));
student.years = uniqStudentYears;

student.years.forEach(year => {
  const uniqStudentYearSubjects = uniqByObjProp(year.subjects, 'name');

  uniqStudentYearSubjects.sort(sortByProp('name'));
  year.subjects = uniqStudentYearSubjects;
    
  year.subjects.forEach(subject => {
    const uniqStudentYearSubjectExams = uniqByObjProp(subject.exams, 'label');
    const uniqStudentYearSubjectAssigns = uniqByObjProp(subject.assigns, 'label');

    uniqStudentYearSubjectExams.sort(sortByProp('label'));
    uniqStudentYearSubjectAssigns.sort(sortByProp('label'));
    uniqStudentYearSubjectAssigns.sort(sortByPropLength('label'));
    subject.exams = uniqStudentYearSubjectExams;
    subject.assigns = uniqStudentYearSubjectAssigns;
  });
});

fs.writeFile('./db.json', JSON.stringify({ student }), (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Mock data generated.');
});
