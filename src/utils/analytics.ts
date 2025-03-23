type EventParams = {
    [key: string]: string | number | boolean;
  };
  
  export const trackEvent = (
    action: string,
    category: string,
    label?: string,
    params?: EventParams
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        ...params,
      });
    }
  };