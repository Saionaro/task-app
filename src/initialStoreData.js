import Moment from 'moment';

const tasksStore = {
   1: {
      id: 1,
      title: 'Макет обложки',
      description: 'Разработай макет обложки номера за май 2017 года. Я думаю стоит поставить в фокус прошедшую конференцию.',
      createDate: new Moment().subtract(1, 'days'),
      showed: false,
      executor: 123,
      author: 1232,
      executionDate: new Moment(),
      executionText: 'Готово, можешь смотреть',
      project: 1
   }, 
   2: {
      id: 2,
      title: 'Статья о новых возможностях JS',
      description: 'Несомннено нужно подробно рассмотреть такие механизмы, как async/await и нативный import/export. В остальном - полагаюсь на тебя и твой профессионализм.',
      createDate: new Moment().subtract(2, 'days'),
      showed: false,
      executor: 1233,
      author: 122,
      executionDate: null,
      executionText: null,
      project: 2
   },
   3: {
      id: 3,
      title: 'Заметка о реализации БЭМ-методологии в Яндексе',
      description: 'Сабж. Подробно все распиши и вставь большие-красивые картинки. Расположим в середине номера.',
      createDate: new Moment().subtract(3, 'days'),
      showed: false,
      executor: 1233,
      author: 1232,
      executionDate: null,
      executionText: null,
      project: 1
   }
};

const projectsStore = {
   1: {
      id: 1,
      title: 'Выпуск майского номера',
      description: 'Очередной выпуск нашего журнала - "Современный  JavaScript и методы рационального мышления"! Предстоит много работы.',
      createDate: new Moment().subtract(21, 'days'),
      executionDate: null,
      author: 1232,
      team: [0, 122, 1232],
      tasks: [1, 3]
   },
   2: {
      id: 2,
      title: 'Планируем июньский номер',
      description: 'Заранее создал проектик, чтобы агрегировать задачи для июньского номера',
      createDate: new Moment().subtract(42, 'days'),
      executionDate: null,
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
   modal: {
      active: {}
   },
   task: {
      tasksList: [1, 2, 3],
      tasksStore: tasksStore
   },
   user: {
      usersStore: usersStore,
      currentUser: 0,
      choosers: {}
   },
   project: {
      projectsList: [1, 2],
      projectsStore: projectsStore
   }
};
