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
import proj.w41k4z.trip.entity.TravelCategory;

@RestController
@RequestMapping("/travel-categories")
@CrossOrigin(origins = { "http://localhost:3000" })
public class TravelCategoryController {

    @GetMapping
    public TravelCategory[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        TravelCategory[] travelCategories = new TravelCategory().findAll(connection);
        connection.close();
        return travelCategories;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        TravelCategory travelCategory = new TravelCategory();
        travelCategory.setCategory(jsonData.get("category").toString());
        travelCategory.create(connection);
        connection.commit();
        connection.close();
    }
}
