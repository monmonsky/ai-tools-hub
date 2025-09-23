// Setup Google Analytics
export const analytics = {
  // Google Analytics Configuration
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',

  // Daily Metrics to Track
  daily: [
    "Unique visitors",
    "Page views",
    "Tool clicks",
    "Affiliate clicks",
    "Search queries",
    "Compare tool usage",
    "Mobile vs desktop users",
    "Bounce rate"
  ],

  // Weekly Metrics to Track
  weekly: [
    "New tools added",
    "Reviews submitted",
    "Email signups",
    "Revenue generated",
    "Top performing tools",
    "Popular categories",
    "User retention",
    "Newsletter subscribers"
  ],

  // Custom Events to Track
  events: {
    // Tool interactions
    TOOL_VIEW: 'tool_view',
    TOOL_CLICK: 'tool_click',
    TOOL_COMPARE: 'tool_compare',
    TOOL_REVIEW: 'tool_review',
    AFFILIATE_CLICK: 'affiliate_click',

    // Search and navigation
    SEARCH_QUERY: 'search_query',
    CATEGORY_VIEW: 'category_view',
    FILTER_APPLIED: 'filter_applied',

    // User engagement
    EMAIL_SIGNUP: 'email_signup',
    NEWSLETTER_SUBSCRIBE: 'newsletter_subscribe',
    REVIEW_SUBMITTED: 'review_submitted',
    BOOKMARK_TOOL: 'bookmark_tool',

    // Performance metrics
    PAGE_LOAD_TIME: 'page_load_time',
    ERROR_OCCURRED: 'error_occurred'
  },

  // Conversion Goals
  goals: {
    TOOL_DISCOVERY: 'Users discover new tools',
    AFFILIATE_CONVERSION: 'Users click affiliate links',
    EMAIL_CAPTURE: 'Users subscribe to newsletter',
    REVIEW_ENGAGEMENT: 'Users read and submit reviews',
    COMPARISON_USAGE: 'Users compare multiple tools',
    RETURN_VISITOR: 'Users return within 7 days'
  }
};

// Google Analytics helper functions
export const gtag = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag) {
    (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(...args);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  gtag('config', analytics.measurementId, {
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  gtag('event', eventName, {
    ...parameters,
    event_category: 'user_interaction',
    event_label: parameters?.label || eventName,
  });
};

// Track tool interactions
export const trackToolInteraction = (action: string, toolName: string, additionalData?: Record<string, unknown>) => {
  trackEvent(action, {
    tool_name: toolName,
    tool_category: additionalData?.category,
    tool_pricing: additionalData?.pricing,
    ...additionalData,
  });
};

// Track search queries
export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent(analytics.events.SEARCH_QUERY, {
    search_query: query,
    results_count: resultsCount,
  });
};

// Track affiliate clicks
export const trackAffiliateClick = (toolName: string, affiliateUrl: string) => {
  trackEvent(analytics.events.AFFILIATE_CLICK, {
    tool_name: toolName,
    affiliate_url: affiliateUrl,
    revenue_potential: true,
  });
};

// Track comparison usage
export const trackComparison = (toolNames: string[]) => {
  trackEvent(analytics.events.TOOL_COMPARE, {
    tools_compared: toolNames.join(','),
    comparison_count: toolNames.length,
  });
};

// Revenue tracking for affiliate commissions
export const trackRevenue = (amount: number, currency: string = 'USD', transactionId?: string) => {
  gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: amount,
    currency: currency,
    event_category: 'ecommerce',
  });
};

// Enhanced ecommerce tracking for tool interactions
export const trackToolView = (tool: {
  name: string;
  category: string;
  pricing: string;
  rating: number;
}) => {
  gtag('event', 'view_item', {
    item_id: tool.name.toLowerCase().replace(/\s+/g, '-'),
    item_name: tool.name,
    item_category: tool.category,
    item_variant: tool.pricing,
    value: tool.rating,
  });
};

// Track user engagement metrics
export const trackEngagement = (metric: string, value: number, unit?: string) => {
  trackEvent('user_engagement', {
    engagement_metric: metric,
    engagement_value: value,
    engagement_unit: unit,
  });
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && analytics.measurementId !== 'G-XXXXXXXXXX') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as typeof window & { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }).dataLayer =
      (window as typeof window & { dataLayer?: unknown[] }).dataLayer || [];
    (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag = function(...args: unknown[]) {
      (window as typeof window & { dataLayer: unknown[] }).dataLayer.push(args);
    };

    gtag('js', new Date());
    gtag('config', analytics.measurementId, {
      // Enhanced measurement
      enhanced_measurement: true,
      // Cookie settings
      cookie_flags: 'SameSite=None;Secure',
      // Custom parameters
      custom_map: {
        'dimension1': 'tool_category',
        'dimension2': 'user_type',
      },
    });
  }
};

// Export analytics configuration untuk environment variables
export const analyticsConfig = {
  // Add to your .env.local file:
  requiredEnvVars: [
    'NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX',
    'NEXT_PUBLIC_SITE_URL=https://aikita.id',
    'NEXT_PUBLIC_AFFILIATE_TRACKING=true'
  ],

  // Dashboard URLs untuk monitoring
  dashboards: {
    googleAnalytics: `https://analytics.google.com/analytics/web/#/p0/reports/intelligenthome?params=_u..nav%3Dmaui`,
    searchConsole: 'https://search.google.com/search-console',
    affiliateTracking: '/admin/analytics' // Your custom dashboard
  }
};