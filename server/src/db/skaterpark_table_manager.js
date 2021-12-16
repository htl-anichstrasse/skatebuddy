var mysql = require('mysql');

class skateparks {
    constructor(id, name, lon, lat) {
        this.id = id;
        this.name = name;
        this.lon = lon;
        this.lat = lat;
    }
}

skateparks.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skateparks', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

skateparks.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skateparks where SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            },
        );
    });
};
skateparks.insertValue = (con, name, lon, lat) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skateparks(Name, lon, lat) values (?, ?, ?)',
            [name, lon, lat],
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

skateparks.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE Skateparks SET ${column} = ? Where SkateparkID = ? `,
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

skateparks.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM skateparks WHERE SkateparkID = ?',
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
