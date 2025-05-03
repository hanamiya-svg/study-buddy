import { mentors } from 'data/mentors'; // Static array of mentors
import SliderWrapper from 'components/common/SliderWrapper';
import MentorCard from './MentorCard';

interface MonthlyMentorsProps {
  searchText: string;
}

const MonthlyMentors = ({ searchText }: MonthlyMentorsProps) => {
  
  const filteredMentors = mentors.filter((mentor) => {
    const search = searchText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return (
      mentor.First_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search) ||
      mentor.Last_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search) ||
      mentor.Major.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search) ||
      mentor.Bio.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)
    );
  });

  // Log the filtered mentors for debugging
  console.log('Filtered Mentors:', filteredMentors);

  return (
    <SliderWrapper
      title="Available Mentors"
      SliderCard={MentorCard}
      data={filteredMentors}
    />
  );
};

export default MonthlyMentors;
