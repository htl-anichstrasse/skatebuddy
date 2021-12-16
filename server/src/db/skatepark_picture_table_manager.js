class skateparkPictures {
    constructor(parkId, picId) {
        this.parkId = parkId;
        this.picId = picId;
    }
}

skateparkPictures.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skatepark_pictures', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

skateparkPictures.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skatepark_pictures where SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                result[0];
            },
        );
    });
};
skateparkPictures.insertValue = (con, parkId, picId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skatepark_pictures(SkaterparkID, PictureId) values (?, ?)',
            [parkId, picId],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0]);
                console.log('Succsessfully inserted!');
            },
        );
    });
};

skateparkPictures.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE Skatepark_pictures SET ${column} = ? Where SkateparkID = ? `,
            [(column, newValue, id)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

skateparkPictures.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM Skatepark_pictures WHERE SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};
