package org.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PeliculaController {

    private static List<Pelicula> listaPeliculas = new ArrayList<>();
    private static long contadorId = 1;

    static {
        listaPeliculas.add(new Pelicula(contadorId++, "Stranger Things", "Netflix", "Visto", "Terror", "8.7", 150000.0));
        listaPeliculas.add(new Pelicula(contadorId++, "The Last of Us", "HBO", "Viendo", "Drama", "8.8", 300000.0));
        listaPeliculas.add(new Pelicula(contadorId++, "Interstellar", "Prime", "Pendiente", "Ficción", "8.7", 500000.0));
    }

    @GetMapping({"/", "/index"})
    public String verLista(Model model) {
        model.addAttribute("peliculas", listaPeliculas);
        return "index";
    }

    @GetMapping("/anadirTitulo")
    public String mostrarFormulario(Model model) {
        model.addAttribute("pelicula", new Pelicula());
        return "anadirTitulo";
    }

    @GetMapping("/estadisticas")
    public String mostrarEstadisticas() {
        return "estadisticas";
    }

    @PostMapping("/guardar")
    public String guardarPelicula(@ModelAttribute Pelicula pelicula) {
        pelicula.setId(contadorId++);
        listaPeliculas.add(pelicula);
        return "redirect:/index";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarPelicula(@PathVariable Long id) {
        listaPeliculas.removeIf(p -> p.getId().equals(id));
        return "redirect:/index";
    }

    @GetMapping("/api/estadisticas")
    @ResponseBody
    public List<Pelicula> obtenerEstadisticasApi() {
        return listaPeliculas;
    }

    @GetMapping("/estrenos")
    public String mostrarEstrenos() {
        return "estrenos";
    }

    @GetMapping("/api/estrenos")
    @ResponseBody
    public List<Pelicula> obtenerEstrenosApi() {
        return listaPeliculas;
    }
}
