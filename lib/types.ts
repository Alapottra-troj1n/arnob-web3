interface Project {
  _id: string;
  title: string;
  subtitle: string;
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
