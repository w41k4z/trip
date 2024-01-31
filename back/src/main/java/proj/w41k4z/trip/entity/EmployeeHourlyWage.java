package proj.w41k4z.trip.entity;

import java.sql.Timestamp;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "employee_hourly_wage")
public class EmployeeHourlyWage extends Repository<EmployeeHourlyWage, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column(name = "employee_id")
    private Long employeeId;

    @Column(name = "from_date")
    private Timestamp fromDate;

    @Column
    private Double salary;

    public Long getId() {
        return id;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getFromDate() {
        return fromDate;
    }

    public void setFromDate(Timestamp fromDate) {
        this.fromDate = fromDate;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        if (salary >= 0) {
            this.salary = salary;
        }
    }
}
