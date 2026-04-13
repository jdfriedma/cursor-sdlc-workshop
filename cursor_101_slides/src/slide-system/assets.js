function imageAsset(fileName, alt) {
  return {
    kind: 'image',
    browserSrc: `/images/${fileName}`,
    filePath: `../../../public/images/${fileName}`,
    alt,
  }
}

export const assets = {
  googleDocsPlaceholder: imageAsset(
    'google-docs-screenshot.png',
    'Google Docs business plan screenshot',
  ),
  microsoftWordPlaceholder: imageAsset(
    'microsoft-word-screenshot.png',
    'Microsoft Word blank document screenshot',
  ),
  applePagesPlaceholder: imageAsset(
    'apple-pages-screenshot.png',
    'Apple Pages blank document screenshot',
  ),
  cliSurfacePlaceholder: imageAsset(
    'cli-surface-placeholder.svg',
    'Placeholder for a Cursor CLI screenshot showing agent running in the terminal',
  ),
  ideSurfacePlaceholder: imageAsset(
    'ide-surface-placeholder.svg',
    'Placeholder for a Cursor IDE screenshot with four quadrants and Glass inset',
  ),
  cloudSurfacePlaceholder: imageAsset(
    'cloud-surface-placeholder.svg',
    'Placeholder for a Cursor cloud agent browser session and automation configuration screenshot',
  ),
  marketplacePlaceholder: imageAsset(
    'marketplace-placeholder.svg',
    'Placeholder for a Cursor marketplace screenshot with team-pinned plugins',
  ),
  claudePluginPlaceholder: imageAsset(
    'claude-plugin-placeholder.svg',
    'Placeholder for a Claude Code plugin discovery terminal screenshot',
  ),
}

export function getAsset(key) {
  return assets[key]
}
