package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.orm.database.request.Condition;
import proj.w41k4z.orm.database.request.Operator;
import proj.w41k4z.trip.dto.Reservation;
import proj.w41k4z.trip.dto.Reservations;
import proj.w41k4z.trip.entity.Activity;
import proj.w41k4z.trip.entity.ClientReservation;
import proj.w41k4z.trip.entity.StockMovement;
import proj.w41k4z.trip.entity.TravelActivityStockStateView;
import proj.w41k4z.trip.entity.TravelGenreStatistic;

import java.sql.Timestamp;

@RestController
@RequestMapping("/client-reservations")
public class ClientReservationController {

    @GetMapping("/stat/{travelId}")
    public TravelGenreStatistic[] genreStatistic(@PathVariable String travelId) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        if (travelId.equals("-1")) {
            TravelGenreStatistic[] travelGenreStatistics = new TravelGenreStatistic().findAll(connection);
            connection.close();
            return travelGenreStatistics;
        } else {
            Condition condition = Condition.WHERE("travel_id__of__travel_reservation_genre_statistic", Operator.E,
                    travelId);
            TravelGenreStatistic[] travelGenreStatistics = new TravelGenreStatistic().findAll(connection, condition);
            return travelGenreStatistics;
        }

    }

    @PostMapping
    public String create(@RequestBody Reservations reservations) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();

        for (Reservation reservation : reservations.getReservations()) {
            Condition condition = Condition.WHERE("travel_id__of__travel_activity_stock_state", Operator.E,
                    reservation.getTravelId());
            TravelActivityStockStateView[] travelActivityStates = new TravelActivityStockStateView().findAll(connection,
                    condition);

            // Stock movement
            for (TravelActivityStockStateView travelActivityStockState : travelActivityStates) {
                if (travelActivityStockState.getRemainingQuantity() < travelActivityStockState.getActivityCount()
                        * reservation.getQuantity()) {
                    connection.rollback();
                    return "Stock insuffisant pour le voyage `" + travelActivityStockState.getTravel()
                            + "`. Il vous faut "
                            + ((travelActivityStockState.getActivityCount() * reservation
                                    .getQuantity())
                                    - travelActivityStockState.getRemainingQuantity())
                            + " billet d'activité: " + travelActivityStockState.getActivity() + " de plus.";
                }
                StockMovement outflowMovement = new StockMovement();
                Activity activity = new Activity();
                activity.setId(travelActivityStockState.getActivityId());

                outflowMovement.setActivity(activity);
                outflowMovement.setInQuantity(0);
                outflowMovement.setOutQuantity(travelActivityStockState.getActivityCount() * reservation.getQuantity());
                outflowMovement.setActionDate(new Timestamp(System.currentTimeMillis()));

                outflowMovement.create();
            }

            // Client reservation confirmation
            ClientReservation clientReservation = new ClientReservation();
            clientReservation.setClientId(reservation.getClientId());
            clientReservation.setTravelId(reservation.getTravelId());
            clientReservation.setQuantity(reservation.getQuantity());
            clientReservation
                    .setReservationDate(new Timestamp(reservation.getReservationDate().getTime()));
            clientReservation.create(connection);
        }

        connection.commit();
        connection.close();
        return "";
    }

}