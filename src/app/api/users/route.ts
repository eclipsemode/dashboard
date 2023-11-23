import prisma from "@prisma/prisma";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (e) {
        console.error(e);
    }
}