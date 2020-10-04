module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let memory = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
       if (arr[i] === bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1] && arr[i] == memory[memory.length-1]) {
          memory.pop();
        } else {
          memory.push(arr[i]);
        }
      }
      else if (arr[i] === bracketsConfig[j][1]) {
        if (memory.length === 0) { return false; }
        if (bracketsConfig[j][0] === memory[memory.length-1]) {
          memory.pop();
        } else { return false;}
      }
     }
  }
  return memory.length === 0;
}
