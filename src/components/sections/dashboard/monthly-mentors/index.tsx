import MentorCard from './MentorCard';
import SliderWrapper from 'components/common/SliderWrapper';
import { mentors } from 'data/mentors';

const MonthlyMentors = () => {
  return <SliderWrapper title="Available Guides" SliderCard={MentorCard} data={mentors} />;
};

export default MonthlyMentors;
