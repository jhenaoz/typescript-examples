let typeUser: 'Manager' = 'Manager';
// typeUser = 'Admin';  // Error
let role: 'Manager' | 'No Manager' = 'No Manager';
// role = 'other';  // Error

// Definition of new types
type empCategory = 'Manager' | 'No Manager';
let empCategory: empCategory = 'Manager';
// empCategory = 'other';  // Erroe

console.log(empCategory);
