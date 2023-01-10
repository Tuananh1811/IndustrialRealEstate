import bcrypt from 'bcryptjs';
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExits = await checkUserEmail(email);
            if (isExits) {
                //true
                //compare password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password'],
                    raw: true
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "ok";
                        delete user.password;//khoong hien thi password
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = "wrong password";
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User is not found`;
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exits in your system. Plz try other email`;
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: userEmail
                }
            })
            if (user) {
                resolve(true)
            } else { resolve(false) }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    //ẩn password
                    attributes: {
                        exclude: ['password']
                    }
                })
            } if (userId && userId !== 'ALL') {
                users = db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['password']
                    }
                });
            }
            resolve(users);
        }
        catch (e) {
            reject(e);
        }
    })
}
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //check email
            let check = await checkUserEmail(data.email);
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: 'E-mail is being used. Please use another email.'
                });
            }
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                companyName: data.companyName,
                roleId: data.roleId
            })
            resolve({
                errCode: 0,
                errMessage: 'OK'
            });
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            console.log(user);
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: "The user is not exits"
                })
            }
            await db.User.destroy({
                where: { id: userId }
            });

            resolve({
                errCode: 0,
                message: 'The user is deleted'
            })

        } catch (e) {
            reject(e);
        }
    })

}
let updateUserData= (data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            if(!data.id){
                resolve({
                    errCode:2,
                    errMessage:'Missing required parameters!'
                })

            }
            let user=await db.User.findOne({
                where: {id:data.id},
                raw:false
            })
            if(user){
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.address=data.address;
                await user.save();
                // await db.User.save({
                //     firstName:data.firstName,
                //     lastName:data.lastName,
                //     address:data.address
                // });
               
                resolve({
                    errCode:0,
                    message:'Update the user success'
                }
                    );
            }else{
                resolve({
                    errCode:1,
                    errMessage:'User is not found'
                });
            } 
        }catch(e){
reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData:updateUserData

}