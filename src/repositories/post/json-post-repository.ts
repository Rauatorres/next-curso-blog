import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

const LOADING_TIME = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateLoading() {
    return await new Promise((resolve) => setTimeout(resolve, LOADING_TIME));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonFile = await readFile(JSON_FILE_PATH, "utf-8");
    const jsonParsed = JSON.parse(jsonFile);
    return jsonParsed.posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateLoading();
    return await this.readFromDisk();
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const res = posts.find((post) => post.id == id);

    if (!res) throw new Error("post não encontrado");

    return res;
  }
}
