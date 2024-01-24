package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Employee;
import proj.w41k4z.trip.entity.EmployeeHourlyWage;
import proj.w41k4z.trip.entity.EmployeePosition;
import proj.w41k4z.trip.entity.EmployeeView;

import java.sql.Timestamp;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @GetMapping
    public EmployeeView[] list() throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        EmployeeView[] employees = new EmployeeView().findAll(connection);
        connection.close();
        return employees;
    }

    @PostMapping
    public void create(@RequestBody Map<String, Object> jsonData) throws Exception {
        DatabaseConnection connection = ConnectionManager.getDatabaseConnection();
        Employee employee = new Employee();
        employee.setName((String) jsonData.get("name"));
        employee.setFirstName((String) jsonData.get("firstName"));
        employee.setHiringDate(new Timestamp(java.sql.Date.valueOf(jsonData.get("hiringDate").toString()).getTime()));
        employee.create(connection);

        EmployeePosition employeePosition = new EmployeePosition();
        employeePosition.setPositionId(Long.valueOf(jsonData.get("positionId").toString()));
        employeePosition.setEmployeeId(employee.getId());
        employeePosition.setFromDate(employee.getHiringDate());
        employeePosition.create(connection);

        EmployeeHourlyWage employeeHourlyWage = new EmployeeHourlyWage();
        employeeHourlyWage.setEmployeeId(employee.getId());
        employeeHourlyWage.setFromDate(employee.getHiringDate());
        employeeHourlyWage.setSalary(Double.parseDouble(jsonData.get("salary").toString()));
        employeeHourlyWage.create(connection);

        connection.commit();
        connection.close();
    }
}