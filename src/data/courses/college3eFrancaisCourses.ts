import { OfficialIvorianCourse } from '../../types';
import { COLLEGE_3E_FRANCAIS_PART1_COURSES } from './college3eFrancaisPart1Courses';
import { COLLEGE_3E_FRANCAIS_PART2_COURSES } from './college3eFrancaisPart2Courses';

export const COLLEGE_3E_FRANCAIS_COURSES: OfficialIvorianCourse[] = [
  ...COLLEGE_3E_FRANCAIS_PART1_COURSES,
  ...COLLEGE_3E_FRANCAIS_PART2_COURSES
];
