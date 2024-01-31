package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Client;

import java.sql.Date;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @GetMapping
    public Client[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Client[] clients = new Client().findAll(connection);
        connection.close();
        return clients;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Client client = new Client();
        client.setName((String) jsonData.get("name"));
        client.setFirstName((String) jsonData.get("firstName"));
        client.setGenre(Integer.parseInt(jsonData.get("genre").toString()));
        client.setBirthDate(Date.valueOf(jsonData.get("birthDate").toString()));
        client.create(connection);
        connection.commit();
        connection.close();
    }

}
