package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.ReadOnly;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travel_activity_stock_state")
@ReadOnly
public class TravelActivityStockStateView extends Repository<TravelActivityStockStateView, Long> {

    @Id
    @Column(name = "row_number")
    private Long rowId;

    @Column(name = "travel_id")
    private Long travelId;

    @Column(name = "activity_id")
    private Long activityId;

    @Column(name = "activity_name")
    private String activity;

    @Column(name = "travel_name")
    private String travel;

    @Column
    private String duration;

    @Column
    private String category;

    @Column(name = "subscription_tier_name")
    private String subscriptionTier;

    @Column(name = "activity_count")
    private Integer activityCount;

    @Column(name = "remaining_quantity")
    private Integer remainingQuantity;

    public Long getRowId() {
        return rowId;
    }

    public void setRowId(Long id) {
        this.rowId = id;
    }

    public Long getTravelId() {
        return travelId;
    }

    public void setTravelId(Long travelId) {
        this.travelId = travelId;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long id) {
        this.activityId = id;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getTravel() {
        return travel;
    }

    public void setTravel(String travel) {
        this.travel = travel;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubscriptionTier() {
        return subscriptionTier;
    }

    public void setSubscriptionTier(String subscriptionTier) {
        this.subscriptionTier = subscriptionTier;
    }

    public Integer getActivityCount() {
        return activityCount;
    }

    public void setActivityCount(Integer activityCount) {
        this.activityCount = activityCount;
    }

    public Integer getRemainingQuantity() {
        return remainingQuantity;
    }

    public void setRemainingQuantity(Integer remainingQuantity) {
        this.remainingQuantity = remainingQuantity;
    }

}
