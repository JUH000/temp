import { ApiProperty } from '@nestjs/swagger';

class ChapterDto {
  @ApiProperty({ example: 'Introduction to Algebra' })
  chapterTitle: string;

  @ApiProperty({ example: 3 })
  difficulty: number;

  @ApiProperty({ example: 20 })
  contentVolume: number;
}

export class AiGeneratePlanDto {
  @ApiProperty({ example: 'Mathematics' })
  subject: string;

  @ApiProperty({ example: '2025-05-10' })
  startDate: string;

  @ApiProperty({ example: '2025-06-10' })
  endDate: string;

  @ApiProperty({ example: 5, description: 'Importance level from 1 to 5' })
  importance: number;

  @ApiProperty({ type: [ChapterDto] })
  chapters: ChapterDto[];
}
