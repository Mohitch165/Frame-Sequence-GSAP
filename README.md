# 🎞️ Frame Sequence Animation with GSAP

A scroll-driven **frame-by-frame animation** built using [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) and an image sequence extracted from a video. Perfect for cinematic storytelling, product reveals, and giving your site that *next-level* edge.

---

## ✨ Features

- 🖼️ **Cinematic Frame Playback** — Like a flipbook, but in high-def.
- 🧠 **Scroll-Controlled Animation** — Power it all with the scroll wheel.
- 🛠️ **Video to Frame Conversion** — Easily extract frames using FFmpeg.
- ⚡ **Canvas Rendering** — Because `img` tags just can't handle this level of drama.

> ![cinematic gif](https://media.giphy.com/media/3o6nV7g6L532uMR4Tu/giphy.gif)  

> _When your scroll animation hits just right..._

---

## 📁 Project Structure

```
Frame-Sequence-GSAP/
├── src/
│   ├── index.html       # Main HTML with <canvas>
│   ├── style.css        # Styling
│   └── script.js        # GSAP ScrollTrigger magic
├── videoplayback.mp4    # Your source video
├── extract_frames.sh    # FFmpeg frame extractor
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mohitch165/Frame-Sequence-GSAP.git
cd Frame-Sequence-GSAP
```

### 2. Extract Frames (if needed)

Make sure you have [FFmpeg](https://ffmpeg.org/) installed:

```bash
bash extract_frames.sh
```

> ![coding gif](https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif)  

> _FFmpeg doing all the work while you sip coffee._

### 3. Run Locally

Start a local server:

```bash
python -m http.server
```

Then open `http://localhost:8000/src/` in your browser.

---

## 🛠️ Customization Ideas

- 🎬 **Use Your Own Video** — Drop in any `.mp4` and regenerate frames.
- 🎯 **Tune Scroll Behavior** — Modify `ScrollTrigger` settings for faster/slower playback.
- 📱 **Make It Mobile-Friendly** — Add media queries and test responsiveness.
- 🧵 **Add Preloading** — Improve performance with frame preloading strategies.

> ![scroll gif](https://media.giphy.com/media/TdTQjVbVWgHXK/giphy.gif)  

> _"Just one more scroll..."_

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Crafted with code, frames, scrollbars, and a bit of patience.  
Feel free to fork, star ⭐, or submit your own frame-based masterpiece!
