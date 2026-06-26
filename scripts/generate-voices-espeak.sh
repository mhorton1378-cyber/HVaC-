#!/bin/bash
# Generates voiceover WAV files using espeak-ng, converts to MP3 with Remotion's ffmpeg.
# Run from project root: bash scripts/generate-voices-espeak.sh

set -e
FFMPEG="npx remotion ffmpeg --"
OUT="public/voice"
mkdir -p "$OUT"

# Tech voice: slightly slower, lower pitch
TECH_OPTS="-v en-us+m3 -s 145 -p 40 -a 200 -g 4"
# Homeowner voice: slightly higher pitch, more expressive
HO_OPTS="-v en-us+f3 -s 155 -p 55 -a 200 -g 3"

echo "Generating voice lines..."

espeak-ng $HO_OPTS \
  "My A C has been running all day and it's still 82 degrees in the house." \
  -w /tmp/homeowner-complaint.wav && \
  $FFMPEG -i /tmp/homeowner-complaint.wav -q:a 2 "$OUT/homeowner-complaint.mp3" -y -loglevel quiet
echo "✓ homeowner-complaint.mp3"

espeak-ng $TECH_OPTS \
  "Good news. Your compressor isn't bad." \
  -w /tmp/tech-good-news.wav && \
  $FFMPEG -i /tmp/tech-good-news.wav -q:a 2 "$OUT/tech-good-news.mp3" -y -loglevel quiet
echo "✓ tech-good-news.mp3"

espeak-ng $HO_OPTS \
  "Really?" \
  -w /tmp/homeowner-really.wav && \
  $FFMPEG -i /tmp/homeowner-really.wav -q:a 2 "$OUT/homeowner-really.mp3" -y -loglevel quiet
echo "✓ homeowner-really.mp3"

espeak-ng $TECH_OPTS \
  "Your capacitor has completely failed. The compressor can't start." \
  -w /tmp/tech-capacitor.wav && \
  $FFMPEG -i /tmp/tech-capacitor.wav -q:a 2 "$OUT/tech-capacitor.mp3" -y -loglevel quiet
echo "✓ tech-capacitor.mp3"

espeak-ng $HO_OPTS \
  "So I don't need a whole new system?" \
  -w /tmp/homeowner-no-system.wav && \
  $FFMPEG -i /tmp/homeowner-no-system.wav -q:a 2 "$OUT/homeowner-no-system.mp3" -y -loglevel quiet
echo "✓ homeowner-no-system.mp3"

espeak-ng $TECH_OPTS \
  "Nope. Replace the capacitor, verify amperage, check refrigerant pressures, and you're back in business." \
  -w /tmp/tech-nope.wav && \
  $FFMPEG -i /tmp/tech-nope.wav -q:a 2 "$OUT/tech-nope.mp3" -y -loglevel quiet
echo "✓ tech-nope.mp3"

echo ""
echo "All voice files in $OUT/"
ls -lh "$OUT/"
