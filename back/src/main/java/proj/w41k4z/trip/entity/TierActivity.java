package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "tier_activity")
public class TierActivity extends Repository<TierActivity, Long> {

    @Id
    @Generated
    @Column
    private Long id;

    @Column(name = "subscription_tier_id")
    private Long subscriptionTierId;

    @Column(name = "activity_id")
    private Long activityId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSubscriptionTierId() {
        return subscriptionTierId;
    }

    public void setSubscriptionTierId(Long subscriptionTierId) {
        this.subscriptionTierId = subscriptionTierId;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }
}
