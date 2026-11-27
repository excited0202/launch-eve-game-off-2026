# 上线前夜 · Launch Eve · ローンチ前夜

A short browser narrative for GitHub Game Off 2026. The store sees 10,000 paid preorders. The bank sees nothing until settlement. One Friday payroll, one release slot, and one newcomer’s level are on the line.

- Play locally: open `game/index.html` in a modern browser. No build, account, external assets, or network requests required.
- Start by answering the call, or use the room buttons. Shift switches the two decision desks. The Production room can preserve a detail in the demo at a cost. A new run compares the consequences of your last choice. Sounds are optional and synthesized in the browser.
- Simplified Chinese, English, and Japanese. Language switching preserves the current run; restarting or reloading does not preserve decisions.
- Run accounting and localization tests: `node tests/routes.cjs` (no dependencies).
- The characters, worksite, level, and numbers are fictional. No workplace model or real company data is included.

## Theme and implementation
SHIFT means the night shift, shifting the perspective between Release and Finance, and possibly shifting a vendor payment into next month. The player sees the price of both a production decision and a financing decision. The estimate is not revenue: platform settlement is later, so prepaid orders are not cash available for Friday's payroll.

## Generative AI
ChatGPT substantially assisted with the game design, fiction and localization, UI and SVG graphics, implementation including procedural sound cues, and test scripts. The human supplied the direction and critique, including role-specific skills and the visual direction. This is a collaborative AI-assisted prototype, not a claim of wholly independent manual development. No externally sourced music, fonts, artwork or proprietary plans are bundled.
