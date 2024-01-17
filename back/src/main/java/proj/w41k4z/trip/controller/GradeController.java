package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Grade;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/grades")
public class GradeController {

    @GetMapping
    public Grade[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Grade[] grades = new Grade().findAll(connection);
        connection.close();
        return grades;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Grade grade = new Grade();
        grade.setName((String) jsonData.get("name"));
        grade.create(connection);
        connection.commit();
        connection.close();
    }
}