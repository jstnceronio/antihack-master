package ch.antihack.server;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Student {
    private int id;
    private Blob profilePicture;
    private String firstName;
    private String name;
    private String address;
    private Integer zipCode;
    private String email;
}

