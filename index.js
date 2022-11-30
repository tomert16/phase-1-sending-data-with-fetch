
function submitData(name, email){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(user => document.body.append(user.id))
    .catch(err => document.body.innerHTML = err.message)
}

submitData("Jim", "jim@jim.com");