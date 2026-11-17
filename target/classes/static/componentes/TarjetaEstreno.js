/**
 * Componente: TarjetaEstreno
 * -------------------------------------------------------------
 * @description Muestra los detalles de una película de estreno en formato de tarjeta visual.
 * 
 * @param {Object} props - Propiedades recibidas por el componente.
 * @param {string} props.titulo - Título de la película.
 * @param {string} props.genero - Género cinematográfico.
 * @param {string} [props.plataforma="Por confirmar"] - Plataforma de emisión (opcional, por defecto "Por confirmar").
 * 
 * @event onClick - El botón interno gestiona un estado local (useState) para marcar o desmarcar el interés del usuario (★ / ☆).
 * 
 * @example
 * <TarjetaEstreno 
 *    titulo="Interstellar" 
 *    fechaEstreno="2026-11-20" 
 *    genero="Ciencia Ficción" 
 *    plataforma="Prime Video" 
 * />
 */

function TarjetaEstreno({ titulo, genero, plataforma = "Por confirmar" }) {
  const [interesante, setInteresante] = React.useState(false);

  return (
      <div className="tarjeta-estreno" style={{
          border: "1px solid #2d5b8a",
          borderRadius: "4px",
          padding: "15px",
          margin: "0",
          backgroundColor: "#11253e",
          color: "#ffffff",
          width: "240px",
          fontFamily: "Inter, Arial, sans-serif",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"
      }}>
      <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{titulo}</h3>
      <p style={{ margin: "5px 0" }}><strong>Género:</strong> {genero}</p>
      <p style={{ margin: "5px 0" }}><strong>Plataforma:</strong> {plataforma}</p>
      
      {/*botón evento onclick para cambiar el estado*/}
      <button 
        onClick={() => setInteresante(!interesante)}
        style={{
            marginTop: "12px",
            padding: "8px 14px",
            backgroundColor: interesante ? "#f0444a" : "#1b3558",
            color: "#ffffff",
            border: "1px solid #40658f",
            borderRadius: "0px",
            cursor: "pointer",
            fontWeight: "600",
            width: "100%",
            textAlign: "center"
        }}
      >
        {interesante ? "★ Marcado de interés" : "☆ Marcar interés"}
      </button>
    </div>
  );
}