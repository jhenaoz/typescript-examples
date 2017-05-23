namespace destructuring {
  const medals: string[] = ['gold', 'silver', 'bronze'];
  const [first, second, third] = medals;

  console.log(first);


  const person = {
    name: 'Audey',
    address: '123 Main Street',
    phone: '555-1212'
  };
  const {name, address, phone} = person;

  console.log(address);
}

