const UserService = require('../services/UserService')
const JwtService = require('../services/JwtService')

const createUser = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!email || !password || !confirmPassword) {
            return res.status(404).json({
                status: 'ERR',
                message: 'Parameter Required'
            })
        } else if (!isCheckEmail) {
            return res.status(404).json({
                status: 'ERR',
                message: 'Invalid Email'
            })
        } else if (password !== confirmPassword) {
            return res.status(404).json({
                status: 'ERR',
                message: 'Invalid Confirm Password'
            })
        }
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const loginUser = async (req, res) => {
    try {
        // const { email, password } = req.body
        const { email, password } = req.body
        console.log(req.body)
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        // if (!email || !password) {
        if (!email || !password) {
            return res.status(404).json({
                status: 'ERR',
                message: 'Parameter Required'
            })
        } else if (!isCheckEmail) {
            return res.status(404).json({
                status: 'ERR',
                message: 'Invalid Email'
            })
        }
        const response = await UserService.loginUser(req.body)
        // const { refresh_token, ...newReponse } = response
        // res.cookie('refresh_token', refresh_token, {
        //     httpOnly: true,
        //     secure: false,
        //     sameSite: 'strict',
        //     path: '/',
        // })
        // return res.status(200).json({...newReponse, refresh_token})
        return res.status(200).json({response})
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const data = req.body
        if (!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        }
        const response = await UserService.updateUser(userId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const refreshToken = async (req, res) => {
    try {
        let token = req.headers.token.split(' ')[1]
        if (!token) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The token is required'
            })
        }
        const response = await JwtService.refreshTokenJwtService(token)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = { 
    createUser,
    loginUser,
    updateUser,
    refreshToken
}