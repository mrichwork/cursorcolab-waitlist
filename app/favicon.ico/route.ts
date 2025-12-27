import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const iconPath = join(process.cwd(), "public", "icon.png");
    const buffer = await readFile(iconPath);

    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    return new Response("Not Found", { status: 404 });
  }
}
