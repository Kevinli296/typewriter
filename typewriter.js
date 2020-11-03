const sentence = 'hello there from lighthouse labs';
let delay = 0;

for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);

}

setTimeout(() => {
  console.log();
}, sentence.length * 50);