import data from "./data.json";

export default function search() {
  const length = data.selections.length;

  let countA, countB, countC, countD, countE, countF; 
  countA =countB=countC=countD=countE=countF =0; 

  for (let i = 0; i < length; i++) {
    for(let j=0;j<data.groups.A.length;j++){
      if (data.selections[i] === data.groups.A[j]) {
        console.log(data.selections[i]);
        countA++;
      }
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < data.groups.B.length; j++) {
      if (data.selections[i] === data.groups.B[j]) {
        console.log(data.selections[i]);
        countB++;
      }
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < data.groups.C.length; j++) {
      if (data.selections[i] === data.groups.C[j]) {
        console.log(data.selections[i]);
        countC++;
      }
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < data.groups.D.length; j++) {
      if (data.selections[i] === data.groups.D[j]) {
        console.log(data.selections[i]);
        countD++;
      }
    }
  }


  for (let i = 0; i < length; i++) {
    for (let j = 0; j < data.groups.E.length; j++) {
      if (data.selections[i] === data.groups.E[j]) {
        console.log(data.selections[i]);
        countE++;
      }
    }
  }


  for (let i = 0; i < length; i++) {
    for (let j = 0; j < data.groups.F.length; j++) {
      if (data.selections[i] === data.groups.F[j]) {
        console.log(data.selections[i]);
        countF++;
      }
    }
  }

    
   
  

  console.log([countA, countB, countC, countD, countE, countF]);
  const resultArray = [countA, countB, countC, countD, countE, countF];
  const result = Math.max(countA, countB, countC, countD, countE, countF);
  const group = resultArray.indexOf(result);
  const groupArray = ["Group A","Group B","Group C","Group D","Group E","Group F"];
  console.log(group, "group");

  return [groupArray[group],result + " matches"]; 
}
