import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    // Get all product
    if (req.method === 'GET') {
        try {
            const response = await prisma.product.findMany()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }

    // Create new product
    else if (req.method === 'POST') {
        const { name, price } = req.body
        try {
            const product = await prisma.product.create({
                data: {
                    name: name,
                    price: price,
                },
            })
            res.status(201).json(product)
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }

    // HTTP method not supported!
    else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({
            message: `HTTP method ${req.method} is not supported.`,
        })
    }
}
