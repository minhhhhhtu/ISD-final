const OrderService = require('../services/OrderService')

const createOrder = async (request, respond) => {
    try { 
        const { paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, city, phone } = request.body
        if (!paymentMethod || !itemsPrice || !shippingPrice || !totalPrice || !fullName || !address || !city || !phone) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'Parameter(s) required'
            })
        }
        const response = await OrderService.createOrder(request.body)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const getAllOrderDetails = async (request, respond) => {
    try {
        const userId = request.params.id
        if (!userId) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'userId required'
            })
        }
        const response = await OrderService.getAllOrderDetails(userId)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const getDetailsOrder = async (request, respond) => {
    try {
        const orderId = request.params.id
        if (!orderId) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'userId required'
            })
        }
        const response = await OrderService.getOrderDetails(orderId)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const cancelOrderDetails = async (request, respond) => {
    try {
        const data= request.body.orderItems
        const orderId= request.body.orderId
        if (!orderId) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'orderId required'
            })
        }
        const response = await OrderService.cancelOrderDetails(orderId, data)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const getAllOrder = async (request, respond) => {
    try {
        const data = await OrderService.getAllOrder()
        return respond.status(200).json(data)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

module.exports = {
    createOrder,
    getAllOrderDetails,
    getDetailsOrder,
    cancelOrderDetails,
    getAllOrder
}
