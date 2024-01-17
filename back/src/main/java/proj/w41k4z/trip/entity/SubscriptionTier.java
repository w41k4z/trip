package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.relationship.Join;
import proj.w41k4z.orm.annotation.relationship.ManyToMany;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "subscription_tier")
public class SubscriptionTier extends Repository<SubscriptionTier, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column
    private String name;

    @ManyToMany
    @Join(table = "tier_activity", joinColumn = "subscription_tier_id", inverseJoinColumn = "activity_id")
    Activity[] activities;

    @Column
    private String description;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Activity[] getActivities() {
        return activities;
    }

    public void setActivities(Activity[] activities) {
        this.activities = activities;
    }
}