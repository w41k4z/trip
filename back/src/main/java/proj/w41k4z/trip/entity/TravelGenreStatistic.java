package proj.w41k4z.trip.entity;

import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.annotation.ReadOnly;
import proj.w41k4z.orm.database.Repository;

@Entity(table = "travel_reservation_genre_statistic")
@ReadOnly
public class TravelGenreStatistic extends Repository<TravelGenreStatistic, Long> {

    @Id
    @Column(name = "travel_id")
    private Long travelId;

    @Column(name = "travel_name")
    private String travelName;

    @Column
    private String duration;

    @Column
    private String category;

    @Column(name = "male_effective")
    private Double maleEffective;

    @Column(name = "female_effective")
    private Double femaleEffective;

    public Long getTravelId() {
        return travelId;
    }

    public void setTravelId(Long travelId) {
        this.travelId = travelId;
    }

    public String getTravelName() {
        return travelName;
    }

    public void setTravelName(String name) {
        this.travelName = name;
    }

    public Double getMaleEffective() {
        return maleEffective;
    }

    public void setMaleEffective(Double maleEffective) {
        this.maleEffective = maleEffective;
    }

    public Double getFemaleEffective() {
        return femaleEffective;
    }

    public void setFemaleEffective(Double femaleEffective) {
        this.femaleEffective = femaleEffective;
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
}
