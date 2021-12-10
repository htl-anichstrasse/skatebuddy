var mysql = require('mysql');

class skaterparks {
    constructor(id, name, lon, lat) {
        this.id = id;
        this.name = name;
        this.lon = lon;
        this.lat = lat;
    }
}

skaterparks.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skateparks', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

skaterparks.insertValue = (con, name, lon, lat) => {
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

skaterparks.update = (con, row, oldValue, newValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE skateparks SET ? Where ? = ?'[(row, oldValue, newValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

skaterparks.delete = (con, row, rowValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM skateparks WHERE ? = ?'[(row, rowValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};
