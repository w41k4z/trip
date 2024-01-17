package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.ReadOnly;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "employees")
@ReadOnly
public class EmployeeView extends Repository<EmployeeView, Long> {

    @Column
    private Long id;

    @Column
    private String name;

    @Column(name = "first_name", nullable = true)
    private String firstName;

    @Column(name = "position_grade")
    private String positionGrade;

    @Column
    private Double salary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPositionGrade() {
        return positionGrade;
    }

    public void setPositionGrade(String positionGrade) {
        this.positionGrade = positionGrade;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }
}
