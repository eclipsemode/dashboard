import prisma from "@prisma/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get('query');
        let users;
        if (query) {
            users = await prisma.user.findMany({
                where: {
                    username: {
                        contains: query,
                        mode: 'insensitive'
                    }
                }
            });
        } else {
            users = await prisma.user.findMany();
        }

        return NextResponse.json(users);
    } catch (e) {
        console.error(e);
    }
}