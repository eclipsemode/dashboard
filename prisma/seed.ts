import {PrismaClient} from '@prisma/client'
import {usersMock} from "./data/usersMock";
import {productsMock} from "./data/productsMock";

const prisma = new PrismaClient()
async function main() {
    const usersPromises = usersMock.map((user) => {
        return prisma.user.upsert({
            where: {email: user.email},
            update: {},
            create: {
                username: user.username,
                image: user.image,
                email: user.email,
                password: user.password,
                phone: user.phone,
                role: user.role,
                isActive: user.isActive,
                address: user.address
            }
        })
    })

    const usersCreated = await Promise.all(usersPromises);

    const productsPromises = productsMock.map((product) => {
        return prisma.product.upsert({
            where: {title: product.title},
            update: {},
            create: {
                title: product.title,
                price: product.price,
                description: product.description,
                stock: product.stock
            }
        })
    })

    const productsCreated = Promise.all(productsPromises);

    console.log({usersCreated, productsCreated})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })