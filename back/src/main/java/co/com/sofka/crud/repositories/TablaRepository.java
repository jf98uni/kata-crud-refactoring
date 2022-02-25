package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.Tabla;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TablaRepository extends CrudRepository<Tabla, Long> {

}

