package co.com.sofka.crud.controllers;

import co.com.sofka.crud.services.TodoService;
import co.com.sofka.crud.models.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public Iterable<Todo> list(){
        return service.list();
    }
    
    @PostMapping(value = "api/todo")
    public Todo save(@RequestBody Todo todo){
        if (todo.getName() != null) {
            return service.save(todo);
        }
        else {
            throw new RuntimeException("Escriba el nombre de la tarea");
        }
    }

    @PutMapping(value = "api/todo")
    public Todo update(@RequestBody Todo todo){
        if(todo.getId() != null){
            return service.save(todo);
        }
        {
        throw new RuntimeException("No existe el id para actualziar");
    }}

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public Optional<Todo> get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
