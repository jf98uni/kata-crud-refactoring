package co.com.sofka.crud.controllers;


import co.com.sofka.crud.models.Tabla;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.services.TablaService;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TablasController {

    @Autowired
    private TablaService service;


    @GetMapping(value = "api/tablas")
    public Iterable<Tabla> list(){
        return service.list();
    }

    @PostMapping(value = "api/tabla")
    public Tabla save(@RequestBody Tabla tabla){
        return service.save(tabla);
    }

    @PutMapping(value = "api/tabla")
    public Tabla update(@RequestBody Tabla tabla){
        if(tabla.getId() != null){
            return service.save(tabla);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/tabla")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/tabla")
    public Tabla get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
