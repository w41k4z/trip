package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.ReadOnly;
import proj.w41k4z.orm.annotation.relationship.OneToOne;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "stock_state")
@ReadOnly
public class StockStateView extends Repository<StockStateView, Long> {

    @OneToOne
    @Column(name = "activity_id")
    private Activity activity;

    @Column(name = "remaining_quantity")
    private Integer remainingQuantity;

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public Integer getRemainingQuantity() {
        return remainingQuantity;
    }

    public void setRemainingQuantity(Integer remainingQuantity) {
        this.remainingQuantity = remainingQuantity;
    }
}
