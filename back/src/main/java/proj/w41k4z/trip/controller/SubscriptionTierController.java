package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.trip.entity.SubscriptionTier;

@RestController
@RequestMapping("/subscription-tiers")
@CrossOrigin(origins = { "http://localhost:3000" })
public class SubscriptionTierController {

    @GetMapping
    public SubscriptionTier[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        SubscriptionTier[] subscriptionTiers = new SubscriptionTier().findAll(connection);
        connection.close();
        return subscriptionTiers;
    }

    @GetMapping("/{tierId}")
    public SubscriptionTier one(@PathVariable Long tierId) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        SubscriptionTier subscriptionTier = new SubscriptionTier().findById(connection, tierId);
        connection.close();
        return subscriptionTier;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        SubscriptionTier subscriptionTier = new SubscriptionTier();
        subscriptionTier.setName((String) jsonData.get("name"));
        subscriptionTier.setDescription((String) jsonData.get("description"));
        subscriptionTier.create(connection);
        connection.commit();
        connection.close();
    }
}
