'use server';
/**
 * @fileOverview An AI agent that provides personalized skincare routines and product recommendations.
 *
 * - personalizedSkincareRecommendation - A function that handles the skincare recommendation process.
 * - PersonalizedSkincareRecommendationInput - The input type for the personalizedSkincareRecommendation function.
 * - PersonalizedSkincareRecommendationOutput - The return type for the personalizedSkincareRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSkincareRecommendationInputSchema = z.object({
  skinType: z
    .string()
    .describe(
      'The user\'s skin type (e.g., "oily", "dry", "combination", "normal", "sensitive").'
    ),
  concerns: z
    .string()
    .describe(
      'Comma-separated list of the user\'s skincare concerns (e.g., "acne, fine lines, dark spots, redness").'
    ),
});
export type PersonalizedSkincareRecommendationInput = z.infer<
  typeof PersonalizedSkincareRecommendationInputSchema
>;

const PersonalizedSkincareRecommendationOutputSchema = z.object({
  routine: z
    .string()
    .describe('A detailed, step-by-step personalized skincare routine in markdown format.'),
  recommendedProducts: z
    .array(z.string())
    .describe(
      'A list of recommended product types or generic product names suitable for the routine and concerns.'
    ),
});
export type PersonalizedSkincareRecommendationOutput = z.infer<
  typeof PersonalizedSkincareRecommendationOutputSchema
>;

export async function personalizedSkincareRecommendation(
  input: PersonalizedSkincareRecommendationInput
): Promise<PersonalizedSkincareRecommendationOutput> {
  return personalizedSkincareRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSkincareRecommendationPrompt',
  input: {schema: PersonalizedSkincareRecommendationInputSchema},
  output: {schema: PersonalizedSkincareRecommendationOutputSchema},
  prompt: `You are an expert esthetician and skincare formulator. Your task is to provide a personalized skincare routine and recommend suitable products based on the user's skin type and concerns.

Craft a detailed, step-by-step routine that is easy to follow. Each step should include specific actions and rationale.
Then, suggest generic product types or names that would be appropriate for each step of the routine, addressing the user's concerns.

User's Skin Type: {{{skinType}}}
User's Concerns: {{{concerns}}}`,
});

const personalizedSkincareRecommendationFlow = ai.defineFlow(
  {
    name: 'personalizedSkincareRecommendationFlow',
    inputSchema: PersonalizedSkincareRecommendationInputSchema,
    outputSchema: PersonalizedSkincareRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
