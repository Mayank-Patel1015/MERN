/*
  Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
  {
    name: "Sulforaphane",
    treatableSymptoms: [
      "dementia",
      "alzheimer's",
      "inflammation",
      "neuropathy",
    ],
  },
  {
    name: "Longvida Curcumin",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "depression",
      "arthritis",
      "anxiety",
    ],
  },
  {
    name: "Hericium erinaceus",
    treatableSymptoms: [
      "anxiety",
      "cognitive decline",
      "depression"],
  },
  {
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
      "ageing",
      "low NAD",
      "obesity",
      "mitochondrial myopathy",
      "diabetes",
    ],
  },
  {
    name: "PainAssassinator",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "cramps",
      "headache",
      "toothache",
      "back pain",
      "fever",
    ],
  },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null


// psuedocode
// create an answer array
// 

function webMD(ailments, meds) {
  let numAilments = 0
  let numTreatedArr = []
  for (let med of meds) {
    numAilments = 0
    for (let ailment of ailments) {
      if (med.treatableSymptoms.includes(ailment)) {
        numAilments++
      }
    }
    numTreatedArr.push({ name: med.name, numAilments: numAilments })

  }
  // console.log(numTreatedArr)
  numTreatedArr = [...numTreatedArr].sort((a, b) => b.numAilments - a.numAilments)
  let answerArr = []
  // console.log(numTreatedArr)
  if (numTreatedArr[0].numAilments == 0) {
    return null
  } else {
    highest = numTreatedArr[0].numAilments
    for (let med of numTreatedArr) {
      // console.log("med", med)
      if (med.numAilments === highest) {
        answerArr.push(med.name)
      } else if (med.numAilments < highest) {
        break
      }
    }
  }
  return answerArr
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));