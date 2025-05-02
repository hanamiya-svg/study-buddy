import { useEffect, useState } from 'react';
import MentorCard from './MentorCard';
import SliderWrapper from 'components/common/SliderWrapper';
import { fetchBuddies } from 'data/mentors'; // the function that fetches buddy data
import { mentors } from 'data/mentors'; // the type

const MonthlyMentors = () => {
  const [buddies, setBuddies] = useState<mentors[]>([]);

  useEffect(() => {
    const getBuddies = async () => {
      const data = await fetchBuddies();
      setBuddies(data);
    };

    getBuddies();
  }, []);

  return <SliderWrapper title="Available Guides" SliderCard={MentorCard} data={buddies} />;
};

export default MonthlyMentors;
