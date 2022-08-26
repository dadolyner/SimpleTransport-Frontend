class Uuid {
    constructor(private version: number) { this.version = version }
    
    generate(): string {
        if (this.version < 3 || this.version > 5) { throw new Error('Invalid version') }
        return `xxxxxxxx-xxxx-${this.version}xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
            const randomNumber = Math.random() * 16 | 0
            // eslint-disable-next-line no-mixed-operators
            const uuid = (char === 'x') ? (randomNumber) : (randomNumber & 3 | 8)
            return uuid.toString(16)
        })
    }
}

export default Uuid;