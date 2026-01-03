
export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
