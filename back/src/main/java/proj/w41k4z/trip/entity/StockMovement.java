package proj.w41k4z.trip.entity;

import java.sql.Timestamp;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.relationship.OneToOne;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "stock_movement")
public class StockMovement extends Repository<StockMovement, Long> {

    @Id
    @Generated
    @Column
    private Long id;

    @Column(name = "action_date")
    private Timestamp actionDate;

    @OneToOne
    @Column(name = "activity_id")
    private Activity activity;

    @Column(name = "in_quantity")
    private Integer inQuantity;

    @Column(name = "out_quantity")
    private Integer outQuantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getActionDate() {
        return actionDate;
    }

    public void setActionDate(Timestamp actionDate) {
        this.actionDate = actionDate;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public Integer getInQuantity() {
        return inQuantity;
    }

    public void setInQuantity(Integer inQuantity) {
        this.inQuantity = inQuantity;
    }

    public Integer getOutQuantity() {
        return outQuantity;
    }

    public void setOutQuantity(Integer outQuantity) {
        this.outQuantity = outQuantity;
    }
}
