const url = "http://172.20.10.7:8000";

export const getPlanets = async () => {
    try {
        const response = await fetch( url+`/planets`, {
            method: "GET",
        });

        const data = await response.json();
        
        if (!response.ok) throw new Error("Error en la respuesta");

        console.log("data response getPlanets: ", data);
        
        return data;
    } catch (error) {
        console.log("Error fetching planets: ", error);
    }
}

export const getPlanet = async (id) => {
    try {
        const response = await fetch (url+`/planets/${id}`, {
            method: "GET"
        }) 

        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Error fetching planet:', error)
    }
}

export const addPlanet = async (newPlanet) => {
    try {
        const response = await fetch (url+`/planets`, {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPlanet),
        })

        const data = await response.json();

        return data;   
    } catch (error) {
        console.log('Error adding new planet: ', error)
    }
}

export const deletePlanet = async(id) => {
    try {
        const response = await fetch (url+`/planets/${id}`, {
            method: "DELETE"
        })

        const data = await response.json();

        return data;   
    } catch (error) {
        console.log('Error deleting planet: ', error)
    }
}

export const editPlanet = async(id, editedPlanet) => {
    try {
        const response = await fetch (url+`/planets/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedPlanet),
        }) 

        const data = await response.json();

        return data;   
    } catch (error) {
        console.log('Error editing planet: ', error)
    }
}