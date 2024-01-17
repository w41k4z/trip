CREATE VIEW activities AS
SELECT 
    activity.*,
    COALESCE(activity_unit_price.unit_price, 0.) AS unit_price,
    COALESCE(aup.from_date, NOW()) AS from_date
FROM activity
LEFT JOIN (
    SELECT 
        activity_unit_price.activity_id,
        MAX(activity_unit_price.from_date) AS from_date
    FROM activity_unit_price
    GROUP BY
        activity_unit_price.activity_id
) AS aup
    ON activity.id = aup.activity_id
LEFT JOIN activity_unit_price
    ON activity_unit_price.activity_id = aup.activity_id
    AND activity_unit_price.from_date = aup.from_date
;

CREATE VIEW employee_salaries AS
SELECT
    employee.*,
    COALESCE(hourly_wage.salary, 0.) AS salary,
    COALESCE(hw.from_date, NOW()) AS from_date
FROM employee
JOIN position_grade 
    ON position_grade.id = employee.position_grade_id
JOIN position 
    ON position.id = position_grade.position_id
LEFT JOIN (
    SELECT 
        hourly_wage.position_id,
        MAX(hourly_wage.from_date) AS from_date
    FROM hourly_wage
    GROUP BY
        hourly_wage.position_id
) AS hw
    ON hw.position_id = position.id
LEFT JOIN hourly_wage 
    ON hourly_wage.position_id = hw.position_id
    AND hourly_wage.from_date = hw.from_date
;

CREATE VIEW employees AS
SELECT 
    employee.*,
    CONCAT(position.name, ' ', position_grade.grade) AS position_grade,
    (employee_salaries.salary + (employee_salaries.salary * position_grade.increase)) AS salary,
    employee_salaries.from_date
FROM employee
JOIN employee_salaries
    ON employee_salaries.id = employee.id
JOIN position_grade
    ON employee.position_grade_id = position_grade.id
JOIN position
    ON position_grade.position_id = position.id
;

CREATE VIEW travel_activities AS
SELECT
    travel_activity.id,
    activities.id AS activity_id,
    activities.name AS activity_name,
    travel_activity.travel_id, 
    travel.name AS travel_name,
    travel.duration_id,
    duration.label AS duration,
    travel.travel_category_id,
    travel_category.category,
    travel.subscription_tier_id,
    subscription_tier.name AS subscription_tier_name,
    COALESCE(travel_activity.activity_count, 0) AS activity_count
FROM travel_activity
JOIN travel 
    ON travel.id = travel_activity.travel_id
JOIN duration 
    ON duration.id = travel.duration_id
JOIN travel_category 
    ON travel_category.id = travel.travel_category_id
JOIN subscription_tier 
    ON subscription_tier.id = travel.subscription_tier_id
JOIN tier_activity 
    ON tier_activity.id = travel_activity.tier_activity_id
RIGHT JOIN activities 
    ON activities.id = tier_activity.activity_id
;

CREATE VIEW travel_employee_salaries AS
SELECT 
    travel.id AS travel_id,
    travel_employee.employee_id,
    (travel_employee.duration * employees.salary) AS salary
FROM travel
JOIN travel_employee 
    ON travel.id = travel_employee.travel_id
JOIN employees
    ON employees.id = travel_employee.employee_id
;

CREATE VIEW travels AS
SELECT 
    travel.id,
    travel.name,
    travel.duration_id,
    travel.travel_category_id,
    travel.subscription_tier_id,
    travel.sale_price,
    SUM(COALESCE(travel_activities.activity_count, 0) * COALESCE(activities.unit_price, 0)) AS total_price,
    travel.sale_price - SUM(COALESCE(travel_employee_salaries.salary, 0)) - (SUM(COALESCE(travel_activities.activity_count, 0) * COALESCE(activities.unit_price, 0))) AS profit
FROM travel
LEFT JOIN travel_activities
    ON travel_activities.travel_id = travel.id
LEFT JOIN activities 
    ON activities.id = travel_activities.activity_id
LEFT JOIN travel_employee_salaries
    ON travel_employee_salaries.travel_id = travel.id
GROUP BY
    travel.id
;

CREATE VIEW stock_state AS
SELECT 
    activities.id AS activity_id,
    COALESCE(SUM(in_quantity) - SUM(out_quantity), 0) AS remaining_quantity
FROM stock_movement
RIGHT JOIN activities
    ON activities.id = stock_movement.activity_id
GROUP BY
    activities.id
ORDER BY 
    activities.id;

CREATE VIEW travel_activity_stock_state AS
SELECT
    travel_activities.*,
    stock_state.remaining_quantity
FROM travel_activities
JOIN stock_state
    ON stock_state.activity_id = travel_activities.activity_id
;
