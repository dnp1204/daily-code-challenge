/**
 * Company: Airbnb.
 *
 * We're given a hashmap associating each courseId key with a list of courseIds values,
 * which represents that the prerequisites of courseId are courseIds. Return a sorted
 * ordering of courses such that we can finish all courses.
 *
 * Return null if there is no such ordering.
 * For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []},
 * should return ['CSC100', 'CSC200', 'CSCS300'].
 */
function findCourses(courses) {
  let result = [];

  const dfs = function(key, path) {
    if (!courses[key]) return result;
    if (courses[key].length === 0) {
      if (path.length > result.length) {
        result = path;
      }
      return result;
    }

    for (const course of courses[key]) {
      dfs(course, [...path, course]);
    }
  };

  for (const key of Object.keys(courses)) {
    dfs(key, [key]);
  }

  return result.sort();
}

const courses = {
  CSC300: ['CSC100', 'CSC200'],
  CSC200: ['CSC100'],
  CSC100: []
};
const courses2 = {
  CSC300: ['CSC500', 'CSC400'],
  CSC200: ['CSC600'],
  CSC100: []
};
const courses3 = {
  CSC400: ['CSC100', 'CSC200', 'CSC300'],
  CSC300: ['CSC100', 'CSC200'],
  CSC200: ['CSC100'],
  CSC100: []
};

const courses4 = {
  CSC400: ['CSC200'],
  CSC300: ['CSC100', 'CSC200'],
  CSC200: ['CSC100'],
  CSC100: []
};
findCourses(courses4);
