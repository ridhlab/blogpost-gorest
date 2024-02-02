export const capitalizeWord = (word: string) => {
    let res = "";
    for (let i = 0; i < word.length; i++) {
        res += i === 0 ? word[i].toUpperCase() : word[i];
    }
    return res;
};
