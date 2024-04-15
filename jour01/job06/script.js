let nombre = 1

while (nombre <= 151){
    if (nombre % 5 == 0 && nombre % 3 == 0){
        console.log ("FizzBuzz")
    }
    if (nombre % 5 == 0){
        console.log ("Buzz")
    }
    if (nombre % 3 == 0){
        console.log ("Fizz")
    }
    else {
        console.log (nombre)
    }
    nombre += 1
}