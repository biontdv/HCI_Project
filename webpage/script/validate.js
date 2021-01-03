function myFunction()
{
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var address = document.getElementById("address").value
    var dob = document.getElementById('dob').value
    var agree = document.getElementById('agreement').checked
    var genderOption = document.getElementsByName("gender")
    var gender="nogender"

    
    for(let i=0; i<genderOption.length; i++)
    {
        if(genderOption[i].checked)
        {
            gender = genderOption[i].value
            break
        }
    }

    console.log(email)
    console.log(password)
    console.log(dob)
    console.log(genderOption)
    console.log(gender)


    if(email === "")
    {
        alert("Email must be filled")
        event.preventDefault()
    
    }
    
    else if (email.includes("@")==false)
    {
        alert("Email Must Contains @")
        event.preventDefault()
    }

    else if(password === "")
    {
        alert("Password must be filled")
        event.preventDefault()
    }
    
    else if(address === "")
    {
        alert("Address must be filled")
        event.preventDefault()
    }

    else if(dob === "")
    {
        alert("Date of Birth must be filled")
        event.preventDefault()
    }

    else if(gender === "nogender")
    {
        alert("Gender must be filled")
        event.preventDefault()
    }

    else if(agree === false)
    {
        alert("You Must Agree the Term and Condition to Register!")
        event.preventDefault()
    }

    else
    {
        return true
    }
}