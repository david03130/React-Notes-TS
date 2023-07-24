export const arrayTetsing = () => {
  // Behaviour isn't the same when working with primitives or with objects. Changing the value of a variable that stores an element that comes from a
  // string array won't affect in any way to the array.
  // But changing a property from a variable that stores an element that comes from an array will change the array's correspondent element, since that variable stores a
  // reference in memory to that object stored in the array.
  let objArray = [
    { name: "David", surname: "Salcedo" },
    { name: "Aisha", surname: "Lopera" },
    { name: "Albert", surname: "Pineda" },
  ];
  console.log(objArray);

  let david = objArray[0];
  console.log(david);

  david.surname = "Test";
  console.log(david);

  console.log(objArray);

  objArray.push(david);

  david.name = "Test";

  david = { name: "Hello", surname: "Goodbye" };
  console.log(objArray);

  objArray = [{ name: "Raquel", surname: "Salamanca" }];
  console.log(objArray);
  console.log(david);
  // let testArray = ["1", "2", "3"];
  // console.log(`Original array: ${testArray}`);
  // let secondElem = testArray[1];
  // console.log(`Second element of the array: ${secondElem}`);

  // secondElem = "5";
  // console.log(
  //   `The second element variable has been changed to have the value: ${secondElem}`
  // );
  // console.log(`The array is now storing these values: ${testArray}`);

  // test = ["6", "7", "8"];
  // console.log(`New array: ${test}`);
  // console.log(
  //   `The second element variable is storing this value: ${secondElem}`
  // );
  // secondElem = test[1];
  // console.log(`After a reasingment the value is: ${secondElem}`);
};
