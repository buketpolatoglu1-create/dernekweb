"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";

interface InstagramFeedProps {
  posts: InstagramPost[];
  profileUrl: string;
  username: string;
}

export function InstagramFeed({
  posts,
  profileUrl,
  username,
}: InstagramFeedProps) {
  const hasPosts = posts.length > 0;

  return (
    <section className="py-16 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white shadow-lg">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary">
                Instagram&apos;da Biz
              </h2>
              <p className="text-muted-foreground text-sm mt-0.5">
                @{username} &middot; Etkinliklerimiz ve anlarımız
              </p>
            </div>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <Instagram className="h-4 w-4" />
            Takip Et
          </a>
        </div>

        {/* Posts Grid */}
        {hasPosts ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {posts.map((post) => (
              <InstagramPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <PlaceholderGrid profileUrl={profileUrl} username={username} />
        )}
      </div>
    </section>
  );
}

function InstagramPostCard({ post }: { post: InstagramPost }) {
  const [imageError, setImageError] = useState(false);
  const imageUrl =
    post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
    >
      {imageUrl && !imageError ? (
        <img
          src={imageUrl}
          alt={post.caption?.slice(0, 100) || "Instagram post"}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
          <Instagram className="h-8 w-8 text-primary/30" />
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-3">
          {post.caption && (
            <p className="text-xs leading-relaxed line-clamp-3">
              {post.caption}
            </p>
          )}
        </div>
      </div>

      {/* Video indicator */}
      {post.media_type === "VIDEO" && (
        <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 text-white fill-current"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      )}

      {/* Carousel indicator */}
      {post.media_type === "CAROUSEL_ALBUM" && (
        <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 text-white fill-current"
          >
            <rect x="3" y="3" width="15" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="6" y="6" width="15" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}
    </a>
  );
}

function PlaceholderGrid({
  profileUrl,
  username,
}: {
  profileUrl: string;
  username: string;
}) {
  // Generate placeholder grid cells with gradient variations
  const gradients = [
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-purple-500/20",
    "from-pink-500/20 to-orange-400/20",
    "from-indigo-500/20 to-blue-500/20",
    "from-violet-500/20 to-purple-500/20",
    "from-fuchsia-500/20 to-pink-500/20",
    "from-purple-400/20 to-indigo-500/20",
    "from-blue-400/20 to-cyan-400/20",
    "from-pink-400/20 to-rose-400/20",
    "from-violet-400/20 to-fuchsia-400/20",
    "from-indigo-400/20 to-violet-400/20",
    "from-purple-600/20 to-blue-600/20",
    "from-pink-600/20 to-purple-600/20",
    "from-orange-400/20 to-pink-400/20",
    "from-cyan-500/20 to-blue-500/20",
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
        {gradients.map((gradient, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center group transition-all duration-300 hover:scale-[1.02]`}
          >
            <Instagram className="h-6 w-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
          </div>
        ))}
      </div>

      {/* Overlay CTA */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background via-background/80 to-background/40 rounded-lg">
        <div className="text-center space-y-4 p-6">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white shadow-xl">
            <Instagram className="h-8 w-8" />
          </div>
          <h3 className="font-heading text-xl font-bold text-primary">
            @{username}
          </h3>
          <p className="text-muted-foreground text-sm max-w-md">
            Instagram hesabımızı takip edin ve etkinliklerimizden anında haberdar olun!
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Instagram className="h-4 w-4" />
            Instagram&apos;da Takip Et
          </a>
          <p className="text-xs text-muted-foreground/60">
            API bağlantısı yapılandırıldığında fotoğraflar burada görünecektir.
          </p>
        </div>
      </div>
    </div>
  );
}
