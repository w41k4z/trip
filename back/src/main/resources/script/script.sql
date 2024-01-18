CREATE DATABASE trip with owner w41k4z;

-- bouquet
CREATE TABLE subscription_tier (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE activity (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE activity_unit_price (
    id SERIAL PRIMARY KEY,
    activity_id INTEGER NOT NULL REFERENCES activity(id),
    unit_price DOUBLE PRECISION NOT NULL,
    from_date TIMESTAMP NOT NULL,
    CONSTRAINT unique_activity_unit_price UNIQUE(activity_id, unit_price, from_date)
);

CREATE TABLE tier_activity (
    id SERIAL PRIMARY KEY,
    subscription_tier_id INTEGER REFERENCES subscription_tier(id),
    activity_id INTEGER REFERENCES activity(id),
    CONSTRAINT unique_tier_activity UNIQUE (subscription_tier_id, activity_id)
);

CREATE TABLE duration (
    id SERIAL PRIMARY KEY,
    label VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE position (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE hourly_wage (
    id SERIAL PRIMARY KEY,
    from_date TIMESTAMP NOT NULL,
    position_id INTEGER REFERENCES position(id),
    salary DOUBLE PRECISION DEFAULT 0. 
);

CREATE TABLE position_grade (
    id SERIAL PRIMARY KEY,
    position_id INTEGER REFERENCES position(id) NOT NULL,
    grade varchar(50) NOT NULL,
    increase DOUBLE PRECISION DEFAULT 0., -- 0 -> 1 (100%)
    CONSTRAINT unique_position_grade UNIQUE (position_id, grade)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    position_grade_id INTEGER REFERENCES position_grade(id) NOT NULL
);

CREATE TABLE travel_category (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE travel (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    duration_id INTEGER REFERENCES duration(id),
    travel_category_id INTEGER REFERENCES travel_category(id),
    subscription_tier_id INTEGER REFERENCES subscription_tier(id),
    sale_price DOUBLE PRECISION NOT NULL
);

CREATE TABLE travel_activity (
    id SERIAL PRIMARY KEY,
    travel_id INTEGER REFERENCES travel(id),
    tier_activity_id INTEGER REFERENCES tier_activity(id),
    activity_count INTEGER NOT NULL,
    CONSTRAINT unique_travel_activity UNIQUE (travel_id, tier_activity_id)
);

CREATE TABLE travel_employee (
    id SERIAL PRIMARY KEY,
    travel_id INTEGER REFERENCES travel(id) NOT NULL,
    employee_id INTEGER REFERENCES employee(id) NOT NULL,
    duration DOUBLE PRECISION DEFAULT 1.
);

CREATE TABLE stock_movement ( 
	id serial PRIMARY KEY,
    action_date TIMESTAMP NOT NULL,
    activity_id INTEGER NOT NULL REFERENCES activity(id),
	in_quantity double precision DEFAULT 0.,
	out_quantity double precision DEFAULT 0.,
	CHECK ( in_quantity >= 0 AND out_quantity >= 0 )
);