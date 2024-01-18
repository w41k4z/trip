package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.relationship.Join;
import proj.w41k4z.orm.annotation.relationship.OneToMany;
import proj.w41k4z.orm.database.Repository;

@Entity
public class Position extends Repository<Position, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column
    private String name;

    @OneToMany
    @Join(inverseJoinColumn = "position_id")
    private PositionGrade[] positionGrades;

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

    public PositionGrade[] getPositionGrades() {
        return positionGrades;
    }

    public void setPositionGrades(PositionGrade[] positionGrades) {
        this.positionGrades = positionGrades;
    }
}
