import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("name");
    const hasGithub = searchParams.has("github");
    const title = hasTitle ? searchParams.get("name")?.slice(0, 100) : "Guest";
    const github = hasGithub
      ? searchParams.get("github")?.slice(0, 100)
      : "@github";

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
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
              src={
                "https://imgs.search.brave.com/REDM8Px3QsQ4x3SzSc0HmSbGtYzskNYPItuwN76YTFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzM0L0h5/ZHJvY2hvZXJpc19o/eWRyb2NoYWVyaXNf/aW5fQnJhemlsX2lu/X1BldHIlQzMlQjNw/b2xpcyUyQ19SaW9f/ZGVfSmFuZWlybyUy/Q19CcmF6aWxfMDku/anBnLzUxMnB4LUh5/ZHJvY2hvZXJpc19o/eWRyb2NoYWVyaXNf/aW5fQnJhemlsX2lu/X1BldHIlQzMlQjNw/b2xpcyUyQ19SaW9f/ZGVfSmFuZWlybyUy/Q19CcmF6aWxfMDku/anBn"
              }
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
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
