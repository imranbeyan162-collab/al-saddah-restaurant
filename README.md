# Al-Saddah Restaurant Website (???? ????? / ?? ??? ??????)

Official modern, high-performance website for **Al-Saddah Restaurant**, an authentic Yemeni dining destination located on **Rwanda Street, Addis Ababa, Ethiopia**.

Built in accordance with the design & build specification document.

---

## ?? Features Implemented

1. **Brand Identity & Color Palette:**
   - Gold accent (`#C9A227` / `#D4AF37`) & Deep Black (`#0C0D0E`), paired with crisp cream/white backgrounds for contrast.
   - Circular brand emblem matching client specifications (black center, gold ring, fork icon, and circular typography in English, Arabic, and Amharic).

2. **Multilingual Architecture with RTL Support:**
   - **Arabic (`ar`)**: Default language with complete Right-to-Left (`dir="rtl"`) layout and Google Cairo font.
   - **English (`en`)**: Clean modern sans-serif in Left-to-Right (`dir="ltr"`).
   - **Amharic (`am`)**: Noto Sans Ethiopic in Left-to-Right (`dir="ltr"`).
   - Instant language switching across navigation, buttons, titles, dish descriptions, and reviews.

3. **Auto-advancing Hero Carousel:**
   - Auto-advances every **4 seconds**.
   - **Slide order rule:** The 3rd photo displays first upon load, then remaining photos cycle in randomized order.
   - Tagline overlay, "View Menu" and "Get Directions" CTAs, and highlight badges (Authentic Yemeni Heritage, Multi-Floor Dine-in, Open till 12 AM, 3.8★ Google rating).

4. **Curated Menu Showcase (Informational):**
   - Showcase of all 9 featured signature dishes:
     1. *Meat Mandi* (???? ??? ???? / ??? ???)
     2. *Meat Zurbian* (?????? ??? / ????? ???)
     3. *Special Alsaada* (??? ????? ????? / ????? ?? ???)
     4. *Mandy Shoulder with Rice* (??? ???? ?? ????? / ???? ??? ??? ??)
     5. *Shawarma Sandwich* (??????? ?????? / ????? ?????)
     6. *Shawarma Rolls* (????? ?????? / ????? ????)
     7. *Fatira with Honey & Ginger* (????? ?????? ????????? / ??? ??? ?? ?????)
     8. *Cream Masoob* (????? ??????? ?????? / ???? ???? ?? ??)
     9. *Traditional Yemeni Black Tea* (??? ???? ???? / ???? / ???? ??? ??)
   - Filter tabs: All Dishes, Mandi & Meat, Shawarma, Sweets & Tea.
   - Informational only: No prices, no checkout or ordering system as requested.

5. **About Al-Saddah:**
   - Authentic Yemeni culinary heritage & slow pit cooking.
   - Authentic Yemeni culinary heritage & royal Arabian hospitality.
   - Multi-floor dine-in experience (chandeliers, marble tables, private family sections).
   - Available services: Dine-in, Drive-through, No-contact delivery.

6. **Interactive Gallery & Lightbox:**
   - Responsive masonry grid with category filters (Food, Interior, Experience).
   - Fullscreen Lightbox modal with next/prev navigation and captions.

7. **Google Reviews & Testimonials:**
   - Prominent official Google rating badge: **3.8 / 5.0 (782 verified reviews)**.
   - 4 authentic customer quotes celebrating the tender Mandi, family lounges, and Adeni tea.

8. **Location & Contact:**
   - Embedded Google Map centered on Rwanda Street, Addis Ababa (`XQPF+7J Addis Ababa`).
   - Click-to-call direct phone: `098 688 6888` / `+251 98 688 6888`.
   - Hours: Open daily until 12:00 AM Midnight.
   - "Get Directions" button opening Google Maps navigation.

9. **WhatsApp Integration:**
   - Persistent floating WhatsApp button with pulse animation in the bottom corner.
   - Pre-filled greeting linked to `+251 977 777 747`.

---

## ?? Quick Start

```bash
# Run development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm start
```
The site will be live at `http://localhost:3000` (or `3001`).
