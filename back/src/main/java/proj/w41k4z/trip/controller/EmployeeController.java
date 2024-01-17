package proj.w41k4z.trip.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.w41k4z.orm.database.connectivity.ConnectionManager;
import proj.w41k4z.orm.database.connectivity.DatabaseConnection;
import proj.w41k4z.trip.entity.Employee;
import proj.w41k4z.trip.entity.EmployeeView;

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
        employee.setPositionGradeId(Long.valueOf(jsonData.get("positionGradeId").toString()));
        employee.create(connection);
        connection.commit();
        connection.close();
    }
}