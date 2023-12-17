import prisma from "@prisma/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get('query');
        const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
        const take = searchParams.get('take') ? Number(searchParams.get('take')) : 5;
        let users;
        let usersAmount = 0;
        if (query) {
            users = await prisma.user.findMany({
                skip: (page - 1) * take,
                take,
                where: {
                    username: {
                        contains: query,
                        mode: 'insensitive'
                    }
                }
            });
            usersAmount = await prisma.user.count({
                where: {
                    username: {
                        contains: query,
                        mode: 'insensitive'
                    }
                }
            });
        } else {
            users = await prisma.user.findMany({
                skip: (page - 1) * take,
                take
            });
            usersAmount = await prisma.user.count();
        }

        return NextResponse.json({users, usersAmount, take});
    } catch (e) {
        console.error(e);
    }
}