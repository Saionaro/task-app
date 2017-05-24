import Moment from 'moment';

const tasksStore = {
   1: {
      id: 1,
      title: 'Задача из славного города Ярославль',
      description: 'Делаем задание из славного города Ярославль',
      createDate: new Moment().subtract(7, 'days'),
      showed: false,
      executor: 123,
      author: 1232,
      project: 1
   }, 
   2: {
      id: 2,
      title: 'Задача из славного города Северогорск',
      description: 'Делаем задание из славного города Северогорск',
      createDate: new Moment().subtract(2, 'days'),
      showed: false,
      executor: 1233,
      author: 122,
      project: 2
   },
   3: {
      id: 3,
      title: 'Задача из славного города Москва',
      description: 'Делаем задачечку из славного города МосквЭ',
      createDate: new Moment().subtract(1, 'days'),
      showed: false,
      executor: 1233,
      author: 1232,
      project: null
   }
};

const projectsStore = {
   1: {
      id: 1,
      title: 'Первый проект',
      description: 'Описание первого проекта - какой он крутой и вообще самый классный',
      createDate: new Moment().subtract(21, 'days'),
      author: 1232,
      team: [0, 122, 1232],
      tasks: [1]
   },
   2: {
      id: 2,
      title: 'Второй проект',
      description: 'Описание второго проекта - он конечно крутой, но не настолько, как превый',
      createDate: new Moment().subtract(42, 'days'),
      author: 122,
      team: [0, 122],
      tasks: [2]
   }
};

const usersStore = {
   0: {
      id: 0,
      photo: null,
      nickname: 'saio',
      name: 'Артем А.А.'
   },
   1233: {
      id: 1233,
      photo: null,
      nickname: 'vasil',
      name: 'Васильев М.Д.'
   },
   123: {
      id: 123,
      photo: null,
      nickname: 'ukr',
      name: 'Укропов М.Ч.'
   },
   122: {
      id: 122,
      photo: null,
      nickname: 'kolbas',
      name: 'Колбаскин И.П.'
   },
   1232: {
      id: 1232,
      photo: null,
      nickname: 'belok',
      name: 'Белкин О.М.'
   }
};

export default {
   tasksList: [1, 2, 3],
   currentUser: 0,
   tasksStore: tasksStore,
   projectsStore: projectsStore,
   usersStore: usersStore,
   currentTask: null
};
