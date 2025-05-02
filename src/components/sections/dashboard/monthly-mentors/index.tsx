import MentorCard from './MentorCard';
import SliderWrapper from 'components/common/SliderWrapper';
import { mentors } from 'data/mentors'; // Static array of mentors

const MonthlyMentors = () => {
  return <SliderWrapper title="Available Mentors" SliderCard={MentorCard} data={mentors} />;
};

export default MonthlyMentors;
