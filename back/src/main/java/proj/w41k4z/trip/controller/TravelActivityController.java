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
import proj.w41k4z.orm.database.request.Condition;
import proj.w41k4z.orm.database.request.Operator;
import proj.w41k4z.trip.entity.TierActivity;
import proj.w41k4z.trip.entity.Travel;
import proj.w41k4z.trip.entity.TravelActivitiesView;
import proj.w41k4z.trip.entity.TravelActivity;

@RestController
@RequestMapping("/travel-activities")
@CrossOrigin(origins = { "http://localhost:3000" })
public class TravelActivityController {

    @GetMapping
    public TravelActivitiesView[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        TravelActivitiesView[] travelActivities = new TravelActivitiesView().findAll(connection);
        connection.close();
        return travelActivities;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Travel travel = new Travel().findById(connection, Long.parseLong(jsonData.get("travelId").toString()));
        if (travel != null) {
            Condition condition = Condition
                    .WHERE("activity_id__of__tier_activity", Operator.E, jsonData.get("activityId").toString())
                    .AND("subscription_tier_id__of__tier_activity", Operator.E, travel.getSubscriptionTier().getId());
            TierActivity tierActivity = new TierActivity().findOne(connection, condition);
            if (tierActivity != null) {
                TravelActivity travelActivity = new TravelActivity();
                travelActivity.setTravel(travel);
                travelActivity.setTierActivity(tierActivity);
                travelActivity.setActivityCount(Integer.parseInt(jsonData.get("activityCount").toString()));
                travelActivity.create(connection);
                connection.commit();
                connection.close();
                return;
            }
        }
        throw new Exception("Constraint violation, check your data when inserting a travel activity count.");
    }
}