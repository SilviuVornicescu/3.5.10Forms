const onSubmit = (e) => {
    e.preventDefault()
    console.log(`submit`)

    const formData = new FormData(e.target)     // Se creeaza un obiect prin care avem acces la toate datele din formular

    const email = formData.get(`email`)         // constanta preia de la tastatura adresa de email
    const name = formData.get(`name`)           // constanta preia de la tastatura numele
    const password = formData.get(`password`)   // constanta preia  de la tastatura parola

    console.log(email)      // afiseaza la consola email-ul
    console.log(name)       // afiseaza la consola numele
    console.log(password)   // afiseaza la consola parola

    // varianta 2
    const data = Object.fromEntries(formData)

    console.log(data)       // afiseaza la consola tot obiectul : {email: 'vornicescus@yahoo.com', name: 'Silviu Vornicescu', password: 'Secret'}

}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded")

    const form = document.getElementById(`myForm`)

    form.addEventListener(`submit`, onSubmit)   // "Ascult" evenimentul submit
})