CREATE VIEW activities AS
SELECT 
    activity.*,
    COALESCE(activity_unit_price.unit_price, 0.) AS unit_price,
    MAX(COALESCE(activity_unit_price.from_date, NOW())) AS from_date
FROM activity
LEFT JOIN activity_unit_price
    ON activity.id = activity_unit_price.activity_id
GROUP BY
    activity.id,
    activity.name,
    activity.description,
    activity_unit_price.unit_price
;

CREATE VIEW employees AS
SELECT 
    employee.*,
    MAX(employee_hourly_wage.salary_date) AS salary_date,
    employee_hourly_wage.salary
FROM employee
JOIN employee_hourly_wage
    ON employee.id = employee_hourly_wage.employee_id
GROUP BY
    employee.id,
    employee.name,
    employee.first_name,
    employee_hourly_wage.salary
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
    ON tier_activity.subscription_tier_id = subscription_tier.id
JOIN activities 
    ON activities.id = tier_activity.activity_id;

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
