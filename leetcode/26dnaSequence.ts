function findRepeatedSequence(s: string, k: number): string[] {
  const sequenceMap: Record<number | string, number | string> = {};

  let output: string[] = [];

  let generatedString = s.slice(0, k);
  sequenceMap[generatedString] = generatedString;

  for (let i = k; i < s.length; i++) {
    generatedString = generatedString.substring(1);
    generatedString = generatedString + s[i];

    
    if (sequenceMap.hasOwnProperty(generatedString)) {
        
      output.push(generatedString);
   
    } else {
      sequenceMap[generatedString] = generatedString;
    }
  }

  return output;
}

console.log(findRepeatedSequence("ATATATATATATATAT", 6));
