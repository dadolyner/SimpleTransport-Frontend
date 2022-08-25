// String for price rent duration
const Duration = (days: number) => {
    if (days < 1) return
    else if(days === 1) return "Price for 1 day:";
    else return `Price for ${days} days:`;
}
export default Duration