export class EntityError extends Error {
    constructor(public name: string, message: string) {
        super(message)
    }
}