import { describe, it, assert } from 'vitest';
import { generateAnswer } from './langchain';

describe('LangChain', () => {
    it('Answers a question', async () => {
        // 1. Add your own question here
        const answer = await generateAnswer('What is the result of 1 plus 1? Answer with only the result, no more words.');

        // 2. Match the answer from the LLM to a predicted value
        assert.equal(answer.trim(), "2");
    });
});
