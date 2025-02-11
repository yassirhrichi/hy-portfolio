import path from "path";
import fs from "fs";
type MetaData = {
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
};
const postsDirectory = path.join(process.cwd(), "src", "app", "blog", "content");

function getMdxFiles(){
    return fs.readdirSync(postsDirectory).filter(file=>file.endsWith(".mdx"));
}

export function readMdxFile(fileName: string){
    const filePath  =path.join(postsDirectory, fileName);
    let rawFileContent = fs.readFileSync(filePath, "utf-8");
    return rawFileContent;
}