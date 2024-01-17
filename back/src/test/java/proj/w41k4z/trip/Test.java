package proj.w41k4z.trip;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Travel;

public class Test {

        public static void main(String[] args) throws NumberFormatException, NoSuchMethodException,
                        InvocationTargetException, IllegalAccessException, InstantiationException,
                        IllegalArgumentException,
                        SecurityException, ClassNotFoundException, SQLException, IOException {
                DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
                Travel v = new Travel().findById(connection, 1L);
                System.out.println(v.getSubscriptionTier().getActivities().length);
                connection.close();
        }
}
