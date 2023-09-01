const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async  db => {

     await saveOrphanage(db ,{
        lat: "-12.9824173",
        lng: "-38.5096132",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "71993564572",
        images: [
            "https://images.unsplash.com/photo-1591593443255-db4646e739b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/photo-1595009503377-e3be116106b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de Visitas Das 18h até 8h",
        open_on_weekends: "0"
     }) 
   /* 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    
    console.log(await db.run("DELETE FROM orphanages"))*/

    
}) 