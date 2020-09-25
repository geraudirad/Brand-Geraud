import userModel from "../models/user";
import {
	validator,
	validationErrors
} from "../validation";
import {
	generateToken
} from "../helpers/token";

const getAllUsers = async (req, res) => {
	try {
		const users = await userModel.find()
		res.status(200).send(users)
	} catch (error) {
		res.status(500)
		res.send({ error })
	}
};

const addNewUser = async (req, res) => {
    const { error } = validator('user', req.body);
    if (error) {
        return validationErrors(res, error);
    }
    const user = new userModel({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
    })
    await user.save()
    res.status(201).send(user)
};

const login = async (req, res) => {
	try {
		const user = await userModel.findOne({ username: req.body.username, password: req.body.password })
		const username = user.username;
		const name = user.name;
		const userinfo = {
			username,
			name
		}
		if (!user)
			res.status(404).send({ message: "Invalid username or password" })
		
		const token = await generateToken(userinfo)
		res.status(200).send({token})
	} catch(error) {
		res.status(404)
		res.send({ error })
	}
};


export {
    getAllUsers,
    addNewUser,
    login
}