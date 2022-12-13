import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    // Get product by Id
    if (req.method === 'GET') {
        try {
            const response = await prisma.product.findUnique({
                where: {
                    id: Number(req.query.productId),
                },
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(404).json({ msg: error.message })
        }
    }

    // Update product
    else if (req.method === 'PATCH') {
        const { name, price } = req.body
        try {
            const product = await prisma.product.update({
                where: {
                    id: Number(req.query.productId),
                },
                data: {
                    name: name,
                    price: price,
                },
            })
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }

    // Delete product
    else if (req.method === 'DELETE') {
        try {
            const product = await prisma.product.delete({
                where: {
                    id: Number(req.query.productId),
                },
            })
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }

    // HTTP method not supported!
    else {
        res.setHeader('Allow', ['GET', 'PATCH', 'DELETE'])
        res.status(405).json({
            message: `HTTP method ${req.method} is not supported.`,
        })
    }
}
