const User = require('../models/userModel');

class UserController {
    async register(req, res) {
        const { name, email, password, isAdmin } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const newUser = await User.create({ name, email, password, isAdmin });
            return res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            return res.status(500).json({ message: 'Error registering user', error: error.message });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ errors: [{ msg: `${email} is not found!`, param: 'email' }] });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid credentials', param: 'password' }] });
            }

            return res.status(200).json({ valid: true, user });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json('Server internal error!');
        }
    }
}

module.exports = new UserController();
