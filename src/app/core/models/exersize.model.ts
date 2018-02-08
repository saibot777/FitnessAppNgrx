export interface Exersize {
  id: string;
  name: string;
  calories: number;
  duration: number;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}
