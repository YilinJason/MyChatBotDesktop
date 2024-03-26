export default class Queue {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[0];
    }

    length() {
        return this.items.length;
    }

    isEmpty() {
        return this.length() === 0;
    }
}