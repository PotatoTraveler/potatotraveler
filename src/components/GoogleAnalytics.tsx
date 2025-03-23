import { GoogleAnalytics } from '@next/third-parties/google'

interface GoogleAnalyticsProps {
  gaId: string;
}

export default function GoogleAnalyticsScript({ gaId }: GoogleAnalyticsProps) {
  return <GoogleAnalytics gaId={gaId} />
}