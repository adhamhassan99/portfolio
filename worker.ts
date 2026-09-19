/**
 * Cloudflare Worker fronting the static Next export.
 * Callers: wrangler.jsonc `main` — intercepts every request before ASSETS.
 * Purpose: 301 www → apex; set image Content-Type for extensionless OG/icons.
 */
export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const IMAGE_PATHS = ["/opengraph-image", "/icon", "/apple-icon"];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.adhamabdelwahab.com") {
      url.hostname = "adhamabdelwahab.com";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const isImageRoute = IMAGE_PATHS.includes(url.pathname);

    if (isImageRoute && response.ok) {
      const headers = new Headers(response.headers);
      headers.set("Content-Type", "image/png");
      headers.set("Cache-Control", "public, max-age=86400, immutable");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};
