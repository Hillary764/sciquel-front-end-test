import { NextRequest, NextResponse } from "next/server";
import { contactPostSchema } from "./schema";

export async function POST(req: NextRequest) {
  const formdata = await req.formData();
  const formObject = Object.fromEntries(formdata);

  const res = contactPostSchema.safeParse(formObject);

  if (!res.success) {
    return NextResponse.json({ error: res.error }, { status: 400 });
  }

  return NextResponse.json({ test_post: "success" });
}
