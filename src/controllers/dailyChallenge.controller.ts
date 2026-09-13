import { Request, Response } from 'express';
import { DailyChallengeService } from '../services/dailyChallenge.service';

export class DailyChallengeController {
  /**
   * GET /api/questions/daily-challenge
   * Generates a balanced set of learning questions and test MCQs for the Daily Challenge
   */
  static async getDailyChallenge(req: Request, res: Response): Promise<void> {
    try {
      const { technologies, learningCount, testCount, excludeIds } = req.query;

      const result = await DailyChallengeService.getDailyChallengeQuestions({
        technologies: technologies as string | string[],
        learningCount: learningCount ? Number(learningCount) : undefined,
        testCount: testCount ? Number(testCount) : undefined,
        excludeIds: excludeIds as string | string[],
      });

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to generate daily challenge questions',
      });
    }
  }

  /**
   * GET /api/questions/daily-challenge/retry-test
   * Generates fresh test MCQs for a retry attempt
   */
  static async getRetryTest(req: Request, res: Response): Promise<void> {
    try {
      const { technologies, count, excludeIds } = req.query;

      const result = await DailyChallengeService.getRetryTestQuestions({
        technologies: technologies as string | string[],
        count: count ? Number(count) : undefined,
        excludeIds: excludeIds as string | string[],
      });

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to generate retry test questions',
      });
    }
  }
}
