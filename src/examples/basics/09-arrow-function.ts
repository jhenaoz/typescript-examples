namespace arrowFunction {
  // Arrow function example
  const makeName = (first: string, last: string) => ({firstName: first, lastName: last});
  console.log(makeName('Luis', 'Bolaños'));


  // Preserving scope with arrow syntax
  const ScopeLosingExample = {
    text: 'Property from lexical scope',
    // tslint:disable-next-line
    run: function () {
      setTimeout(function(this: any) {
        // tslint:disable-next-line
        console.log(this.text);
      }, 1000);
    }
  };
  // alerts undefined
  ScopeLosingExample.run();


  const ScopePreservingExample = {
    text: 'Property from lexical scope',
    // tslint:disable-next-line
    run: function () {
      setTimeout(() => { console.log(this.text); }, 1000); }
  };
  // alerts "Property from lexical scope"
  ScopePreservingExample.run();

}
