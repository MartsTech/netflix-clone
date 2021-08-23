export interface Subscription {
  role: "basic" | "standard" | "premium";
  current_period_end: string;
  current_period_start: string;
}
