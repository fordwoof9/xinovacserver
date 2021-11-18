const db = require('../config/database')

exports.bookingRoom = async (body) => {
    let result = await db.query("INSERT INTO xinovac.`user`(user_name, user_email, user_room) VALUES(?,?,?)",[body.user_name, body.user_email, body.user_room])
    return result.values
    // if(result.insertId){
    //     return await db.query("SELECT LAST_INSERT_ID();")
    // } else {
    //     return false
    // }
}