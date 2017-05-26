namespace mixes {
  function generateCode(): string | number {
    const random = Math.floor(Math.random() * 20) + 1;

    if (random < 10) {
      return `0${random}`;
    }

    return random;
  }

  let code: string | number;
  code = 1;
  code = '1';
  // code = false; // Error
  code = generateCode();

  console.log(code);

  interface Book {
    title: string;
    author: string;
  }

  interface Topic {
    mainTopic: string;
    secondTopic: string;
  }

  function hybridClass(): Book & Topic {
    return {
      title: 'book one',
      author: 'someone',
      mainTopic: 'Typescript',
      secondTopic: 'syntax'
    };
  }
  console.log(hybridClass());
}
