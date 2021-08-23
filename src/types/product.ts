export interface Product {
  metadata: Metadata;
  role: string;
  images?: null[] | null;
  name: string;
  tax_code?: null;
  active: boolean;
  description: string;
  prices: Prices;
}
export interface Metadata {
  firebaseRole: string;
}
export interface Prices {
  priceId: string;
  priceData: PriceData;
}
export interface PriceData {
  transform_quantity?: null;
  unit_amount: number;
  interval: string;
  type: string;
  active: boolean;
  currency: string;
  tiers_mode?: null;
  trial_period_days?: null;
  tax_behavior: string;
  description?: null;
  recurring: Recurring;
  tiers?: null;
  interval_count: number;
  billing_scheme: string;
  metadata: PriceMetadata;
}
export interface Recurring {
  aggregate_usage?: null;
  trial_period_days?: null;
  interval_count: number;
  usage_type: string;
  interval: string;
}
export interface PriceMetadata {}
