import { OfficialIvorianCourse } from '../../types';
import { COLLEGE_3E_MATHS_PART1_COURSES } from './college3eMathsPart1Courses';
import { COLLEGE_3E_MATHS_PART2_COURSES } from './college3eMathsPart2Courses';

export const COLLEGE_3E_MATHS_COURSES: OfficialIvorianCourse[] = [
  ...COLLEGE_3E_MATHS_PART1_COURSES,
  ...COLLEGE_3E_MATHS_PART2_COURSES
];
