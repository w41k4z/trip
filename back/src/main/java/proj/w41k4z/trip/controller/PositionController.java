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
        position.setId((Long) jsonData.get("positionId"));

        grade.setPosition(position);
        grade.setGrade((String) jsonData.get("grade"));
        grade.setIncrease((Double) jsonData.get("increase"));

        grade.create(connection);
        connection.commit();
        connection.close();
    }

    @PostMapping("/hourly-wage")
    public void newSalary(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        HourlyWage hourlyWage = new HourlyWage();

        hourlyWage.setPositionId((Long) jsonData.get("positionId"));
        hourlyWage.setSalary((Double) jsonData.get("salary"));
        hourlyWage.setFromDate(new Timestamp(System.currentTimeMillis()));

        hourlyWage.create(connection);
        connection.commit();
        connection.close();
    }
}
