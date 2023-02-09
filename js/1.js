let dog={breed:"边境牧羊犬",
sound:"Wooh",getBreed:()=>{
return this.breed;
},
getSound:function(){return this.sound;}
};
console.log(dog.getBreed(),dog.getSound());