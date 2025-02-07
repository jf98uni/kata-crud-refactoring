package co.com.sofka.crud.models;


import javax.persistence.*;

@Entity
public class Tabla {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    public Tabla() {
    }

    public Tabla(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
