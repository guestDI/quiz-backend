const mockQuizzes = [
  {
    id: '1',
    title: 'Angular Basics',
    createdAt: new Date(),
    private: false,
    rating: 4.5,
    questions: [{id: '1', type: 'open-ended', text: 'What is Angular?'}, {id: '2', type: 'open-ended', text:'What is a Component?'}],

  },
  {
    id: '2',
    title: 'RxJS Essentials',
    createdAt: new Date(),
    private: false,
    rating: 4.5,
    questions: [{id: '1', type: 'open-ended', text: 'What is an Observable?'}, {id: '2', type: 'open-ended', text:'What is a Subject?'}],
  },
  {
    id: '3',
    title: 'Reactive Forms',
    createdAt: new Date(),
    private: false,
    rating: 4,
    questions: [{id: '1', type: 'open-ended', text: 'What is an Reactive Forms?'}, {id: '2', type: 'open-ended', text:'What is a Subject?'}],
  },
  {
    id: '4',
    title: 'Dependency Injection',
    createdAt: new Date(),
    private: true,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What is an Dependency Injection?'}, {id: '2', type: 'open-ended', text:'What is a Subject?'}],
  },
  {
    id: '5',
    title: 'Pipes',
    createdAt: new Date(),
    private: true,
    rating: null,
    questions: [{id: '1', type: 'open-ended', text: 'What are Pipes?'}],
  },
];

exports.getQuizzes = async () => mockQuizzes;
