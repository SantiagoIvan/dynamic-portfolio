import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Santiago Feijoo - Full Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                        "linear-gradient(to bottom, #000000, #022c22, rgba(6,78,59,0.4))",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", fontSize: 28, color: "#34d399" }}>
                    Portfolio
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 76,
                        fontWeight: 700,
                        marginTop: 16,
                    }}
                >
                    Santiago Feijoo
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 36,
                        color: "#34d399",
                        marginTop: 12,
                    }}
                >
                    Full Stack Developer
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
                    {["Java", "Next.js", "Node.js", "TypeScript", "Python"].map((t) => (
                        <div
                            key={t}
                            style={{
                                display: "flex",
                                fontSize: 24,
                                padding: "8px 20px",
                                borderRadius: 8,
                                background: "rgba(255,255,255,0.1)",
                            }}
                        >
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
