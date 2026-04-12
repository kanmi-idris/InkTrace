export interface SourceRecord {
  id: string;
  title: string;
  type: string;
  author: string;
  created_at: string;
  source_path: string;
  source_url: string;
  tags: string[];
  status: "active" | "archived";
}
