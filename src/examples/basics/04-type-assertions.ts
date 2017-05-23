interface House {
    bedrooms: number;
    bathrooms: number;
}

interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}

const avenueRoad: House = {
  bedrooms: 11,
  bathrooms: 10
};

// Errors: Cannot convert House to Mansion
const mansion: Mansion = avenueRoad;

// Works
// const mansionConvert: Mansion = <Mansion> avenueRoad;  // Tslint error: "no-angle-bracket-type-assertion": false
const mansionConvert = avenueRoad as Mansion;
console.log(mansionConvert);
