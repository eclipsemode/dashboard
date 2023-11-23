import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const admin = await prisma.user.upsert({
        where: { email: 'admin@dashboard.com' },
        update: {},
        create: {
            username: 'admin',
            image: '/noavatar.png',
            email: 'admin@dashboard.com',
            password: '12345678',
            phone: '89180000000',
            role: 'admin',
            isActive: true,
            address: 'no address'
        },
    })

    const product = await prisma.product.upsert({
        where: {id: 1},
        update: {},
        create: {
            title: 'iPhone 15',
            price: 1200,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, itaque!',
            stock: 27
        }
    })
    console.log({ admin, product })
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