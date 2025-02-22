import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("name");
    const hasGithub = searchParams.has("github");

    const title = hasTitle ? searchParams.get("name")?.slice(0, 100) : "Guest";
    const github = hasGithub ? searchParams.get("github")?.slice(0, 100) : "@github";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <img
              width="1000"
              height="600"
              src="https://images.unsplash.com/photo-1701772165288-39c9ef3775c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              flexDirection: "column",
            }}
          >
            <p className="flex">{title}</p>
            <p className="flex">{github}</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
  catch (error: any) {
    console.log(error.message);

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
