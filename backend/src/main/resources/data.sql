
-- Roles
-- 1 - User
-- 2 - Admin
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

-- Users
-- 1 - Alex - pw: admin [ encrypted ]
-- 2 - Carlos - pw: user  [ encrypted ]
INSERT INTO users(email, full_name, username, password )
VALUES 		('alex@gmail.com', 'Alex Wong de Freitas', 'admin', '$2a$10$Uq6lWKvBWwLrtusc4uyTMe/zm0.RGhWhW8Qz7/wPDx7/G.c8Li5iq');
INSERT INTO users(email, full_name, username, password )
VALUES 		('carlos@gmail.com', 'Carlos Henrique',  'user', '$2a$10$Xd8H4STQfJ1snBOBf5HJZuBg.dbT/Hff1ViewsCRM4uSnNv7H6Dm2');

-- Alex - Roles: Admin
-- Carlos - Roles: User
INSERT INTO user_roles(user_id, role_id)
VALUES 		(1, 2), (2, 1);


-- Reports
INSERT INTO Reports(Create_Date, Location, Report_Message, Report_Title, User_Id)
VALUES		('2021-09-14 23:59:59', 'São Paulo', 'Tacaram fogo na estatua do Borba Gato', 'Borba Gato', 1),
			('2021-10-16 12:34:11', 'São Paulo', 'Burn burn burn', 'Burn the Witch', 2);



