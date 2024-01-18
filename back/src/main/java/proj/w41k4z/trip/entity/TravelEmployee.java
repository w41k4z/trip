package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.relationship.OneToOne;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travel_employee")
public class TravelEmployee extends Repository<TravelEmployee, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column(name = "travel_id")
    private Long travelId;

    @OneToOne
    @Column(name = "employee_id")
    private EmployeeView employee;

    @Column
    private Double duration;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTravelId() {
        return travelId;
    }

    public void setTravelId(Long travelId) {
        this.travelId = travelId;
    }

    public EmployeeView getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeView employee) {
        this.employee = employee;
    }

    public Double getDuration() {
        return duration;
    }

    public void setDuration(Double duration) {
        this.duration = duration;
    }
}
