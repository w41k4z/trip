package proj.w41k4z.trip.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Duration;

@RestController
@RequestMapping("/durations")
@CrossOrigin(origins = { "http://localhost:3000" })
public class DurationController {

    @GetMapping
    public Duration[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Duration[] durations = new Duration().findAll(connection);
        connection.close();
        return durations;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Duration duration = new Duration();
        duration.setLabel(jsonData.get("label").toString());
        duration.create(connection);
        connection.commit();
        connection.close();
    }
}
