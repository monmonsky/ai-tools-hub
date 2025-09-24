// Cookie consent management utility

export type CookieConsentType = 'all' | 'essential' | 'rejected' | null;

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  personalization: boolean;
  marketing: boolean;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

// Get current cookie consent status
export function getCookieConsent(): CookieConsentType {
  if (typeof window === 'undefined') return null;

  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return consent as CookieConsentType;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
}

// Set cookie consent
export function setCookieConsent(consent: CookieConsentType): void {
  if (typeof window === 'undefined') return;

  try {
    if (consent) {
      localStorage.setItem(COOKIE_CONSENT_KEY, consent);

      // Set default preferences based on consent
      const preferences = getDefaultPreferences(consent);
      setCookiePreferences(preferences);

      // Update Google Analytics based on consent
      updateAnalytics(preferences.analytics);

    } else {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_PREFERENCES_KEY);
    }
  } catch (error) {
    console.error('Error setting cookie consent:', error);
  }
}

// Get cookie preferences
export function getCookiePreferences(): CookiePreferences {
  if (typeof window === 'undefined') {
    return { essential: true, analytics: false, personalization: false, marketing: false };
  }

  try {
    const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (preferences) {
      return JSON.parse(preferences);
    }
  } catch (error) {
    console.error('Error reading cookie preferences:', error);
  }

  return { essential: true, analytics: false, personalization: false, marketing: false };
}

// Set cookie preferences
export function setCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;

  try {
    // Essential cookies are always required
    preferences.essential = true;

    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));

    // Update analytics based on preferences
    updateAnalytics(preferences.analytics);

    // Update other tracking services if needed
    updatePersonalization(preferences.personalization);
    updateMarketing(preferences.marketing);

  } catch (error) {
    console.error('Error setting cookie preferences:', error);
  }
}

// Get default preferences based on consent type
function getDefaultPreferences(consent: CookieConsentType): CookiePreferences {
  switch (consent) {
    case 'all':
      return {
        essential: true,
        analytics: true,
        personalization: true,
        marketing: false // We don't use marketing cookies yet
      };
    case 'essential':
      return {
        essential: true,
        analytics: false,
        personalization: false,
        marketing: false
      };
    case 'rejected':
      return {
        essential: true,
        analytics: false,
        personalization: false,
        marketing: false
      };
    default:
      return {
        essential: true,
        analytics: false,
        personalization: false,
        marketing: false
      };
  }
}

// Update Google Analytics based on consent
function updateAnalytics(enabled: boolean): void {
  if (typeof window === 'undefined') return;

  try {
    // Google Analytics 4 consent mode
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': enabled ? 'granted' : 'denied',
        'ad_storage': 'denied', // We don't use ads
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });

      console.log(`🔍 Google Analytics: ${enabled ? 'enabled' : 'disabled'}`);
    }
  } catch (error) {
    console.error('Error updating analytics consent:', error);
  }
}

// Update personalization features
function updatePersonalization(enabled: boolean): void {
  if (typeof window === 'undefined') return;

  try {
    // Here you can manage personalization cookies
    // For now, we just log it
    console.log(`🎯 Personalization: ${enabled ? 'enabled' : 'disabled'}`);

    // Example: Clear personalization cookies if disabled
    if (!enabled) {
      // Clear compare list, favorites, search history, etc.
      localStorage.removeItem('compareList');
      localStorage.removeItem('favorites');
      localStorage.removeItem('searchHistory');
    }
  } catch (error) {
    console.error('Error updating personalization:', error);
  }
}

// Update marketing features
function updateMarketing(enabled: boolean): void {
  if (typeof window === 'undefined') return;

  try {
    // Here you can manage marketing cookies
    console.log(`📢 Marketing: ${enabled ? 'enabled' : 'disabled'}`);

    // We don't use marketing cookies yet, but this is where you'd manage them
  } catch (error) {
    console.error('Error updating marketing consent:', error);
  }
}

// Check if specific cookie type is allowed
export function isCookieAllowed(type: keyof CookiePreferences): boolean {
  const preferences = getCookiePreferences();
  return preferences[type];
}

// Utility to check if we should show the consent banner
export function shouldShowConsentBanner(): boolean {
  return getCookieConsent() === null;
}

// Clear all consent data (for testing or reset)
export function clearAllConsent(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_PREFERENCES_KEY);

    // Reset analytics
    updateAnalytics(false);
    updatePersonalization(false);
    updateMarketing(false);

    console.log('🧹 All cookie consent data cleared');
  } catch (error) {
    console.error('Error clearing consent data:', error);
  }
}

// Export for debugging in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).cookieConsent = {
    get: getCookieConsent,
    set: setCookieConsent,
    getPreferences: getCookiePreferences,
    setPreferences: setCookiePreferences,
    clear: clearAllConsent,
    isAllowed: isCookieAllowed
  };
}