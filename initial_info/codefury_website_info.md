# CodeFury 8.0 Website Information Document

This document provides a comprehensive overview of the **CodeFury 8.0** webpage. It contains the website's structure, metadata details, component hierarchy, sections, and the complete text and data copy as found in the application's codebase. It excludes user interface (UI) rendering specifics like CSS/Tailwind style classes.

---

## 1. Webpage Metadata & General Structure

*   **Page Title:** `CodeFury 8.0`
*   **Favicon:** `src/assets/ieee-logo.png` (IEEE Logo)
*   **Typography:** *Orbitron* Google Font (specifically loaded for headers)
*   **Google Analytics Integration:**
    *   Measurement ID (Tracking ID): `G-89VJD7YWZN` (in `index.html`) & `G-XXXXXXXXXX` (initialized in `App.tsx` via `react-ga4`)
*   **Layout Component Hierarchy (Renders inside `#root` in `index.html` via `App.tsx`):**
    *   `<ParticleBackground />` (Interactive background particle effect)
    *   `<Header />` (Fixed top navigation bar and responsive dropdown menu)
    *   `<main>` (Scrollable content wrapper containing sections)
        *   `<Hero />`
        *   `<About />`
        *   `<Tracks />`
        *   `<PrizePool />`
        *   `<Timeline />`
        *   `<CodeFuryWall />`
        *   `<PastWinners />`
        *   `<Sponsors />`
        *   `<Game />`
        *   `<FAQ />`
        *   `<Contact />`
    *   `<BackToTopButton />` (Floating action button to scroll back to header)
    *   `<Footer />` (Developer credits and association details)

---

## 2. Component Details & Content

### 2.1. Header Component (`Header.tsx`)
*   **Desktop Main Navigation (Right-aligned):**
    *   `About Us` &rarr; `#about`
    *   `Tracks` &rarr; `#tracks`
    *   `Timeline` &rarr; `#timeline`
    *   `Contact` &rarr; `#contact`
*   **Responsive / Unified Dropdown Navigation Menu:**
    *   `About Us` &rarr; `#about`
    *   `Tracks` &rarr; `#tracks`
    *   `Prize Pool` &rarr; `#prizes`
    *   `Timeline` &rarr; `#timeline`
    *   `CodeFury Wall` &rarr; `#wall`
    *   `Past Winners` &rarr; `#past`
    *   `Our Sponsors` &rarr; `#sponsors`
    *   `FlappyDev (Mini Game)` &rarr; `#game`
    *   `FAQs` &rarr; `#faq`
    *   `Contact` &rarr; `#contact`
*   **Header Interactive Logo:**
    *   Source asset: `src/assets/handle.png`
    *   Action: Smooth-scrolls to the `#hero` section on click.

---

### 2.2. Hero Component (`Hero.tsx`)
*   **Presenting Organization:** `IEEE UVCE Computer Society Presents`
*   **Event Heading:** `CodeFury 8.0`
*   **Tagline:** `Fury in Code, Ready to Explode`
*   **Category:** `Annual National - Level Hackathon`
*   **Powering Partner:** Powered by `ART PARK I-Hub @ IISc`
*   **Event Dates:** `22nd, 23rd & 24th August 2025`
*   **Countdown Target Date:** Countdown timer targets `August 22, 2025, at 18:00:00 (6:00 PM IST)`.
*   **Registration Status:** Closed
    *   **Notification Text:** `>>> REGISTRATIONS CLOSED`
    *   **Detailed Message:** `Registrations for CodeFury 8.0 closed on 21st August 2025, 4:00 PM. SEE YOU AT CODEFURY 9.0!`
*   **Co-Presenters (Logos & Instagram Links):**
    *   **IEEE UVCE:** Logo: `src/assets/ieee-logo.png` | Link: [IEEE UVCE Instagram](https://www.instagram.com/ieeeuvce)
    *   **IEEE UVCE Computer Society:** Logo: `src/assets/cs-logo.png` | Link: [IEEE UVCE Computer Society Instagram](https://www.instagram.com/ieee.uvce.cs)

---

### 2.3. About Us Component (`About.tsx`)
The About section is divided into two comprehensive information cards:

| Card Title | Detailed Content | Metrics / Highlights |
| :--- | :--- | :--- |
| **IEEE UVCE & Computer Society** | IEEE UVCE is the student branch of IEEE at the University of Visvesvaraya College of Engineering, operating under the IEEE Bangalore Section. Established in 2001, it has grown into a vibrant platform for students to explore innovation, research, and leadership through national and global IEEE events, technical interest groups, and collaborative initiatives. The branch actively promotes technical excellence, professional development, and community engagement, shaping the next generation of engineers.<br><br>The IEEE UVCE Computer Society is a dedicated technical chapter focused on fostering a culture of innovation and problem-solving. It regularly conducts coding competitions, hackathons, workshops, and tech talks addressing real-world challenges. With a strong emphasis on skill-building and peer learning, the society empowers students to grow into competent and impactful tech professionals. | <ul><li>500+ Members</li><li>25+ Years</li></ul> |
| **About CodeFury v8.0** | CodeFury is our flagship Annual National-Level Hackathon that brings together the brightest minds in programming and innovation. This 24-hour intensive coding marathon challenges participants to build revolutionary solutions to real-world problems.<br><br>Open to students from all colleges and universities, CodeFury has grown to become one of the most prestigious hackathons in the region, attracting participants from across the country. | <ul><li>500+ Participants</li><li>24hrs Non-stop</li><li>₹60K Prize Pool</li><li>100% Online</li></ul> |

---

### 2.4. Tracks Component (`Tracks.tsx`)
*   **Event Mechanics:**
    *   Participants are presented with **three distinct themes**, each accompanied by a unique problem statement.
    *   Themes and challenges are officially announced on the **first day of the event**.
    *   Teams must select one theme and develop a solution based on it.
    *   Deliverables: Participants may build either a **web application** or a **mobile application**, depending on their area of expertise.
    *   Tech Stack: No restrictions on the technology stack; teams are free to use any tools/platforms of choice.
*   **Key Track Data:**
    *   **Team Size:** 1–4 members
    *   **Registration Fees:** ₹120 per head
    *   **CTA Text:** `Select your theme, assemble your team, and start building impactful solutions!`

---

### 2.5. Prize Pool Component (`PrizePool.tsx`)
*   **Total Prize Pool:** `₹60,000`
*   **Prize Distribution:**
    1.  **1st Prize:** `₹20,000`
    2.  **2nd Prize:** `₹15,000`
    3.  **3rd Prize:** `₹10,000`
    4.  **Consolation Prizes Worth:** `₹15,000`
*   **General Incentive:** `Certificate of Participation will Be Provided For Everyone!`

---

### 2.6. Event Timeline Component (`Timeline.tsx`)
The milestone schedule for the hackathon is detailed below:

1.  **Registration Opens**
    *   *Date:* August 1, 2025
    *   *Description:* Kickstart your CodeFury journey form your dream team and register!
2.  **Workshop - "Git Ready, Set, Code"**
    *   *Date:* 12th and 13th August 2025
    *   *Description:* A Pre-Codefury Web Dev Workshop.
    *   *Registration Link:* [Register for Workshop](http://tinyurl.com/codefuryWeb)
3.  **Mini Game and Mini Challenge**
    *   *Date:* N/A (Surprise Event)
    *   *Description:* Participate in our surprise mini game & challenge to win exciting discounts on registration fees!
4.  **Registration Closes**
    *   *Date:* August 19, 2025 *(Note: Registrations were extended to August 21st, 2025, 4:00 PM as noted in the Hero page)*
    *   *Description:* Final call! Register before the portal closes.
5.  **CodeFury Round 1**
    *   *Date:* August 22-23, 2025
    *   *Description:* The 24-hour coding showdown begins. `[22nd 6pm to 23rd 6pm]`
6.  **CodeFury Round 2**
    *   *Date:* August 24, 2025
    *   *Description:* Top teams present their innovations to the jury. `[24th 10am onwards]`

---

### 2.7. CodeFury Wall Component (`CodeFuryWall.tsx`)
*   **Purpose:** Houses highlights and previous event photos.
*   **Content:** A dynamic sliding gallery comprising **8 images** (`img1` to `img8` imported from `src/assets/`).

---

### 2.8. Past Winners Component (`PastWinners.tsx`)
Showcases previous winners, runner-ups, and their projects:

| Track / Award | Project Name | Team Name | College / Institution | Tech Stack | Links |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Web Dev Track - Winners** | Astero | Goofy Gophers | NMAM Institute of Technology | Next.js, Google Maps API, MongoDB | [GitHub](https://github.com/Team-Goofy-Gophers/website) \| [Live Demo](https://astero-rho.vercel.app/) |
| **Web Dev Track - Runners** | Relief Compass | Team POV | Dr. Ambedhkar Institute of Technology | React.js, Tailwind, Firebase | [GitHub](https://github.com/Karthikeyan1508/crisis-connect) \| [Live Demo](https://code-fury-submission.vercel.app/) |
| **App Dev Track - Winners** | Rescue Ring | Night Owls | Dayanand Sagar Institute of Technology | Flutter, Dart, Firebase | [GitHub](https://github.com/chetanr250/disaster-ready) |
| **App Dev Track - Runners** | ResQAids | Widget Wizards | Ambedhkar Institute of Technology | Flutter, Dart, Google API | [GitHub](https://github.com/aryanmajhi75/Widget-Wizards---Codefury-Hackathon) |

---

### 2.9. Sponsors Component (`Sponsors.tsx`)
Categorized sponsor information and external links:

1.  **Diamond Sponsor:**
    *   **Name:** `ARTPARK`
    *   *Description:* ARTPARK brings together the best of research, startup, industry and government ecosystems to drive large-scale impact.
    *   *Website Link:* [ARTPARK Website](https://www.artpark.in/)
    *   *Logo:* `src/assets/ARTPARK primary logo.png`
2.  **Platform Partner:**
    *   **Name:** `Unstop`
    *   *Website Link:* [Unstop Website](https://unstop.com/)
    *   *Logo:* `src/assets/unstop.png`
3.  **General Sponsors:**
    *   **IEEE CS Bangalore Section:** Logo: `src/assets/bng.png` | Link: [IEEE CS Bangalore Section Website](https://ieeecsbangalore.org/)
    *   **IEEE WIE:** Logo: `src/assets/wielogonew.png` | Link: [IEEE WIE Website](https://wie.ieee.org/)
    *   **MistyClimb LLP:** Link: [MistyClimb LLP Tracxn Profile](https://tracxn.com/d/legal-entities/india/mistyclimb-llp/__IKhPP9H2P8LXL5e1EiNMGr3OCaWiJdUf9M_pVuIf3b8#about) (No Logo image used, textual representation only)

---

### 2.10. Mini Game Component (`Game.tsx`)
A Flappy Bird style mini-game embedded in the site to promote engagement and distribute discount vouchers.

*   **Game Name:** `Flappy Devs Challenge` (referred to as `Flappy Dev` / `Flappy Devs Challenge`)
*   **Description:** A quirky and fast-paced browser game where the user controls a developer emoji (👨‍💻) jumping, dodging, and soaring through firewall blocks/obstacles.
*   **Offer Rules to Avail 25% Discount Voucher:**
    1.  Offer is active between **5th August, 11:00 AM – 7th August, 11:00 AM**.
    2.  Beating the challenge gives the user a high score. They must share their **high score on their Instagram story** and DM a screenshot to `@ieee.uvce.cs` (multiple attempts are allowed).
    3.  Story must tag `@ieee.uvce.cs` and include the hashtags `#FlappyDevsChallenge` and `#CodeFury8.0`.
    4.  The top **10 scorers** receive a **25% discount** on their CodeFury 8.0 hackathon ticket.
*   **Game Mechanics / Tech Details:**
    *   High scores are saved to the user's browser local storage with key `codefury-game-highscore`.
    *   User controls: Pressing **Spacebar** or **Tapping** triggers a jump action.
    *   Obstacles are firewall pillars scaled with gravity, speeds, and gaps that adjust dynamically depending on the current score (dynamic difficulty ramping).

---

### 2.11. Frequently Asked Questions Component (`FAQ.tsx`)
List of Q&As presented on the website:

*   **Q: Who can participate in CodeFury 8.0?**
    *   *A:* Any student from any college or university can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible.
*   **Q: What is the team size limit?**
    *   *A:* Teams can have 1-4 members. You can participate individually or form a team of up to 4 people. All team members must be students.
*   **Q: Is there any registration fee?**
    *   *A:* Yes, the registration fee for CodeFury 8.0 is ₹120 per head.
*   **Q: What are the available tracks?**
    *   *A:* Participants will choose from three themes, each with its own problem statement. Participants may opt to build a web or mobile application depending on their area of expertise and preference.
*   **Q: Are first-year students allowed to participate?**
    *   *A:* Yes! First-year students are absolutely welcome. CodeFury is open to students from all years and all branches of engineering.
*   **Q: How do I submit my project?**
    *   *A:* Project submission details will be shared with qualified participants after the preliminary round. Typically, you'll need to submit your code repository, demo video, and project documentation.
*   **Q: Is this completely an online hackathon?**
    *   *A:* Yes, CodeFury 8.0 is a fully online hackathon. You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually.
*   **Q: What happens after the 24-hour coding period?**
    *   *A:* After the coding period ends, teams will present their projects to our panel of judges. Winners will be announced within 24 hours of submission deadline, followed by prize distribution.

---

### 2.12. Contact Component (`Contact.tsx`)
Contact details for queries and communication:

*   **Chairperson, Computer Society, IEEE UVCE:**
    *   **Name:** Namratha Sridhar
    *   *Phone:* `+91 90084 16648`
    *   *Email:* `namrathasridhar29@ieee.org`
    *   *WhatsApp direct link:* `https://wa.me/917406543569`
*   **Vice Chairperson, Computer Society, IEEE UVCE:**
    *   **Name:** Gagana K H
    *   *Phone:* `+91 96632 40594`
    *   *Email:* `gaganakh052@gmail.com`
    *   *WhatsApp direct link:* `https://wa.me/919108562257`
*   **Social & Community Links:**
    *   **Instagram:** [IEEE UVCE CS Instagram](https://www.instagram.com/ieee.uvce.cs/)
    *   **Facebook:** [IEEE UVCE CS Facebook](https://www.facebook.com/Ieee.uvce.cs)
    *   **General Inquiry Email:** `mailto:cs.uvce.ieee@gmail.com`

---

### 2.13. Footer Component (`Footer.tsx`)
*   **Association:** Software Development SIG, IEEE UVCE
*   **Developers (LinkedIn Links):**
    *   [Dhruv Rathi](https://www.linkedin.com/in/dhruv-rathi-399378282/)
    *   [Lahari Priya N](https://www.linkedin.com/in/lahari-priya-n/)
    *   [Rahita H Puthran](https://www.linkedin.com/in/rahita-puthran-1262202a5/)
