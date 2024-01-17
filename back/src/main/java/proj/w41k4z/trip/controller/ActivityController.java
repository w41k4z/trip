package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Activity;
import proj.w41k4z.trip.entity.ActivityUnitPrice;

import java.sql.Timestamp;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/activities")
public class ActivityController {

    @GetMapping
    public Activity[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Activity[] activities = new Activity().findAll(connection);
        connection.close();
        return activities;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Activity activity = new Activity();
        activity.setName((String) jsonData.get("name"));
        activity.setDescription((String) jsonData.get("description"));
        activity.create(connection);
        connection.commit();
        connection.close();
    }

    @PostMapping("/price")
    public void createPrice(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        ActivityUnitPrice activityPrice = new ActivityUnitPrice();

        activityPrice.setActivityId(Long.parseLong(jsonData.get("activityId").toString()));
        activityPrice.setUnitPrice(Double.parseDouble(jsonData.get("unitPrice").toString()));
        activityPrice.setFromDate(new Timestamp(System.currentTimeMillis()));
        activityPrice.create(connection);
        connection.commit();
        connection.close();
    }
}