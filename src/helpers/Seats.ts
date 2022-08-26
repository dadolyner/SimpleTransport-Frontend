// String for number of seats
const Seats = (seats: number) => {
    if (seats < 1) return
    else if(seats === 1) return "1 seat";
    else return `${seats} seats`;
}
export default Seats