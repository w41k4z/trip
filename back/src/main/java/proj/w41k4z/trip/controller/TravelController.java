package proj.w41k4z.trip.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Travel;
import proj.w41k4z.trip.entity.TravelCategory;
import proj.w41k4z.trip.entity.TravelEmployee;
import proj.w41k4z.trip.entity.TravelView;
import proj.w41k4z.trip.entity.Duration;
import proj.w41k4z.trip.entity.SubscriptionTier;

@RestController
@RequestMapping("/travels")
public class TravelController {

    @GetMapping
    public TravelView[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        TravelView[] travels = new TravelView().findAll(connection);
        connection.close();
        return travels;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Travel travel = new Travel();
        travel.setName(jsonData.get("name").toString());

        Duration duration = new Duration();
        duration.setId(Long.parseLong(jsonData.get("durationId").toString()));
        TravelCategory travelCategory = new TravelCategory();
        travelCategory.setId(Long.parseLong(jsonData.get("travelCategoryId").toString()));
        SubscriptionTier subscriptionTier = new SubscriptionTier();
        subscriptionTier.setId(Long.parseLong(jsonData.get("subscriptionTierId").toString()));

        travel.setDuration(duration);
        travel.setTravelCategory(travelCategory);
        travel.setSubscriptionTier(subscriptionTier);
        travel.setSalePrice(Double.parseDouble(jsonData.get("salePrice").toString()));
        travel.create(connection);
        connection.commit();
        connection.close();
    }

    @PostMapping("/employees")
    public void addEmployee(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        TravelEmployee travelEmployee = new TravelEmployee();

        travelEmployee.setTravelId((Long) jsonData.get("travelId"));
        travelEmployee.setEmployeeId((Long) jsonData.get("employeeId"));
        travelEmployee.setDuration((Double) jsonData.get("duration"));

        travelEmployee.create(connection);
        connection.commit();
        connection.close();
    }
}
