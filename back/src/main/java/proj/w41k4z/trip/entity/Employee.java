package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "employee")
public class Employee extends Repository<Employee, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column
    private String name;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "grade_id")
    private Long gradeId;

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

    public Long getGradeId() {
        return gradeId;
    }

    public void setGradeId(Long gradeId) {
        this.gradeId = gradeId;
    }
}
