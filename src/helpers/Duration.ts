// String for price rent duration
const Duration = (days: number) => {
    if (days < 1) return
    else if(days === 1) return "1 day";
    else return `${days} days`;
}
export default Duration