

export const  formatNumberWithSpaces = (number) => {
  
    if(number) {
        let numStr = number.toString();
  
    if (numStr.length > 4) {
      let formattedNum = '';
  
      for (let i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
        if (count > 0 && count % 3 === 0) {
          formattedNum = ' ' + formattedNum;
        }
        formattedNum = numStr[i] + formattedNum;
      }
  
      return formattedNum;
    }
    return numStr;
    }
}