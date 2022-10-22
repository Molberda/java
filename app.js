let arr = [20, 30, 40, 50, 100]

let newarr = arr.filter((element) => {
    if (element < 50) {
        return true
    }
})

console.log(newarr)