package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.HourlyWage;
import proj.w41k4z.trip.entity.Position;
import proj.w41k4z.trip.entity.PositionGrade;

import java.sql.Timestamp;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/positions")
public class PositionController {

    @GetMapping
    public Position[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Position[] positions = new Position().findAll(connection);
        connection.close();
        return positions;
    }

    @GetMapping("/{id}")
    public Position one(@PathVariable Long id) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Position position = new Position().findById(connection, id);
        connection.close();
        return position;
    }

    @GetMapping("/grades")
    public PositionGrade[] grades() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        PositionGrade[] grades = new PositionGrade().findAll(connection);
        connection.close();
        return grades;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Position position = new Position();
        position.setName((String) jsonData.get("name"));
        position.create(connection);
        connection.commit();
        connection.close();
    }

    @PostMapping("/grades")
    public void createGrade(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        PositionGrade grade = new PositionGrade();
        Position position = new Position();
        position.setId(Long.parseLong(jsonData.get("positionId").toString()));

        grade.setPosition(position);
        grade.setGrade((String) jsonData.get("grade"));
        grade.setIncrease(Double.parseDouble(jsonData.get("increase").toString()));

        grade.create(connection);
        connection.commit();
        connection.close();
    }

    @PostMapping("/hourly-wage")
    public void newSalary(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        HourlyWage hourlyWage = new HourlyWage();

        hourlyWage.setPositionId(Long.parseLong(jsonData.get("positionId").toString()));
        hourlyWage.setSalary(Double.parseDouble(jsonData.get("salary").toString()));
        hourlyWage.setFromDate(new Timestamp(System.currentTimeMillis()));

        hourlyWage.create(connection);
        connection.commit();
        connection.close();
    }
}
