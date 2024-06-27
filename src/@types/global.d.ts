// global.d.ts
declare module "*.svg" {
  const value: string;
  export = value;
}
declare module "*.webp" {
  const value: string;
  export = value;
}
declare module "*.avif" {
  const value: string;
  export = value;
}
declare module "*.md" {
  const value: string;
  export = value;
}
declare module "*.json" {
  const value: any;
  export = value;
}
interface Post {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    image: string;
    author: string;
    tags: string[];
    pubDate: Date;
    updatedDate?: Date;
  };
}

// 404页面Link
interface NotFoundLink {
  name: string;
  href: string;
  description: string;
  icon: any;
}
