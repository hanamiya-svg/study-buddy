import axios from 'axios';
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
} from 'data/images';

// Mentor interface used in your frontend
export interface mentors {
  id: number;
  name: string;
  title: string;
  avatar: string;
  buddy: number;
  rating: number;
  review: number;
  followed: boolean;
}

// Type of data returned by your API (matches MongoDB schema)
type BuddyApiResponse = {
  id: number;
  name: string;
  title: string;
  buddy: number;
  rating: number;
  bio: string;
  studentid: string;
};

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8];

// Fetch and transform buddy data into Mentor objects
export const fetchBuddies = async (): Promise<mentors[]> => {
  try {
    const response = await axios.get<BuddyApiResponse[]>('http://localhost:5000/api/buddies');
    const data = response.data;

    return data.map((item: BuddyApiResponse, index: number): mentors => ({
      id: item.id,
      name: item.name,
      title: item.title,
      avatar: avatars[index % avatars.length],
      buddy: item.buddy,
      rating: item.rating,
      review: Math.floor(Math.random() * 100), // Simulated review count
      followed: false, // Default value
    }));
  } catch (error) {
    console.error('Error fetching buddies:', error);
    return [];
  }
};
