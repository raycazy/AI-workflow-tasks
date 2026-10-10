#!/bin/sh
# Serves the HGA redesign on http://localhost:8766 and opens it. Close this window to stop.
cd "$(dirname "$0")" || exit 1
PORT=8766
(sleep 1; open "http://localhost:$PORT/") &
exec python3 -m http.server "$PORT"
