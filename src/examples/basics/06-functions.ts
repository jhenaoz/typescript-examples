namespace functions {
  let result;

  // 1 Optional paramters
  function getAverage(a: number, b: number, c?: number): string {
    let total = a + b;
    let count = 2;

    if (typeof c !== 'undefined') {
      total += c;
      count++;
    }

    const average = total / count;

    return 'The average is ' + average;
  }

  result = getAverage(4, 6); // 'The average is 5'
  console.log(`Optional paramters: ${result}`);


  // 2. Default Parameters
  // function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
  //   let concatenate = '';

  //   for (let i = beginAt; i < endAt; i++) {
  //     concatenate += items[i];

  //     if (i < (endAt - 1)) {
  //       concatenate += separator;
  //     }
  //   }

  //   return concatenate;
  // }


  // result = concatenate(['A', 'B', 'C']);  // 'A,B,C'
  // console.log(`Concatenate: ${result}`);


  // // 3. Rest parameters

  // function getAverages(...a: number[]): string {
  //   let total = 0;
  //   let count = 0;

  //   for (let i = 0; i < a.length; i++) {
  //     total += a[i];
  //     count++;
  //   }

  //   const average = total / count;

  //   return 'The average is ' + average;
  // }

  // result = getAverages(2, 4, 6, 8, 10); // 'The average is 6'
  // console.log(`Rest parameters: ${result}`);
}
