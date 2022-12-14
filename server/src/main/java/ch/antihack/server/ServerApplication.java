package ch.antihack.server;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServerApplication {

	private static final Logger logger = LogManager.getLogger(ServerApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@GetMapping("/")
	public StudentList greet() {
		logger.info("Greeting someone");
		return new StudentList(new String[] {"Inschallah", "Maschallah"});
	}

	record StudentList(String[] students) { }

}
