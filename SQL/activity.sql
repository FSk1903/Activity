DELIMITER //

CREATE PROCEDURE Get_Details()
BEGIN
	SELECT * FROM library;
END // 

DELIMITER ;   

DELIMITER //

CREATE PROCEDURE insert_details(
    p_id VARCHAR(80),
    p_title VARCHAR(80), 
    p_author VARCHAR(80), 
    p_publication_date DATE, 
    p_genre VARCHAR(50), 
    p_isbn VARCHAR(20),
    p_available BOOLEAN )
BEGIN
INSERT INTO library (id, title, author, publication_date, genre, isbn, available)       
VALUES (p_id, p_title, p_author, p_publication_date, p_genre, p_isbn, p_available);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE update_details(
    u_id VARCHAR(80),
    u_author VARCHAR(80)) 
BEGIN
UPDATE library
SET author = u_author
WHERE id = u_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE delete_details(
    d_id VARCHAR(80))
BEGIN
	DELETE FROM library
	WHERE id = d_id;
END //

CALL Get_Details();
CALL insert_details(2, 'GOT', 'Smith', 20121212, 'mystery', 'abc123', true);
CALL update_details(2, 'Mike');
CALL delete_details(1);