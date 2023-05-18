
export const findModelValue = (model: string | number) => {
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetUpper: string[] = alphabet.split('');
    const alphabetLower: string[] = alphabet.toLowerCase().split('')
    const modelLetters = model.toString().split('');
    
    let modelValue: number = 0;
    let letterIndex: number = 0;

    modelLetters.forEach((modelLetter:string, index:number) => {
        if  (alphabetUpper.includes(modelLetter) || alphabetLower.includes(modelLetter)) {
            letterIndex = alphabetUpper.findIndex((alphabetLetter) => {
                modelLetter == alphabetLetter || modelLetter == alphabetLetter.toLowerCase()
            });
            modelValue += (letterIndex + 1) * 100;
        }
    })

    return modelValue;
}











        // if (alphabet.includes(letter) || alphabet.toLowerCase().includes(letter)) {
        //     modelValue += 
        // }