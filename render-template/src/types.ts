export type RenderFormat = 'html' | 'pdf' | 'csv'

export type Alignment = 'left' | 'right'

export interface ReportMetric {
  label: string
  value: string
}

export interface ReportColumn<TData> {
  id: string
  header: string
  accessor: (row: TData) => string | number
  align?: Alignment
}

export interface ReportDocument<TData> {
  title: string
  subtitle: string
  company: string
  generatedAt: string
  summary: ReportMetric[]
  footer: ReportMetric[]
  columns: ReportColumn<TData>[]
  rows: TData[]
}
