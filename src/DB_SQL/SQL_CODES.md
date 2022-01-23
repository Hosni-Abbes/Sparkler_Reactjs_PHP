### CREATE DATABASE

CREATE DATABASE sparkler

### CRETE TABLE ADMIN

CREATE TABLE admin (
admin_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
admin_email varchar(200) NOT NULL,
admin_pass varchar(200) NOT NULL
);

### CRETE TABLE CLIENTS

CREATE TABLE clients (
user_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
his_game_id varchar(100) NOT NULL,
his_confirmed_id varchar(100) NOT NULL,
proof_img varchar(400) NOT NULL,
num_diamonds varchar(255) NOT NULL,
game varchar(255) NOT NULL,
status varchar(50) NOT NULL,
isFinished varchar(50) NOT NULL
);
