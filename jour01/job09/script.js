let numbers = [7, 5, 8, 3, 11, 2, 9]
let order = "asc"

function tri(array, order){
    if (order == "asc"){
        return array.sort(function(a, b){return a - b})
    }
    else if (order == "desc"){
        return array.sort(function(a, b){return b - a})
    }
}

console.log(tri(numbers, order))