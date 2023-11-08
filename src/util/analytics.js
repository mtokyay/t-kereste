import Analytics from "analytics";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import Router from "next/router";
import analyticsPluginGa from "@analytics/google-analytics";

// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const analytics = Analytics({
  debug: process.env.NODE_ENV !== "production",
  plugins: [
    googleAnalyticsPlugin({
      measurementIds: [process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID],
    }),
    analyticsPluginGa({
      measurementIds: 'GTM-T6BQ4N46',
    }),
  ],
});

// Track initial pageview
if (typeof window !== "undefined") {
  analytics.page();
}

// Track pageview on route change
Router.events.on("routeChangeComplete", (url) => {
  analytics.page();
});

export default analytics;
