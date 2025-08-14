// https://leetcode.com/problems/valid-parentheses
interface IStack {
    push(e: string): void;
    pop(): string | undefined;
    peek(): string | undefined;
    size(): number;
}
class Stack implements IStack {
    private storage: string[] = [];

    push(item: string) {
        this.storage.push(item);
    }
    pop(): string | undefined {
        return this.storage.pop();
    }
    peek():string {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

function isValid(s: string): boolean {
    const stack = new Stack();
    for (let i = 0; i < s.length; i++ ) {
        if(s[i] === '}' ) {
            if (stack.peek() === '{') {
                stack.pop();
            } else {
                return false;
            }
        } else if(s[i] === ']') {
            if (stack.peek() === '[') {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.size() == 0;
}

const s = '())';
console.log(isValid(s));
