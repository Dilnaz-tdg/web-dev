let a = 1, b = 1;

let c = ++a;
let d = b++;

console.log(a, b, c,d);

//------

a = 2;

let x = 1 + (a *= 2);
console.log(x,a);
//--------------

console.log("" + 1 + 0,
            "" - 1 + 0,
            true + false,
            6 / "3",
            "2" * "3",
            4 + 5 + "px",
            "$" + 4 + 5,
            "4" - 2,
            "4px" - 2,
            "  -9  " + 5,
            "  -9  " - 5,
            null + 1,
            undefined + 1,
            " \t \n" - 2)


//-----

e = prompt("First number?", 1);
f = prompt("Second number?", 2);

alert(e + f); // 12