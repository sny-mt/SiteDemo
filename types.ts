export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  codeSnippet?: string;
  language?: string;
}

export interface AiResponseSchema {
  explanation: string;
  codeSnippet: string;
  language: string;
}

export enum SectionId {
  HERO = 'hero',
  FEATURES = 'features',
  DEMO = 'demo',
  COURSES = 'courses',
  PRICING = 'pricing',
  CONTACT = 'contact',
}