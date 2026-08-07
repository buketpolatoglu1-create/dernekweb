export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const INSTAGRAM_USERNAME = "18_28genclikdernegi";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

let cache: { data: InstagramPost[]; fetchedAt: number } | null = null;

/**
 * Fetch Instagram posts from the Graph API.
 * Requires INSTAGRAM_ACCESS_TOKEN env variable.
 * Returns an empty array if the token is not set.
 */
export async function getInstagramPosts(
  limit = 30
): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    console.log(
      "[Instagram] INSTAGRAM_ACCESS_TOKEN not set – using placeholder data"
    );
    return [];
  }

  // Return cached data if still fresh
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL) {
    return cache.data.slice(0, limit);
  }

  try {
    const fields =
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error(
        `[Instagram] API error ${res.status}: ${await res.text()}`
      );
      return cache?.data.slice(0, limit) ?? [];
    }

    const json = await res.json();
    const posts: InstagramPost[] = json.data ?? [];

    cache = { data: posts, fetchedAt: Date.now() };

    return posts.slice(0, limit);
  } catch (err) {
    console.error("[Instagram] Fetch error:", err);
    return cache?.data.slice(0, limit) ?? [];
  }
}

export function getInstagramProfileUrl(): string {
  return `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
}

export { INSTAGRAM_USERNAME };
