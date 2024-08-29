import path from 'path';
import { promises as fs } from 'fs';

export default async function getAllPosts() {
  const filePath = path.join(process.cwd(), 'public/data/posts.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
