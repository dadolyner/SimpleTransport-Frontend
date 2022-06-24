const Delay = (timeInMS: number) => new Promise(resolve => setTimeout(resolve, timeInMS));
export default Delay;