package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.ReadOnly;
import proj.w41k4z.orm.annotation.relationship.OneToOne;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travels")
@ReadOnly
public class TravelView extends Repository<TravelView, Long> {

    @Id
    @Column
    private Long id;

    @Column
    private String name;

    @OneToOne
    @Column(name = "travel_category_id")
    private TravelCategory travelCategory;

    @OneToOne
    @Column(name = "duration_id")
    private Duration duration;

    @OneToOne
    @Column(name = "subscription_tier_id")
    private SubscriptionTier subscriptionTier;

    @Column(name = "sale_price")
    private Double salePrice;

    @Column(name = "total_price")
    private Double totalPrice;

    @Column
    private Double profit;

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

    public TravelCategory getTravelCategory() {
        return travelCategory;
    }

    public void setTravelCategory(TravelCategory category) {
        this.travelCategory = category;
    }

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
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

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Double getProfit() {
        return profit;
    }

    public void setProfit(Double profit) {
        this.profit = profit;
    }
}
