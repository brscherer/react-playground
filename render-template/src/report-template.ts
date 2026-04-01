import type { ReportDocument } from './types'

export interface RevenueRow {
  customer: string
  plan: string
  region: string
  seats: number
  amount: number
  renewalDate: string
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const rows: RevenueRow[] = [
  {
    customer: 'Northstar Health',
    plan: 'Enterprise',
    region: 'North America',
    seats: 280,
    amount: 142000,
    renewalDate: '2026-05-14',
  },
  {
    customer: 'Bluewave Logistics',
    plan: 'Growth',
    region: 'Europe',
    seats: 96,
    amount: 48000,
    renewalDate: '2026-06-03',
  },
  {
    customer: 'Solstice Labs',
    plan: 'Enterprise',
    region: 'North America',
    seats: 164,
    amount: 86500,
    renewalDate: '2026-06-18',
  },
  {
    customer: 'Kite Retail Group',
    plan: 'Scale',
    region: 'LATAM',
    seats: 122,
    amount: 59200,
    renewalDate: '2026-07-07',
  },
  {
    customer: 'Atlas Manufacturing',
    plan: 'Growth',
    region: 'APAC',
    seats: 88,
    amount: 45200,
    renewalDate: '2026-07-21',
  },
]

const totalRevenue = rows.reduce((sum, row) => sum + row.amount, 0)
const totalSeats = rows.reduce((sum, row) => sum + row.seats, 0)

export const revenueReport: ReportDocument<RevenueRow> = {
  title: 'Quarterly Revenue Snapshot',
  subtitle: 'A single template rendered consistently in HTML, PDF, and CSV.',
  company: 'Render Studio',
  generatedAt: 'March 31, 2026',
  summary: [
    { label: 'Quarter', value: 'Q2 2026' },
    { label: 'Customers', value: String(rows.length) },
    { label: 'Booked revenue', value: currency.format(totalRevenue) },
    { label: 'Active seats', value: totalSeats.toLocaleString('en-US') },
  ],
  footer: [
    { label: 'Average contract', value: currency.format(totalRevenue / rows.length) },
    { label: 'Largest region', value: 'North America' },
  ],
  columns: [
    {
      id: 'customer',
      header: 'Customer',
      accessor: (row) => row.customer,
    },
    {
      id: 'plan',
      header: 'Plan',
      accessor: (row) => row.plan,
    },
    {
      id: 'region',
      header: 'Region',
      accessor: (row) => row.region,
    },
    {
      id: 'seats',
      header: 'Seats',
      accessor: (row) => row.seats,
      align: 'right',
    },
    {
      id: 'amount',
      header: 'Amount',
      accessor: (row) => currency.format(row.amount),
      align: 'right',
    },
    {
      id: 'renewalDate',
      header: 'Renewal',
      accessor: (row) => row.renewalDate,
    },
  ],
  rows,
}
