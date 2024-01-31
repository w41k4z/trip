package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "grade")
public class Grade extends Repository<Grade, Long> {

    @Id
    @Generated
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private Double increase;

    @Column(name = "from_duration")
    private Double fromDuration;

    @Column(name = "to_duration", nullable = true)
    private Double toDuration;

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

    public Double getIncrease() {
        return increase;
    }

    public void setIncrease(Double increase) {
        this.increase = increase;
    }

    public Double getFromDuration() {
        return fromDuration;
    }

    public void setFromDuration(Double fromDuration) {
        if (fromDuration >= 0) {
            this.fromDuration = fromDuration;
        }
    }

    public Double getToDuration() {
        return toDuration;
    }

    // NULL: infinite
    public void setToDuration(Double toDuration) {
        this.toDuration = toDuration;
    }
}
