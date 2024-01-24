package proj.w41k4z.trip.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Grade;

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
        Double toDuration = jsonData.get("toDuration") == null || jsonData.get("toDuration").toString().equals("")
                ? null
                : Double.valueOf(jsonData.get("toDuration").toString());
        Grade grade = new Grade();
        grade.setName(jsonData.get("name").toString());
        grade.setIncrease(Double.valueOf(jsonData.get("increase").toString()));
        grade.setFromDuration(Double.valueOf(jsonData.get("fromDuration").toString()));
        grade.setToDuration(toDuration);

        grade.create(connection);
        connection.commit();
        connection.close();
    }

    @PutMapping
    public void update(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Double toDuration = jsonData.get("toDuration") == null || jsonData.get("toDuration").toString().equals("")
                ? null
                : Double.valueOf(jsonData.get("toDuration").toString());
        Grade grade = new Grade();
        grade.setId(Long.parseLong(jsonData.get("gradeId").toString()));
        grade.setName(jsonData.get("name").toString());
        grade.setIncrease(Double.valueOf(jsonData.get("increase").toString()));
        grade.setFromDuration(Double.valueOf(jsonData.get("fromDuration").toString()));
        grade.setToDuration(toDuration);

        grade.update(connection);
        connection.commit();
        connection.close();
    }
}
