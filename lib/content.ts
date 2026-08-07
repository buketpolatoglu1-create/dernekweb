import fs from "fs";
import path from "path";

export interface Announcement {
  slug: string;
  title: string;
  date: string; // ISO 8601 format: "YYYY-MM-DD"
  excerpt: string;
  body: string; // Markdown content body
  coverImage?: string;
  eventTime?: string; // e.g., "18:00"
  isOnline?: boolean;
}

export interface EventItem {
  slug: string;
  title: string;
  date: string;
  images: string[];
  description: string;
  body: string;
}

const CONTENT_PATH = path.join(process.cwd(), "content");

// Parse frontmatter formatted as YAML block at start of Markdown files
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const [, yamlBlock, content] = match;
  const data: Record<string, any> = {};

  const lines = yamlBlock.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Clean surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Clean brackets for simple arrays e.g., [img1.jpg, img2.jpg]
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^['"]|['"]$/g, ""));
    } else if (value === "true") {
      data[key] = true;
    } else if (value === "false") {
      data[key] = false;
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

function ensureDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Fetch all announcements, sorted descending by date
export async function getAnnouncements(): Promise<Announcement[]> {
  const announcementsDir = path.join(CONTENT_PATH, "announcements");
  ensureDirectory(announcementsDir);

  try {
    const fileNames = fs.readdirSync(announcementsDir);
    const announcements: Announcement[] = fileNames
      .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const fullPath = path.join(announcementsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = parseFrontmatter(fileContents);

        return {
          slug,
          title: data.title || "Duyuru",
          date: data.date || new Date().toISOString().split("T")[0],
          excerpt: data.excerpt || "",
          coverImage: data.coverImage || undefined,
          eventTime: data.eventTime || undefined,
          isOnline: data.isOnline !== undefined ? Boolean(data.isOnline) : undefined,
          body: content.trim(),
        } as Announcement;
      });

    return announcements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading announcements:", error);
    return [];
  }
}

// Fetch a single announcement by its slug (filename minus extension)
export async function getAnnouncementBySlug(slug: string): Promise<Announcement | null> {
  try {
    const announcementsDir = path.join(CONTENT_PATH, "announcements");
    const mdxPath = path.join(announcementsDir, `${slug}.mdx`);
    const mdPath = path.join(announcementsDir, `${slug}.md`);
    let fullPath = "";

    if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
      fullPath = mdPath;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = parseFrontmatter(fileContents);

    return {
      slug,
      title: data.title || "Duyuru",
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || undefined,
      eventTime: data.eventTime || undefined,
      isOnline: data.isOnline !== undefined ? Boolean(data.isOnline) : undefined,
      body: content.trim(),
    } as Announcement;
  } catch (error) {
    console.error(`Error loading announcement with slug "${slug}":`, error);
    return null;
  }
}

// Fetch all events, sorted descending by date
export async function getEvents(): Promise<EventItem[]> {
  const eventsDir = path.join(CONTENT_PATH, "events");
  ensureDirectory(eventsDir);

  try {
    const fileNames = fs.readdirSync(eventsDir);
    const events: EventItem[] = fileNames
      .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const fullPath = path.join(eventsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = parseFrontmatter(fileContents);

        return {
          slug,
          title: data.title || "Etkinlik",
          date: data.date || new Date().toISOString().split("T")[0],
          images: Array.isArray(data.images) ? data.images : [],
          description: data.description || "",
          body: content.trim(),
        } as EventItem;
      });

    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading events:", error);
    return [];
  }
}
