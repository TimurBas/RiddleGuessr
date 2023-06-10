# Table: Movies

title (Primary Key)
genre (Text)
year (Integer)
language_code (Text)
created_at (Timestamp)

# Table: Images

id (Primary Key)
movie_id (Foreign Key referencing Movies.title)
image_base64 (Text)
created_at (Timestamp)

# Table: Users

email (Primary Key)
created_at (Timestamp)
billing_id (Foreign Key referencing Billing.id)

# Table: Billing

id (Primary Key)
created_at (Timestamp)
card_number (Text)
expiration_date (Date)
cvv (Text)
subscription_text (Text)

# ------ Not implemented yet ------

# Table: GameSessions

session_id (Primary Key)
session_name (Text)
start_time (Timestamp)
end_time (Timestamp)
score (Integer)

# Table: Participants

participant_id (Primary Key)
session_id (Foreign Key referencing GameSessions.session_id)
email (Foreign Key referencing Users.email)

# Table: Guesses

guess_id (Primary Key)
participant_id (Foreign Key referencing Participants.participant_id)
session_id (Foreign Key referencing GameSessions.session_id)
round_number (Integer)
guess (Text)
guess_time (Timestamp)

# Table: Wins

win_id (Primary Key)
session_id (Foreign Key referencing GameSessions.session_id)
winner_email (Foreign Key referencing Users.email)
opponent_email (Foreign Key referencing Users.email)
