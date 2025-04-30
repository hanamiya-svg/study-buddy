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

export interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  buddy: number;
  rating: number;
  review: number;
  followed: boolean;
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Curious George',
    title: 'Программ хангамж',
    avatar: Avatar1,
    buddy: 40,
    rating: 4.7,
    review: 750,
    followed: false,
  },
  {
    id: 2,
    name: 'Abraham Lincoln',
    title: 'Компьютерын ухаан',
    avatar: Avatar2,
    buddy: 32,
    rating: 4.9,
    review: 510,
    followed: true,
  },
  {
    id: 3,
    name: 'Alex Stanton',
    title: 'Мэдээлэлийн технологи',
    avatar: Avatar3,
    buddy: 60,
    rating: 4.9,
    review: 970,
    followed: false,
  },
  {
    id: 4,
    name: 'Richard Kyle',
    title: 'Мультимедиа',
    avatar: Avatar4,
    buddy: 60,
    rating: 4.7,
    review: 730,
    followed: false,
  },
  {
    id: 5,
    name: 'Brian Robinson',
    title: 'Сэтгэл зүй',
    avatar: Avatar5,
    buddy: 28,
    rating: 4.8,
    review: 370,
    followed: true,
  },
  {
    id: 6,
    name: 'Jakob Saris',
    title: 'Улс төр',
    avatar: Avatar6,
    buddy: 60,
    rating: 4.8,
    review: 870,
    followed: false,
  },
  {
    id: 7,
    name: 'Jeremy Zucker',
    title: 'Маркетинг',
    avatar: Avatar7,
    buddy: 40,
    rating: 4.7,
    review: 750,
    followed: false,
  },
  {
    id: 8,
    name: 'Jason Statham',
    title: 'Санхүү',
    avatar: Avatar8,
    buddy: 60,
    rating: 4.9,
    review: 910,
    followed: true,
  },
];
