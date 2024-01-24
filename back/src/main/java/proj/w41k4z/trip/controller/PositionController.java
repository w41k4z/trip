package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Position;

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

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Position position = new Position();
        position.setName((String) jsonData.get("name"));
        position.create(connection);
        connection.commit();
        connection.close();
    }
}
