package ch.antihack.server.controller;

import ch.antihack.server.ServerApplication;
import ch.antihack.server.model.Student;
import ch.antihack.server.model.StudentRepository;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    private static final Logger logger = LogManager.getLogger(ServerApplication.class);

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/")
    public StudentList greet() {
        logger.info("Greeting someone");
        return new StudentList(new String[] {"Inschallah", "Maschallah"});
    }

    record StudentList(String[] students) { }

    @GetMapping(path="/api/v1/all")
    public @ResponseBody Iterable<Student> getAllUsers() {
        // This returns a JSON or XML with the users
        return studentRepository.findAll();
    }
}
