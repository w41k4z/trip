package proj.w41k4z.trip.entity;

import java.sql.Date;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "activity_unit_price")
public class ActivityUnitPrice extends Repository<ActivityUnitPrice, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column(name = "activity_id")
    private Long activityId;

    @Column(name = "unit_price")
    private Double unitPrice;

    @Column(name = "from_date")
    private Date fromDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }

    public Double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(Double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }
}
