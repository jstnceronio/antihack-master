package ch.antihack.server;

import com.mysql.cj.jdbc.Blob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

