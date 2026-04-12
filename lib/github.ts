const GITHUB_REPO = 'Ian-bug/ruin-injector';

export interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
}

export async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export function parseVersion(tagName: string): string {
  return tagName.startsWith('v') ? tagName : `v${tagName}`;
}
