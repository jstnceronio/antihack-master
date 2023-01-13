package ch.antihack.server.controller;

import ch.antihack.server.ServerApplication;
import ch.antihack.server.model.Role;
import ch.antihack.server.model.Student;
import ch.antihack.server.model.StudentRepository;
import ch.antihack.server.model.User;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1/students")
public class StudentController {

    private static final Logger logger = LogManager.getLogger(ServerApplication.class);

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public StudentList greet() {
        logger.info("Greeting someone");

        return new StudentList(new String[] {"Welcome, traveller"});
    }

    record StudentList(String[] students) { }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Student> getAllUsers() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        logger.info(user.getFirstname() + " is accessing all entries with the role " + user.getRole()) ;

        if (user.getRole().equals(Role.USER_ONE)) {
            return studentRepository.getEntitiesByRange(1, 8);
        }
        // This returns a JSON or XML with the users
        return studentRepository.getEntitiesByRange(8, 16);
    }
}
