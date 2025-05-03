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
  Last_name: string;
  First_name: string;
  Major: string;
  Academic_year: string;
  Bio: string;
  Mentees: number;
  avatar: string;
  request: boolean;
}




export const mentors: Mentor[] = [
  {
    "id": 1,
    "Last_name": "Самбууням",
    "First_name": "Оч-Уянга",
    "Major": "Програм хангамж",
    "Academic_year": "3-р курс",
    "Bio": "Вэб хөгжүүлэлт болон хиймэл оюун сонирхдог.",
    "Mentees": 2,
    "avatar": Avatar1,
    "request": false
  },
  {
    "id": 2,
    "Last_name": "Энхбаатар",
    "First_name": "Тэргэл",
    "Major": "Компьютерын ухаан",
    "Academic_year": "2-р курс",
    "Bio": "Алгоритм бодох болон шатар тоглох дуртай.",
    "Mentees": 1,
    "avatar": Avatar2,
    "request": false
  },
  {
    "id": 3,
    "Last_name": "Цэрэндорж",
    "First_name": "Номин",
    "Major": "Өгөгдлийн шинжлэх ухаан",
    "Academic_year": "4-р курс",
    "Bio": "Өгөгдөл боловсруулах болон харагдах байдалд сонирхолтой.",
    "Mentees": 3,
    "avatar": Avatar3,
    "request": false
  },
  {
    "id": 4,
    "Last_name": "Ганболд",
    "First_name": "Мөнх-Эрдэнэ",
    "Major": "Мэдээллийн технологи",
    "Academic_year": "1-р курс",
    "Bio": "Шинэ оюутан бөгөөд сурах эрмэлзэлтэй.",
    "Mentees": 0,
    "avatar": Avatar4,
    "request": false
  },
  {
    "id": 5,
    "Last_name": "Даваадорж",
    "First_name": "Солонго",
    "Major": "Кибер аюулгүй байдал",
    "Academic_year": "3-р курс",
    "Bio": "Ёс зүйн хакер болон систем хамгаалалт сонирхдог.",
    "Mentees": 2,
    "avatar": Avatar5,
    "request": false
  },
  {
    "id": 6,
    "Last_name": "Чимэд",
    "First_name": "Түвшинтөгс",
    "Major": "Програм хангамж",
    "Academic_year": "2-р курс",
    "Bio": "Сервер талын хөгжүүлэлт, Linux сонирхдог.",
    "Mentees": 1,
    "avatar": Avatar6,
    "request": false
  },
  {
    "id": 7,
    "Last_name": "Нарантуяа",
    "First_name": "Энхжин",
    "Major": "Хиймэл оюун ухаан",
    "Academic_year": "4-р курс",
    "Bio": "Хэлний боловсруулалтын судалгаанд оролцдог.",
    "Mentees": 4,
    "avatar": Avatar7,
    "request": false
  },
  {
    "id": 8,
    "Last_name": "Батсүх",
    "First_name": "Билгүүн",
    "Major": "Компьютерийн инженер",
    "Academic_year": "1-р курс",
    "Bio": "Ухаалаг төхөөрөмж бүтээх, робот судлах дуртай.",
    "Mentees": 0,
    "avatar": Avatar8,
    "request": false
  }
];
