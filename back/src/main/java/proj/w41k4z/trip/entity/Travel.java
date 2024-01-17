package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Generated;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.relationship.OneToOne;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travel")
public class Travel extends Repository<Travel, Long> {

    @Id
    @Column
    @Generated
    private Long id;

    @Column
    private String name;

    @OneToOne
    @Column(name = "duration_id")
    private Duration duration;

    @OneToOne
    @Column(name = "travel_category_id")
    private TravelCategory travelCategory;

    @OneToOne
    @Column(name = "subscription_tier_id")
    private SubscriptionTier subscriptionTier;

    @Column(name = "sale_price")
    private Double salePrice;

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

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public TravelCategory getTravelCategory() {
        return travelCategory;
    }

    public void setTravelCategory(TravelCategory travelCategory) {
        this.travelCategory = travelCategory;
    }

    public SubscriptionTier getSubscriptionTier() {
        return subscriptionTier;
    }

    public void setSubscriptionTier(SubscriptionTier subscriptionTier) {
        this.subscriptionTier = subscriptionTier;
    }

    public Double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(Double salePrice) {
        this.salePrice = salePrice;
    }
}