const mockedUsers = [
  {
    id: '1',
    email: 'test@example.com',
    lastVisitedAt: new Date(),
  },
  {
    id: 'NfDeS29aZJNrcjmn8eaEFmicjxq2',
    email: 'test.user@email.com',
    lastVisitedAt: new Date(),
  },
];

exports.checkEmailExists = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockedUsers.find(user => user.email === email);
      resolve(user);
    }, 1000);
  });
};
