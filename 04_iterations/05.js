const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item) {
//   console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// });

// coding.forEach((item,idex,arr) => {
//     console.log(item,idex,arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
  {
    languageName: "Ruby",
    languageFile: "RB",
  },
];

myCoding.forEach((item)=>{
    console.log(item.languageName," : ",item.languageFile);
        // console.log(item.languageFile);
})
