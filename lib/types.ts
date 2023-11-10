interface Project {
  _id: string;
  title: string;
  subtitle: string;
  service: string[],
  industry:string[],
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: { title: string }[];
  slug: {
    current: string;
  };
  images: {
    asset: {
      url: string;
    };
  }[];
}

export type { Project };
