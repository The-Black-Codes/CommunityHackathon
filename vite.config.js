import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
base: "/CommunityHackathon",
build: {
  outDir: "docs" // Change from "dist" to "docs"
}
});
