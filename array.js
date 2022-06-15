let a = new Array(10)
console.log(a)

var x = new Array(10);

for (let i = 0; i < x.length; i++) {
    x[i] = new Array(1);
}

x[0][0]=1;
x[0][1]=2;
x[1][0]=5;
console.log(x);
