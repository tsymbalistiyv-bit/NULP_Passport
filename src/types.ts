export type TabType = 'PASSPORT' | 'SPECIFICATIONS' | 'HISTORY' | 'ANALYTICS';

export interface HistoryFact {
  id: string;
  title: string;
  shortSummary: string;
  fullText: string;
  year?: string;
  tag: string;
  image?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  highlight?: boolean;
  change?: string;
}

export interface ScaleMetric {
  icon: 'apartment' | 'location_city' | 'school' | 'science' | 'book';
  value: string;
  label: string;
}

export interface TechnicalSpec {
  category: string;
  items: { key: string; value: string }[];
}

export interface BuildingPassport {
  id: string;
  serialNumber: string;
  title: string;
  subtitle: string;
  architect: string;
  style: string;
  yearBuilt: string;
  description: string;
  heroImage: string;
  nfcStatus: string;
  edition: string;
  metrics: {
    topUkraineRank: string;
    consolidatedRank: string;
    studentsCount: string;
    studentsLabel: string;
  };
  scaleMetrics: ScaleMetric[];
  historyFacts: HistoryFact[];
  technicalSpecs: TechnicalSpec[];
  coordinates: {
    lat: number;
    lng: number;
    address: string;
  };
  provenance: {
    tokenHash: string;
    blockNumber: string;
    verifiedAt: string;
    curator: string;
    integrityScore: number;
  };
}
