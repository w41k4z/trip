package proj.w41k4z.trip.controller;

import java.sql.Timestamp;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.orm.database.request.Condition;
import proj.w41k4z.orm.database.request.Operator;
import proj.w41k4z.trip.entity.Activity;
import proj.w41k4z.trip.entity.StockMovement;
import proj.w41k4z.trip.entity.StockStateView;
import proj.w41k4z.trip.entity.TravelActivityStockStateView;

@RestController
@RequestMapping("/stock-movements")
public class StockMovementController {

    @PostMapping("/in")
    public void in(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        StockMovement entryMovement = new StockMovement();
        Activity activity = new Activity();
        activity.setId(Long.valueOf(jsonData.get("activityId").toString()));

        entryMovement.setActivity(activity);
        entryMovement.setInQuantity(Integer.valueOf(jsonData.get("quantity").toString()));
        entryMovement.setOutQuantity(0);
        entryMovement.setActionDate(new Timestamp(System.currentTimeMillis()));
        entryMovement.create(connection);

        connection.commit();
        connection.close();
    }

    @PostMapping("/out")
    public String out(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Integer quantity = Integer.valueOf(jsonData.get("quantity").toString());
        Condition condition = Condition.WHERE("travel_id__of__travel_activity_stock_state", Operator.E,
                jsonData.get("travelId"));
        TravelActivityStockStateView[] travelActivityStates = new TravelActivityStockStateView().findAll(connection,
                condition);

        for (TravelActivityStockStateView travelActivityStockState : travelActivityStates) {
            if (travelActivityStockState.getRemainingQuantity() < travelActivityStockState.getActivityCount()
                    * quantity) {
                connection.rollback();
                return "Stock insuffisant. Il vous faut "
                        + ((travelActivityStockState.getActivityCount() * quantity)
                                - travelActivityStockState.getRemainingQuantity())
                        + " billet d'activité: " + travelActivityStockState.getActivity() + " de plus.";
            }
            StockMovement outflowMovement = new StockMovement();
            Activity activity = new Activity();
            activity.setId(travelActivityStockState.getActivityId());

            outflowMovement.setActivity(activity);
            outflowMovement.setInQuantity(0);
            outflowMovement.setOutQuantity(travelActivityStockState.getActivityCount() * quantity);
            outflowMovement.setActionDate(new Timestamp(System.currentTimeMillis()));

            outflowMovement.create();
        }

        connection.commit();
        connection.close();
        return "";
    }

    @GetMapping("/stock-states")
    public StockStateView[] stockState() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        StockStateView[] stockStates = new StockStateView().findAll(connection);
        connection.close();
        return stockStates;
    }
}
