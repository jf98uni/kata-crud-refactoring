package co.com.sofka.crud.services;

import co.com.sofka.crud.models.Tabla;
import co.com.sofka.crud.repositories.TablaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class TablaService {

        @Autowired
        private TablaRepository repository;

        public Iterable<Tabla> list(){
            return repository.findAll();
        }

        public Tabla save(Tabla tabla){
            return repository.save(tabla);
        }

        public void delete(Long id){
            repository.deleteById(id);
        }

        public Optional<Tabla> get(Long id){
            return repository.findById(id);
        }


}
