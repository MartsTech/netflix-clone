export interface Subscription {
  role: string;
  status: string;
  price: PricesEntityOrPriceOrProduct;
  current_period_start: CurrentPeriodStartOrCurrentPeriodEndOrCreated;
  trial_start?: null;
  product: PricesEntityOrPriceOrProduct;
  quantity: number;
  prices?: PricesEntityOrPriceOrProduct[] | null;
  canceled_at?: null;
  cancel_at_period_end: boolean;
  current_period_end: CurrentPeriodStartOrCurrentPeriodEndOrCreated;
  items?: ItemsEntity[] | null;
  ended_at?: null;
  metadata: ZcOrINTERNALOrMetadata;
  trial_end?: null;
  created: CurrentPeriodStartOrCurrentPeriodEndOrCreated;
  stripeLink: string;
  cancel_at?: null;
}
export interface PricesEntityOrPriceOrProduct {
  firestore: Firestore;
  _delegate: Delegate;
  _userDataWriter: UserDataWriter;
}
export interface Firestore {
  _delegate: DelegateOrFirestore;
  Zc: ZcOrINTERNALOrMetadata;
  INTERNAL: ZcOrINTERNALOrMetadata;
  tu: AppOrTu;
}
export interface DelegateOrFirestore {
  app: AppOrTu;
  databaseId: DatabaseId;
  settings: Settings;
}
export interface AppOrTu {
  name: string;
  automaticDataCollectionEnabled: boolean;
  options: Options;
}
export interface Options {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
export interface DatabaseId {
  projectId: string;
  database: string;
}
export interface Settings {
  host: string;
  ssl: boolean;
  ignoreUndefinedProperties: boolean;
  cacheSizeBytes: number;
  experimentalForceLongPolling: boolean;
  experimentalAutoDetectLongPolling: boolean;
  useFetchStreams: boolean;
}
export interface ZcOrINTERNALOrMetadata {}
export interface Delegate {
  converter?: null;
  _key: Key;
  type: string;
  firestore: DelegateOrFirestore;
}
export interface Key {
  path: Path;
}
export interface Path {
  segments?: string[] | null;
  offset: number;
  len: number;
}
export interface UserDataWriter {
  firestore: Firestore;
}
export interface CurrentPeriodStartOrCurrentPeriodEndOrCreated {
  seconds: number;
  nanoseconds: number;
}
export interface ItemsEntity {
  subscription: string;
  price: Price;
  id: string;
  object: string;
  created: number;
  plan: Plan;
  metadata: ZcOrINTERNALOrMetadata;
  billing_thresholds?: null;
  quantity: number;
  tax_rates?: null[] | null;
}
export interface Price {
  object: string;
  active: boolean;
  nickname?: null;
  type: string;
  billing_scheme: string;
  id: string;
  currency: string;
  unit_amount: number;
  lookup_key?: null;
  product: Product;
  tax_behavior: string;
  metadata: ZcOrINTERNALOrMetadata;
  recurring: Recurring;
  unit_amount_decimal: string;
  created: number;
  livemode: boolean;
  tiers_mode?: null;
  transform_quantity?: null;
}
export interface Product {
  images?: null[] | null;
  metadata: Metadata;
  name: string;
  statement_descriptor?: null;
  package_dimensions?: null;
  description: string;
  id: string;
  created: number;
  unit_label?: null;
  tax_code?: null;
  shippable?: null;
  attributes?: null[] | null;
  updated: number;
  url?: null;
  type: string;
  object: string;
  livemode: boolean;
  active: boolean;
}
export interface Metadata {
  firebaseRole: string;
}
export interface Recurring {
  usage_type: string;
  aggregate_usage?: null;
  interval: string;
  trial_period_days?: null;
  interval_count: number;
}
export interface Plan {
  livemode: boolean;
  trial_period_days?: null;
  id: string;
  nickname?: null;
  billing_scheme: string;
  usage_type: string;
  interval_count: number;
  interval: string;
  transform_usage?: null;
  created: number;
  amount: number;
  amount_decimal: string;
  object: string;
  aggregate_usage?: null;
  active: boolean;
  tiers_mode?: null;
  currency: string;
  metadata: ZcOrINTERNALOrMetadata;
  product: string;
}
