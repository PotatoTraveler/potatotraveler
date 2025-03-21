export interface InstagramMedia {
    id: string;
    caption?: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    timestamp: string;
    username: string;
  }
  
  export interface InstagramResponse {
    data: InstagramMedia[];
    paging?: {
      cursors: {
        before: string;
        after: string;
      };
      next?: string;
    };
  }