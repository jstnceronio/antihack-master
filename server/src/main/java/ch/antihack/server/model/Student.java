package ch.antihack.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Student {
    @Id
    private int id;
    @Lob
    private byte[] profilePicture;
    private String firstName;
    private String name;
    private String address;
    private String zipCode;
    private String email;
}

