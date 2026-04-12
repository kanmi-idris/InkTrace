export interface WikiPage {
  id: string;
  type: string;
  title: string;
  status: string;
  confidence?: string;
  source_ids: string[];
  updated_at: string;
}
