'use strict';

const nest = (var1) => {
    const data1 = var1;
    return var2 => {
        const data2 = var2;
        return var3 => {
            const data3 = var3;
            return var4 => {
                const data4 = var4;
                return {
                    data1, 
                    data2,
                    data3,
                    data4,
                    print: () => {
                        return `Nesting:\ndata1: ${data1}\ndata2: ${data2}\ndata3: ${data3}\ndata4: ${data4}`;
                    }
                }
            }
        }
    }
};

let test1 = nest('First');
test1 = test1('Second');
test1 = test1('Third');
test1 = test1('Fourth');

console.log(test1);
console.log(test1.print());