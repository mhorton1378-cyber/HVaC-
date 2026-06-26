/**
 * Generates voiceover MP3s for NoCool-FailedCapacitor using ElevenLabs TTS.
 * Usage: ELEVEN_KEY=<key> node scripts/generate-voices.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/voice");
const API_KEY = process.env.ELEVEN_KEY;

if (!API_KEY) {
  console.error("Missing ELEVEN_KEY env var");
  process.exit(1);
}

// Pre-made ElevenLabs voices
const VOICES = {
  tech: "pNInz6obpgDQGcFmaJgB",      // Adam — confident, professional male
  homeowner: "EXAVITQu4vr4xnSDxMaL", // Bella — warm, expressive
};

const LINES = [
  {
    id: "homeowner-complaint",
    speaker: "homeowner",
    text: "My AC has been running all day and it's still 82 degrees in the house.",
  },
  {
    id: "tech-good-news",
    speaker: "tech",
    text: "Good news. Your compressor isn't bad.",
  },
  {
    id: "homeowner-really",
    speaker: "homeowner",
    text: "Really?",
  },
  {
    id: "tech-capacitor",
    speaker: "tech",
    text: "Your capacitor has completely failed. The compressor can't start.",
  },
  {
    id: "homeowner-no-system",
    speaker: "homeowner",
    text: "So I don't need a whole new system?",
  },
  {
    id: "tech-nope",
    speaker: "tech",
    text: "Nope. Replace the capacitor, verify amperage, check refrigerant pressures — and you're back in business.",
  },
];

async function generateLine(line) {
  const voiceId = VOICES[line.speaker];
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": API_KEY,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text: line.text,
      model_id: "eleven_monolingual_v1",
      voice_settings: {
        stability: line.speaker === "tech" ? 0.6 : 0.45,
        similarity_boost: 0.78,
        style: 0.15,
        use_speaker_boost: true,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`ElevenLabs error ${res.status}: ${err}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(OUT_DIR, `${line.id}.mp3`);
  fs.writeFileSync(outPath, buf);
  console.log(`✓ ${line.id}.mp3  (${(buf.length / 1024).toFixed(1)} KB)`);
  return outPath;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Generating ${LINES.length} lines with ElevenLabs TTS...\n`);

  for (const line of LINES) {
    await generateLine(line);
    // Small delay to respect rate limits
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log("\nAll voice files generated in public/voice/");
}

main().catch((e) => { console.error(e.message); process.exit(1); });
