import OpenAI from "openai";

export const runtime = "nodejs";

type GenerateImageRequest = {
  prompt?: string;
  product?: string;
  format?: string;
  style?: string;
  size?: "1024x1024" | "1024x1536" | "1536x1024";
  quality?: "low" | "medium" | "high";
};

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ error: "OPENAI_API_KEY nao configurada no servidor." }, { status: 500 });
  }

  const body = (await request.json()) as GenerateImageRequest;
  const prompt = body.prompt?.trim();

  if (!prompt) {
    return Response.json({ error: "Prompt obrigatorio." }, { status: 400 });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const enrichedPrompt = [
    "Create a premium social media creative for an internal Mafra Labs growth studio.",
    "Style should look like a polished app marketing asset, suitable for organic Instagram/TikTok/Pinterest content.",
    `Product: ${body.product ?? "Mafra Labs app"}.`,
    `Format: ${body.format ?? "vertical social creative"}.`,
    `Visual direction: ${body.style ?? "premium SaaS editorial, realistic app-adjacent scene"}.`,
    "Avoid fake testimonials, fake app store badges, unreadable UI, distorted hands, and misleading platform logos.",
    "Leave clean negative space for copy overlays.",
    prompt,
  ].join("\n");

  const result = await openai.images.generate({
    model: "gpt-image-2",
    prompt: enrichedPrompt,
    size: body.size ?? "1024x1536",
    quality: body.quality ?? "medium",
  });

  const image = result.data?.[0]?.b64_json;

  if (!image) {
    return Response.json({ error: "A OpenAI nao retornou imagem." }, { status: 502 });
  }

  return Response.json({ image, mimeType: "image/png" });
}
