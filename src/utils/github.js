// src/utils/github.js
const GITHUB_USERNAME = "mira796";
const REPO_NAME = "tugas";
const FILE_PATH = "tasks.json";
const BRANCH = "main";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function updateTasksInGitHub(tasks) {
  const content = btoa(JSON.stringify(tasks, null, 2));

  const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${FILE_PATH}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const data = await res.json();

  const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${FILE_PATH}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      message: "Update tasks from Netlify App",
      content,
      sha: data.sha,
      branch: BRANCH,
    }),
  });

  return await response.json();
}
