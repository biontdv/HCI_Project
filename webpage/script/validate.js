function myFunction()
{
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var genderOption = document.getElementsByClassName("gender")
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
    console.log(genderOption)
    console.log(gender)


    if(email === "")
    {
        alert("Email Harus Diisi")
        event.preventDefault()
    
    }

    else if(password === "")
    {
        alert("Password Harus Diisi")
        event.preventDefault()
    }

    else if(gender === "no gender")
    {
        alert("Pilih Gender Kamu")
        event.preventDefault()
    }

    else
    {
        return true
    }
}