function createNode() {
    return {
        value: null,
        next: null,
    };
}

export function createList() {
    return {
        list: null,

        getLastElement() {
            if (this.list === null) {
                return null;
            }
            let current = this.list;
            while (current.next !== null) {
                current = current.next;
            }
            return current;
        },

        append(appendValue) {
            if (this.list === null) {
                this.list = createNode();
                this.list.value = appendValue;
            } else {
                let lastElement = this.getLastElement();
                lastElement.next = createNode();
                lastElement.next.value = appendValue;
            }
        },

        prepend(prependValue) {
            let newNode = createNode();
            newNode.value = prependValue;
            newNode.next = this.list;
            this.list = newNode;
        },

        size() {
            if (this.list === null) {
                return 0;
            }
            let current = this.list;
            let size = 1;
            while (current.next !== null) {
                current = current.next;
                size += 1;
            }
            return size;
        },

        head() {
            return this.list;
        },

        tail() {
            return this.getLastElement();
        },

        at(index) {
            let current = this.list;
            for (let i = 0; i < index; i++) {
                if (current === null) return null;
                current = current.next;
            }
            return current;
        },

        pop() {
            if (this.list === null) return;

            if (this.list.next === null) {
                this.list = null;
            } else {
                let current = this.list;
                while (current.next.next !== null) {
                    current = current.next;
                }
                current.next = null;
            }
        },

        contains(value) {
            let current = this.list;
            while (current !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        },

        find(value) {
            let current = this.list;
            let index = 0;
            while (current !== null) {
                if (current.value === value) {
                    return index;
                }
                current = current.next;
                index += 1;
            }
            return null;
        },

        toString() {
            if (this.list === null) {
                return 'null';
            }
            let current = this.list;
            let string = `(${current.value})`;
            while (current.next !== null) {
                current = current.next;
                string += ` -> (${current.value})`;
            }
            string += ' -> null';
            return string;
        },

        insertAt(value, index) {
            if (index === 0) {
                this.prepend(value);
                return;
            }
            let previous = this.at(index - 1);
            if (previous === null || previous.next === null) {
                this.append(value);
            } else {
                let newNode = createNode();
                newNode.value = value;
                newNode.next = previous.next;
                previous.next = newNode;
            }
        },
        removeAt(index) {
            if (index === 0) {
                this.list = this.list ? this.list.next : null;
                return;
            }
            let previous = this.at(index - 1);
            if (previous !== null && previous.next !== null) {
                previous.next = previous.next.next;
            }
        },
    };
}
