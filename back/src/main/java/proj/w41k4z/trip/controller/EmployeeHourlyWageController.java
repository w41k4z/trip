package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.EmployeeHourlyWage;

import java.util.Map;
import java.sql.Date;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/employees/salary")
public class EmployeeHourlyWageController {

    @GetMapping
    public EmployeeHourlyWage[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        EmployeeHourlyWage[] employeeHourlyWages = new EmployeeHourlyWage().findAll(connection);
        connection.close();
        return employeeHourlyWages;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        EmployeeHourlyWage employeeHourlyWage = new EmployeeHourlyWage();
        employeeHourlyWage.setEmployeeId(Long.valueOf(jsonData.get("employee_id").toString()));
        employeeHourlyWage.setSalary(Double.valueOf(jsonData.get("salary").toString()));
        employeeHourlyWage.setSalaryDate(new Date(System.currentTimeMillis()));
        employeeHourlyWage.create(connection);
        connection.commit();
        connection.close();
    }
}