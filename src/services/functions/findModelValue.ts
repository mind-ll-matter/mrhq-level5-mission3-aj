export const findModelValue = (model: string): number => {
  const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alphabetUpper: string[] = alphabet.split('')

  const modelLetters = model.toString().toUpperCase().split('')

  let modelValue: number = 0

  modelLetters.forEach((modelLetter: string, index: number) => {
    let letterIndex: number = 0

    if (alphabetUpper.includes(modelLetter)) {
      letterIndex = alphabetUpper.findIndex((alphabetLetter) => {
        return modelLetter === alphabetLetter
      })
      modelValue += (letterIndex + 1) * 100
    }
  })

  return modelValue
}
