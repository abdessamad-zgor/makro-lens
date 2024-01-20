import * as esbuild from "esbuild"
import { mkdir, rm} from 'fs'
import { cwd } from "process"

rm(cwd()+"/dist", {recursive: true}, ()=>{})
mkdir(cwd()+"/dist", ()=>{})

let assetResult = await esbuild.build({
  entryPoints: ["ext/**/*"],
  assetNames: "[dir]/[name]",
  loader: {
    ".png": "copy",
    ".ico": "copy",
    ".html": "copy",
    ".json": "copy"
  },
  outdir: "dist"
})

console.log(assetResult)

mkdir(cwd()+"/dist/js", ()=>{})

let codeResult  = await esbuild.build({
  entryPoints: ["src/app.ts", "src/content.ts", "src/background.ts"],
  bundle: true,
  outdir: 'dist/js/',
})

console.log(codeResult)
