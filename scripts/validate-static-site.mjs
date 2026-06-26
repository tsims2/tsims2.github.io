import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, "index.html"), "utf8");
const requiredSections = ["overview", "architecture", "workflows", "execution", "impact", "contact"];
const localAssetPattern = /\b(?:src|href)="([^"#?]+)"/g;
const missing = [];

for (const section of requiredSections) {
    if (!html.includes(`id="${section}"`)) {
        missing.push(`Missing section id: ${section}`);
    }
}

for (const match of html.matchAll(localAssetPattern)) {
    const reference = match[1];

    if (
        reference.startsWith("http") ||
        reference.startsWith("mailto:") ||
        reference.startsWith("#")
    ) {
        continue;
    }

    if (!existsSync(join(root, reference))) {
        missing.push(`Missing local reference: ${reference}`);
    }
}

if (!html.includes("assets/ESPApp/esp-app-03-performance-workflow-sanitized.png")) {
    missing.push("Hero performance workflow screenshot is not referenced.");
}

if (missing.length) {
    console.error(missing.join("\n"));
    process.exit(1);
}

console.log("Static site validation passed.");
