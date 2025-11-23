import { GoogleGenAI, Type } from "@google/genai";
import { AiResponseSchema } from '../types';

const apiKey = process.env.API_KEY || '';

// Initialize generic client safely
let ai: GoogleGenAI | null = null;
try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (error) {
  console.error("Failed to initialize Gemini client:", error);
}

export const askAiTutor = async (question: string): Promise<AiResponseSchema> => {
  if (!ai) {
    // Fallback if no API key is present (for demo purposes if env is missing)
    return {
      explanation: "現在デモモードで動作しています（APIキー未設定）。Gemini APIを設定すると、あなたの質問に合わせてリアルタイムにコードを生成・解説します。",
      codeSnippet: "console.log('Setup API Key to enable AI Tutor');",
      language: "javascript"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `あなたはプログラミングスクール「AI Code Academy」の優秀で親しみやすいAIチューターです。
        以下の指針に従って回答してください：
        1. 初心者にもわかりやすく、専門用語は噛み砕いて日本語で解説する。
        2. 常に「なぜそうなるのか」という仕組みを簡潔に説明する。
        3. 必ず具体的なコード例（Python, JavaScript, Reactなど文脈に合わせて）を提示する。
        4. 励ましの言葉を添えて、学習者のモチベーションを高める。`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            explanation: {
              type: Type.STRING,
              description: '質問に対する日本語でのわかりやすい解説。励ましの言葉を含める。',
            },
            codeSnippet: {
              type: Type.STRING,
              description: '説明を補足する具体的で実行可能なコードブロック。',
            },
            language: {
              type: Type.STRING,
              description: 'プログラミング言語の名前 (例: python, javascript, typescript)',
            },
          },
          required: ["explanation", "codeSnippet", "language"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as AiResponseSchema;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      explanation: "申し訳ありません。現在アクセスが集中しているため、AIサービスに接続できませんでした。しばらく待ってから再度お試しください。",
      codeSnippet: "// Connection Error\nretryLater();",
      language: "javascript"
    };
  }
};