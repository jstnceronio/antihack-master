package ch.antihack.server.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
    @Query(value = "SELECT * FROM Student s WHERE s.id BETWEEN :from AND :to ORDER BY s.id", nativeQuery=true)
    List<Student> getEntitiesByRange(@Param("from") int from, @Param("to") int to);
}
