const { v4 } = require('uuid');

const mockQuizzes = [
  {
    id: '1',
    title: 'Angular Basics',
    createdAt: new Date(),
    userId: 'NfDeS29aZJNrcjmn8eaEFmicjxq2',
    private: false,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What is Angular?'}, {id: '2', type: 'open-ended', text:'What is a Component?'}],
  },
  {
    id: '2',
    title: 'RxJS Essentials',
    createdAt: new Date(),
    userId: null,
    private: false,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What is an Observable?'}, {id: '2', type: 'open-ended', text:'What is a Subject?'}],
  },
  {
    id: '3',
    title: 'Reactive Forms',
    createdAt: new Date(),
    userId: null,
    private: false,
    rating: 4,
    questions: [{id: '1', type: 'open-ended', text: 'What is an Reactive Forms?'}, {id: '2', type: 'open-ended', text:'What is a Subject?'}],
  },
  {
    id: '4',
    title: 'Dependency Injection',
    createdAt: new Date(),
    userId: null,
    private: true,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What is an Dependency Injection?'}, {id: '2', type: 'open-ended', text:'What is a Subject?'}],
  },
  {
    id: '5',
    title: 'Pipes',
    createdAt: new Date(),
    userId: 'NfDeS29aZJNrcjmn8eaEFmicjxq2',
    private: true,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What are Pipes?'}],
  },
  {
    id: '6',
    title: 'Directives',
    createdAt: new Date(),
    userId: 'NfDeS29aZJNrcjmn8eaEFmicjxq2',
    private: false,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What are Directives?'}],
  },
  {
    id: '7',
    title: 'HTTP Client',
    createdAt: new Date(),
    userId: 'NfDeS29aZJNrcjmn8eaEFmicjxq2',
    private: true,
    rating: 3,
    questions: [{id: '1', type: 'open-ended', text: 'What is Http Client?'}],
  },
  {
    id: '8',
    title: 'Lifecycle Hooks',
    createdAt: new Date(),
    userId: null,
    private: false,
    rating: 5,
    questions: [{id: '1', type: 'open-ended', text: 'Name lifecycle hooks in Angular.'}],
  },
];

exports.getQuizzes = async (page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  const endIndex = Number(startIndex) + Number(limit);

  const publicQuizzes = mockQuizzes.filter(quiz => !quiz.private);

  const quizzes = publicQuizzes.slice(startIndex, endIndex);

  return {
    page,
    limit,
    total: publicQuizzes.length,
    quizzes,
  };
};

exports.getQuizzesByUserId = async (userId, page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  const endIndex = Number(startIndex) + Number(limit);

  const filteredQuizzes = mockQuizzes.filter(quiz => quiz.userId === userId);

  const quizzes = filteredQuizzes.slice(startIndex, endIndex);

  return {
    page,
    limit,
    total: filteredQuizzes.length,
    quizzes,
  };
}

exports.addQuiz = async (quiz) => {
  return quiz;
}
