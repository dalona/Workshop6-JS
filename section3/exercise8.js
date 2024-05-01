


//Closure: When I access to a Outer Function from an Inner Function


let flag = true;
function outerFunction() {
    let count = 0;

    function innerFunction() {

        while (flag){

            let option = prompt(("Enter the option that you want to apply\n\n1.Do you want to add the counter\n\n2.Do you want to see the counter\n\n3.To exit"));

            if (option === "1") {
                count++
            }

            else if (option === "2") {
                alert("The value of the counter is "+ count)
            }

            else if (option === "3") {
                (flag = false)
            }

            else{
                alert("Please enter a valid option")
            }
        }

    }
    return innerFunction();
}

outerFunction();
