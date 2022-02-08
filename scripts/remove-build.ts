/**
 * @file remove-build.ts
 *
 * @fileoverview Removes the current frontend being built.
 * If we run FRONTEND=trending yarn build we do not need to clean or touch existing sites,
 * we can simply run the current one but for that the current build/trending folder needs to be removed.
 */
import path from "path"
const rimraf = require("rimraf")
const destination = path.resolve(`./.next`)
try {
  rimraf(destination, () => {})
} catch {}
export {}
