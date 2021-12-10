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

skateparkPictures.update = (con, row, oldValue, newValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE Skatepark_pictures SET ? Where ? = ?'[
                (row, oldValue, newValue)
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

skateparkPictures.delete = (con, row, rowValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM Skatepark_pictures WHERE ? = ?'[(row, rowValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};
