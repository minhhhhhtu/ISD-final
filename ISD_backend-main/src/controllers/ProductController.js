const ProductService = require('../services/ProductService')

const createProduct = async (request, respond) => {
    try {
        const { name, image, type, countInStock, price, rating, description, discount } = request.body
        if (!name || !image || !type || !countInStock || !price || !rating || !discount) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'Parameter(s) required'
            })
        }
        const response = await ProductService.createProduct(request.body)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const updateProduct = async (request, respond) => {
    try {
        const productId = request.params.id
        const data = request.body
        if (!productId) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'productId required'
            })
        }
        const response = await ProductService.updateProduct(productId, data)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const getDetailsProduct = async (request, respond) => {
    try {
        const productId = request.params.id
        if (!productId) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'productId required'
            })
        }
        const response = await ProductService.getDetailsProduct(productId)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const deleteProduct = async (request, respond) => {
    try {
        const productId = request.params.id
        if (!productId) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'productId required'
            })
        }
        const response = await ProductService.deleteProduct(productId)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const deleteMany = async (request, respond) => {
    try {
        const ids = request.body.ids
        if (!ids) {
            return respond.status(200).json({
                status: 'ERR',
                message: 'ids required'
            })
        }
        const response = await ProductService.deleteManyProduct(ids)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const getAllProduct = async (request, respond) => {
    try {
        const { limit, page, sort, filter } = request.query
        const response = await ProductService.getAllProduct(Number(limit) || null, Number(page) || 0, sort, filter)
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

const getAllType = async (request, respond) => {
    try {
        const response = await ProductService.getAllType()
        return respond.status(200).json(response)
    } catch (error) {
        return respond.status(404).json({
            message: error
        })
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,
    deleteMany,
    getAllType
}
