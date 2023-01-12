package ch.antihack.server.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
    @Query(value = "SELECT * FROM Student s WHERE s.id BETWEEN :from AND :to ORDER BY s.id", nativeQuery=true)
    List<Student> getEntitiesByRange(@Param("from") int from, @Param("to") int to);
}
