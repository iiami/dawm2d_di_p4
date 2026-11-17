fetch('/api/estrenos')
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos de la API:", data);

        const contenedor = document.getElementById('lista-estrenos');
        if (contenedor && data) {
            const root = ReactDOM.createRoot(contenedor);
            root.render(
                <React.Fragment>
                    {data.map((estreno, index) => (
                        <li key={index} style={{ listStyle: "none" }}>
                            <TarjetaEstreno
                                titulo={estreno.titulo || "Sin título"}
                                genero={estreno.genero || "General"}
                                plataforma={estreno.plataforma || "Por confirmar"}
                            />
                        </li>
                    ))}
                </React.Fragment>
            );
        }
    })
    .catch(error => console.error("Error al cargar los estrenos:", error));