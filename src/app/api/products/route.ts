import prisma from "@prisma/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const take = searchParams.get('take') ? Number(searchParams.get('take')) : 5;
    let products;
    let productsAmount = 0;
    if (query) {
        products = await prisma.product.findMany({
            skip: (page - 1) * take,
            take,
            where: {
                title: {
                    contains: query,
                    mode: 'insensitive'
                }
            }
        });
        productsAmount = await prisma.product.count({
            where: {
                title: {
                    contains: query,
                    mode: 'insensitive'
                }
            }
        });
    } else {
        products = await prisma.product.findMany({
            skip: (page - 1) * take,
            take
        });
        productsAmount = await prisma.product.count();
    }

    return NextResponse.json({products, productsAmount, take});
}