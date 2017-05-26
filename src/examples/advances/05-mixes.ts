function generateCode(): string | number {
  const random = Math.floor(Math.random() * 100) + 1;

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
