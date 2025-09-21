import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true, // This is important! It makes expect available globally
		environment: "jsdom",
		setupFiles: ["./src/config/setup-tests.ts"],
		include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
