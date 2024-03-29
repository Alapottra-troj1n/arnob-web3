interface Project {
  _id: string;
  title: string;
  subtitle: string;
  service: string[],
  industry:string[],
  year: number,
  description: string;
  mainImage: {
    type: string,
    video: {
      asset: {
        url: string;
      };
    },
    image: {
      asset: {
        url: string;
      };
    }
   
  };
  categories: { title: string }[];
  slug: {
    current: string;
  };
  media: {
    video: {
      asset: {
        url: string;
      
      }
    },
    photo: {
      asset: {
        url: string;
      
      }
    }
    type:string
  }[];
}

export type { Project };
