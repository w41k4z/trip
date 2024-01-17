package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.ReadOnly;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travel_activities")
@ReadOnly
public class TravelActivitiesView extends Repository<TravelActivitiesView, Long> {

    @Id
    @Column
    private Long id;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
