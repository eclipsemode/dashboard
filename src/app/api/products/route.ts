import prisma from "@prisma/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');
    let products;
    if (query) {
        products = await prisma.product.findMany({
            where: {
                title: {
                    contains: query,
                    mode: 'insensitive'
                }
            }
        });
    } else {
        products = await prisma.product.findMany();
    }

    return NextResponse.json(products);
}