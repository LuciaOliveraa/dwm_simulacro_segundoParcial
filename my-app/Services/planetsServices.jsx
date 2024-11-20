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
        console.log("Error fetching posts: ", error);
    }
}
