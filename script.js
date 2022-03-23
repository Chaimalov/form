let arr2 = [
    100,
    "yes, this can happen",
    ["hello", "hi", 450],
    {
        abc: {
            bla: "bla"
        },
        cba: "bla"
    }
];


let mat = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4],
    [5]
];


// שיעורי בית

// console.log(arr2[3].abc.bla)
// console.log(arr2[2][0])
const sumObj = (obj) => {
    let sum = 0;
    obj.forEach(row => {
        row.forEach(col => {
            sum += col;
        })
    })
    return sum;
}



// // תרגיל כיתה
const printAllValues = (obj) => {
    if (!(obj instanceof Object)) return console.log(obj)
    Object.values(obj).forEach(el => {
        if (el instanceof Object) return printAllValues(el);
        console.log(el)
    })
}


const searchObjectBool = (obj, value) => {
    for (const el in obj) {
        if (obj[el] === value) return true;
        if (obj[el] instanceof Object) return searchObjectBool(obj[el], value);
    }
    return false;
}


const searchObjectPath = (obj, value) => {
    let sub;
    for (const el in obj) {
        if (obj[el] === value) return `[${el}]`;
        if (obj[el] instanceof Object) {
            if (sub = searchObjectPath(obj[el], value))
                return `[${el}]` + sub;
        }
    }
    return false;
}

console.log(searchObjectPath(arr2, "hi"))

const colors = [
    { color: "red", length: 10 },
    { color: "blue", length: 10 },
    { color: "pink", length: 9.9 },
    { color: "green", length: 10.1 },
    { color: "red", length: 10 },
    { color: "blue", length: 10.2 },
    { color: "blue", length: 10.5 },
]

const searchObjectValues = (obj, value, arr = []) => {
    for (const el in obj) {
        if (obj[el] === value) arr.push(obj);
        if (obj[el] instanceof Object) searchObjectValues(obj[el], value, arr);
    }
    return arr;
}

console.log(searchObjectValues(colors, "blue"))