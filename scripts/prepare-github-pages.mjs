import { access, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryName = 'caitos-little-farm';
const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(projectRoot, 'dist', 'client');
const nestedAssetDirectory = join(
  outputDirectory,
  repositoryName,
  '_next',
);
const rootAssetDirectory = join(outputDirectory, '_next');

await access(join(outputDirectory, 'index.html'));
await access(nestedAssetDirectory);

await rm(rootAssetDirectory, { recursive: true, force: true });
await rename(nestedAssetDirectory, rootAssetDirectory);
await rm(join(outputDirectory, repositoryName), {
  recursive: true,
  force: true,
});

for (const filename of ['index.html', 'index.rsc']) {
  const filePath = join(outputDirectory, filename);
  const source = await readFile(filePath, 'utf8');
  const prepared = source.replaceAll(
    '/icon.svg',
    `/${repositoryName}/icon.svg`,
  );
  await writeFile(filePath, prepared);
}

console.log(`Prepared ${outputDirectory} for GitHub Pages.`);
