interface Monument {
  name: string;
  heightInMeters: number;
}

// The array is typed using the Monument interface
const monuments: Monument[] = [];

// Each item added to the array is checked for type compatibility
monuments.push({
  name: 'Statue of Liberty',
  heightInMeters: 46
});

monuments.push({
  name: 'Peter the Great',
  heightInMeters: 96
});
monuments.push({
  name: 'Angel of the North',
  heightInMeters: 20
});

function compareMonumentHeights(a: Monument, b: Monument) {
  let compareResult = 0;

  if (a.heightInMeters > b.heightInMeters) {
    compareResult = -1;
  } else {
    compareResult = 1;
  }

  return compareResult;
}

// The array.sort method expects a comparer that accepts two Monuments
const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);

// Get the first element from the array, which is the tallest
const tallestMonument = monumentsOrderedByHeight[0];

console.log(tallestMonument.name); // Peter the Great
