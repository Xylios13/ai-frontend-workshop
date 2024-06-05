import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new OpenAI({ openAIApiKey: import.meta.env.VITE_OPENAI_KEY });

export async function generateAnswer(question: string) {
  const prompt = PromptTemplate.fromTemplate(
    `Take the role of a personal travel assistant, and answer the following question in detail: {question}?`
  );

  let answer = ''

  const formattedPrompt = await prompt.format({
    question,
  });

  try {
    answer = await llm.invoke(formattedPrompt);
  } catch (e) {
      return 'Something went wrong'
  }

  return answer
}
