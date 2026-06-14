export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface QuizResult {
  title: string;
  description: string;
  syndrome: string;
  recommendation: string;
}

export interface BedtimeActivity {
  id: string;
  name: string;
  duration: number; // in minutes
  icon: string;
  description: string;
}
