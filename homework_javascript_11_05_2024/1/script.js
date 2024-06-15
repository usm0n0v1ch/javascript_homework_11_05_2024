
let obj = {
    name: "amir",
    age: 20,
    city: "Tashkent"
  };

  try {
    obj.calculate("Hello World");
  } catch (error) {
    console.log("Ошибка:", error.message); 
  }