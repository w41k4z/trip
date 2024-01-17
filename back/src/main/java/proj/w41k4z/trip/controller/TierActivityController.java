package proj.w41k4z.trip.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.TierActivity;

@RestController
@RequestMapping("/tier-activities")
@CrossOrigin(origins = { "http://localhost:3000" })
public class TierActivityController {

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        TierActivity tierActivity = new TierActivity();
        tierActivity.setSubscriptionTierId(Long.parseLong(jsonData.get("subscriptionTierId").toString()));
        tierActivity.setActivityId(Long.parseLong(jsonData.get("activityId").toString()));
        tierActivity.create(connection);
        connection.commit();
        connection.close();
    }
}