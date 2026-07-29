const workouListing = document.querySelector(".workout-Listing")

const getData = async () => {
    try{
        const res = await fetch("http://locaLhost:3000");
        const data= await res.json();
    }
    catch(error){
        console.error(error);
    }
    }
getData();

data.forEach(workout => {
    const card = document.createElement("div");

    card.classList("workout-card");

    card.innerHTML=`
        <h3>${workout.Exercicio},
        <p>${workout.Tipo},
        <p>${workout.data},
        <p>${workout.Series.map(serie =>`
            <p>${serie.Peso}Kg - ${serie.Repeticao} Repetições
            `).join("")
        }

    `
});