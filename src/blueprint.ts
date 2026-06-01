export const BLUEPRINT_MARKDOWN = `
# Mikthona: Premium Convenience Store Strategy

## 1. Executive Summary
Mikthona is positioned as a modern, premium neighborhood convenience store. The primary digital objective is bridging the gap between online discovery and in-store foot traffic. By focusing on mobile accessibility, local SEO, and frictionless user journeys, Mikthona will serve as the indispensable quick-stop hub for residents, commuters, and students.

## 2. Business Positioning
**Core Proposition:** "Everything You Need, Right Around The Corner."
**Brand Persona:** Friendly, helpful, clean, and highly reliable.
**Differentiator:** A premium, well-lit, curated digital and physical experience that contrasts with traditional cluttered corner stores.

## 3. Conversion Strategy
The primary metric of success is driving physical store visits. 
**Macro-Conversions:**
- Clicks on "Get Directions" (Google Maps)
- Direct calls or WhatsApp inquiries
**Micro-Conversions:**
- Loyalty program signups
- Promotion views
- Category browsing

## 4. Information Architecture (IA)
1. **Home:** Hero \> Promotions \> Popular Categories \> Best Sellers \> Loyalty \> Location \> Social Proof \> Footer
2. **Promotions:** Weekly Deals, Bundles, Seasonal
3. **Products:** Categorized browse (Snacks, Drinks, etc.)
4. **Loyalty:** Program Details, Points Balance (if logged in)
5. **Location:** interactive map, hours, contact

## 5. Homepage Blueprint
- **Sticky Header:** Logo, Search, Tap-to-call.
- **Hero:** Mobile-optimized background image, strong value prop, primary "Get Directions" CTA.
- **Action Bar:** Quick links to Deals, Loyalty, WhatsApp.
- **Curated Aisles:** Horizontal scrolling product cards.
- **Location Block:** Embedded map, opening hours, local landmarks.

## 6. Page-by-Page Wireframes (Conceptual)
- **Product Listing:** Filter pills at the top, 2-column grid of products, floating cart/location button.
- **Loyalty Page:** Big QR code placeholder, progress bar to next reward, list of available perks.

## 7. Customer Journeys
- **The Commuter:** Opens site on mobile \> Sees morning coffee promotion \> Taps "Get Directions" \> Arrives in 3 mins.
- **The Local Resident:** Wants a late-night snack \> Browses "Best Sellers" \> Sees closing time is midnight \> Walks over.

## 8. Design System
- **Colors:** Primary: Vibrant Orange (#FF6B00), Accent: Emerald Green (#10B981), Background: Slate-50 (#F8FAFC)
- **Typography:** Inter (Sans-serif) for clean readability, Space Grotesk for bold headers.
- **Components:** Soft rounded corners (xl), subtle shadows for elevation, high-contrast buttons.

## 9. Component Library
- **Promo Cards:** Gradient backgrounds, clear expiration dates.
- **Product Cards:** Square image aspect ratio, price emphasis, add-to-list or available-in-store tags.
- **Floating Action Button (FAB):** Bottom right for instant maps routing.

## 10. Content Strategy
- **Tone:** Conversational, inviting, urgent but not aggressive.
- **Copy Examples:** "Local favorites, restocked today", "Your morning commute, simplified."

## 11. Local SEO Strategy
- **Keywords:** "Convenience store near me", "Late night snacks [Neighborhood]", "Quick stop grocery".
- **Implementation:** Schema.org LocalBusiness markup, consistent NAP (Name, Address, Phone) on footer, deeply integrated Google Business Profile.

## 12. Analytics Framework
- **Primary Events:** \`click_directions\`, \`click_whatsapp\`, \`view_promotion\`, \`signup_loyalty\`.
- **Funnels:** Landing \> Promo View \> Directions Click.

## 13. Technical Architecture
- **Framework:** React + Vite + Tailwind CSS.
- **Performance:** Image lazy loading, SVG icons, mobile-first CSS architecture for Core Web Vitals optimization.

## 14. Animation System
- **Transitions:** Framer Motion staggered fade-ins for product grids.
- **Micro-interactions:** Button scaling on press, smooth scrolling for anchor links.

## 15. CRO Recommendations
- Keep the "Get Directions" button perpetually visible.
- Always display "Open Now" or relative closing times (e.g., "Closes in 2 hours").
- Add perceived urgency to weekend or daily promotions.

## 16. Launch Roadmap
- **Phase 1:** Core landing page, Local SEO setup, Map integration.
- **Phase 2:** Product catalog browsing, WhatsApp integration.
- **Phase 3:** Loyalty program dashboard, user authentication.
`;
