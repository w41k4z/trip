package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.relationship.OneToOne;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travel_activity")
public class TravelActivity extends Repository<TravelActivity, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @OneToOne
    @Column(name = "travel_id")
    private Travel travel;

    @OneToOne
    @Column(name = "tier_activity_id")
    private TierActivity tierActivity;

    @Column(name = "activity_count")
    private Integer activityCount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travelId) {
        this.travel = travelId;
    }

    public TierActivity getTierActivity() {
        return tierActivity;
    }

    public void setTierActivity(TierActivity tierActivityId) {
        this.tierActivity = tierActivityId;
    }

    public Integer getActivityCount() {
        return activityCount;
    }

    public void setActivityCount(Integer activityCount) {
        this.activityCount = activityCount;
    }
}
