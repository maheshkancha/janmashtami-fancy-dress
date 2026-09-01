# JANMASHTAMI AR POC

## CONTEXT

There is a fancy dress competition in school on occasion of Janamashtami. Theme is any character related to Janamashtami. Radha/Krishna is common, so, I'm preferring Vasudeva carrying new born Krishna on basket across Yamuna river.

## Project plan

1. Vasudeva carrying baby Krishna — ⭐⭐⭐⭐⭐
   It's strongly connected to Janmashtami but much less common than Krishna.

- Dhoti + angavastram
- Crown/turban
- Basket on head with a baby Krishna doll
- Blue cloth around his feet as Yamuna
- Sheshnag umbrella above the basket

Dialogue:
"I am Vasudeva. On the night Krishna was born, I carried him across the Yamuna to save him from Kansa."

## Project idea

Vasudeva + AR Yamuna crossing

The physical costume:

- Dhoti + angavastram
- Basket containing baby Krishna
- Small Sheshnag above the basket
- Blue cloth representing Yamuna

Then add AR effects visible through a phone/tablet:

When the camera points at him:

- 🌧️ Rain/clouds appear around him
- 🌊 Yamuna water appears flowing around his feet
- 🐍 Sheshnag animates and spreads its hood
- ✨ Divine sparkles/light appear around baby Krishna
- 🦚 A few peacock feathers float around
- 🪷 Lotus flowers appear on the "water"

The child simply stands/acts normally. The AR does the magic.

### Even better: "Scan Me" costume

Put a small QR code on the back or on a prop.

When the judges/parents scan it with a phone, it opens an AR experience.

For example:
"Scan to witness Krishna's birth story"

The phone camera recognizes your son's costume/marker and displays:

🌩️ Mathura prison → 👶 Krishna's birth → 🌊 Yamuna → 🐍 Sheshnag → 🏡 Gokul

You could make this into a 20–30 second AR story.

## Overall concept

Theme: "Vasudeva's Journey — The Night Krishna Was Born"

Your son plays Vasudeva.

The physical scene:

                 🐍 SHESHNAG
              /\ /\ /\ /\ /\
             ┌───────────────┐
             │   BABY KRISHNA│
             │    🧺 BASKET  │
             └───────────────┘
                    👦
                 VASUDEVA
                    │
          ~~~~~ YAMUNA ~~~~~

Then the AR adds:

- 🌧️ rain
- ⚡ occasional lightning
- 🌊 flowing Yamuna
- 🐍 animated Sheshnag
- ✨ divine particles
- 🪷 floating lotuses
- 🦚 peacock feathers
- 🌟 glowing aura around Krishna

### Costume

Keep the costume mostly physical.

#### Vasudeva

- Cream/yellow dhoti
- Red/orange/gold angavastram
- Turban/crown
- Rudraksha-style necklace
- Fake moustache if your son is comfortable
- Barefoot or traditional sandals

#### Basket

Use a lightweight bamboo-look basket.

Inside:
small baby Krishna doll

with:

- yellow cloth
- tiny peacock feather
- miniature flute

#### Sheshnag

This is where I'd spend some effort.
Make a large lightweight cardboard/foam Sheshnag hood attached behind the basket.

Don't make it too heavy—the child will be walking with it.

#### Yamuna

Don't put lots of blue material on the child.

Instead, make two blue fabric strips attached to a lightweight waist/belt arrangement so they flow around his legs.

### The AR marker

Here's the interesting part.

I wouldn't try to recognize your son's face or entire costume.

Instead, put a beautiful AR artwork/marker on the back of his basket.

Something like:

       🦚

KRISHNA
🪷
JANMASHTAMI
─────────────
Scan Me

The marker can be designed as an attractive Krishna-themed illustration, so it looks like part of the costume rather than a technical QR code.

#### Two separate technologies

Use:
QR code → launches the AR website

and then:
Image marker → anchors the AR

This is much better than trying to make the QR code itself the AR target.

### The audience experience

The flow becomes:

Step 1

A judge/parent sees:

"Scan to see Krishna's divine journey"

They scan the QR code.

Step 2

Browser opens:

JANMASHTAMI AR ✨

Point your camera at VASUDEVA'S BASKET

[ START AR ]

Step 3

Camera recognizes the artwork on the basket.

Step 4

AR appears.

Initially:

🌑 dark night

Then:

🌧️ rain begins

Then:

🌊 Yamuna appears

Then:

🐍 Sheshnag rises

Then:

✨ Krishna glows

Then:

🪷 lotuses appear

Finally:

"When darkness rises, Dharma finds a way."

### 30-second AR story

I'd keep the entire experience under 30 seconds.

Time AR animation Voice/text
0–4 sec Dark sky + stars "On a dark night in Mathura..."
4–8 sec Rain + lightning "Krishna was born to Devaki and Vasudeva."
8–13 sec Basket glows "Vasudeva carried Krishna to safety."
13–18 sec Yamuna water rises "He crossed the mighty Yamuna..."
18–23 sec Sheshnag appears "...while Sheshnag protected him from the rain."
23–27 sec Golden divine light "And the divine child reached Gokul."
27–30 sec Peacock feathers + lotus "Happy Janmashtami!"

This is short enough that people won't lose interest.

### Technical architecture

For your background, I'd build it roughly like this:

                QR CODE
                   │
                   ▼
          ┌─────────────────┐
          │ React Web App   │
          └────────┬────────┘
                   │
                   ▼
             Camera Access
                   │
                   ▼
          Image Target Detection
                   │
                   ▼
          ┌─────────────────┐
          │ AR Scene        │
          │                 │
          │ Three.js        │
          │ GLTF models     │
          │ Particles       │
          │ Animation       │
          └─────────────────┘

### Suggested folder structure

janmashtami-ar/
│
├── public/
│ ├── targets/
│ │ └── vasudeva.mind
│ │
│ ├── models/
│ │ ├── sheshnag.glb
│ │ ├── krishna.glb
│ │ └── lotus.glb
│ │
│ ├── audio/
│ │ ├── rain.mp3
│ │ ├── yamuna.mp3
│ │ └── narration.mp3
│ │
│ └── textures/
│ ├── stars.png
│ └── particles.png
│
├── src/
│ ├── App.jsx
│ ├── ARScene.jsx
│ ├── StoryController.js
│ ├── effects/
│ │ ├── Rain.js
│ │ ├── Yamuna.js
│ │ └── Particles.js
│ └── styles.css
│
└── package.json

We'll not directly build the final project. We'll start with a POC.

Step 1 — Create the project

npm create vite@latest janmashtami-ar-poc -- --template react
cd janmashtami-ar-poc
npm install

Step 2 - Use AFrame and MindAR CDN

<!-- A-Frame must load first -->
<script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>

<!-- MindAR loads after A-Frame -->
<script src="/mind-ar.js" defer></script>

Step 3 — Our first POC architecture

We'll eventually have:

janmashtami-ar-poc/
│
├── public/
│ └── targets/
│ └── test-target.mind
│ └── test-target.jpg
│
├── src/
│ ├── App.jsx
│ ├── ARScene.jsx
│ └── main.jsx
│
└── package.json

But there's one important piece we need before writing ARScene.jsx:

We need an image target

MindAR doesn't simply recognize an arbitrary image directly in the browser. We first create a .mind target file from our chosen image.

For the POC, don't worry about making a Janmashtami image yet.

Use a reasonably detailed image such as:

a printed photograph
a magazine illustration
a colorful poster

Avoid:

plain white backgrounds
simple logos
QR codes
very repetitive patterns

For the actual project, we'll create a special Vasudeva/Krishna marker.

Step 4 — Get the target image ready

Create:
public/targets/

and put your test image there, for example:
public/targets/test-target.jpg

Don't use the QR code as the target.

The QR code will eventually launch the application; the image target will control where the AR object appears.

Step 5 — Generate the .mind file

For MindAR, use its Image Target Compiler to convert your test image into a .mind target file.

The output should be something like:

test-target.mind

Put it here:

public/targets/test-target.mind

So now:

public/
└── targets/
├── test-target.jpg
└── test-target.mind

Step 6 — Before we write the AR code

I'd like to do this incrementally, because there are a couple of browser/mobile-specific issues with A-Frame + MindAR, and it's much easier to troubleshoot one layer at a time.

Expose Vite to your mobile on the local network

npm run dev -- --host 0.0.0.0

You should see something similar to:

Local: http://localhost:5173/
Network: http://192.168.1.15:5173/

The important line is the Network URL.

Connect your phone to the same Wi-Fi

Your PC and Android phone must be on the same Wi-Fi network.

Then open this on the phone:

http://192.168.1.15:5173/

Use your actual IP address.

If HTTP fails: use HTTPS locally

We can configure Vite to run HTTPS.

Install the development certificate plugin:

npm install -D @vitejs/plugin-basic-ssl

Then update vite.config.js:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
plugins: [
react(),
basicSsl()
],

server: {
host: "0.0.0.0",
https: true
}
});

#### User confirmation

Worked after setting the secure http. I'm able to launch the camera app and see the rotating yellow cube. Lets proceed next.

Excellent! 🎉 That confirms our entire core AR pipeline works:

React/Vite → HTTPS → Mobile camera → A-Frame → MindAR image tracking → AR object

### After this milestone

Once you confirm multiple AR objects work, our next steps should be:

Milestone 3 — Replace primitives with a real asset
GLB/GLTF model
↓
A-Frame gltf-model
↓
Load above target
↓
Animate

Milestone 4 — Effects

- 🌧️ Rain particles
- 🌊 Yamuna
- ✨ Divine particles
- 🪷 Lotus flowers

Milestone 5 — The actual costume experience

Instead of a generic target: Printed target

We'll create:

VASUDEVA'S BASKET
│
├── Baby Krishna (physical doll)
└── AR target artwork

Then when somebody scans the QR and points their phone at the basket:

🌧️ Rain begins → ✨ divine light → 🐍 Sheshnag appears → 🌊 Yamuna surrounds Vasudeva.
