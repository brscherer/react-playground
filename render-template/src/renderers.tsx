import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

import type { ReportDocument } from './types'

const createBlobUrl = (document: jsPDF) => {
  const blob = document.output('blob')
  return URL.createObjectURL(blob)
}

const escapeCsvValue = (value: string | number) => {
  const text = String(value)

  if (text.includes(',') || text.includes('"') || text.includes('\n')) {
    return `"${text.replaceAll('"', '""')}"`
  }

  return text
}

export const buildCsv = <TData,>(report: ReportDocument<TData>) => {
  const header = report.columns.map((column) => column.header)
  const rows = report.rows.map((row) =>
    report.columns.map((column) => escapeCsvValue(column.accessor(row))),
  )

  return [header, ...rows].map((line) => line.join(',')).join('\n')
}

export const downloadCsv = <TData,>(report: ReportDocument<TData>) => {
  const blob = new Blob([buildCsv(report)], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  triggerDownload(url, `${slugify(report.title)}.csv`)
  window.setTimeout(() => URL.revokeObjectURL(url), 500)
}

const buildPdf = <TData,>(report: ReportDocument<TData>) => {
  const document = new jsPDF({
    unit: 'pt',
    format: 'a4',
  })

  document.setFont('helvetica', 'bold')
  document.setFontSize(20)
  document.text(report.title, 40, 50)

  document.setFont('helvetica', 'normal')
  document.setFontSize(11)
  document.text(report.subtitle, 40, 72)
  document.text(`${report.company} • ${report.generatedAt}`, 40, 90)

  let summaryTop = 118
  report.summary.forEach((metric) => {
    document.setFont('helvetica', 'bold')
    document.text(metric.label, 40, summaryTop)
    document.setFont('helvetica', 'normal')
    document.text(metric.value, 160, summaryTop)
    summaryTop += 18
  })

  autoTable(document, {
    startY: 205,
    head: [report.columns.map((column) => column.header)],
    body: report.rows.map((row) => report.columns.map((column) => String(column.accessor(row)))),
    theme: 'grid',
    styles: {
      fontSize: 10,
      cellPadding: 8,
      textColor: [28, 28, 28],
    },
    headStyles: {
      fillColor: [35, 48, 68],
    },
  })

  const tableBottom = (document as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 28
  report.footer.forEach((metric, index) => {
    document.setFont('helvetica', 'bold')
    document.text(metric.label, 40, tableBottom + index * 18)
    document.setFont('helvetica', 'normal')
    document.text(metric.value, 160, tableBottom + index * 18)
  })

  return document
}

export const previewPdf = <TData,>(report: ReportDocument<TData>) => {
  const url = createBlobUrl(buildPdf(report))
  window.open(url, '_blank', 'noopener,noreferrer')
  window.setTimeout(() => URL.revokeObjectURL(url), 2000)
}

export const downloadPdf = <TData,>(report: ReportDocument<TData>) => {
  buildPdf(report).save(`${slugify(report.title)}.pdf`)
}

const triggerDownload = (url: string, filename: string) => {
  const anchor = window.document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const useReportTable = <TData,>(report: ReportDocument<TData>) => {
  const columnHelper = createColumnHelper<TData>()
  const columns = report.columns.map((column) =>
    columnHelper.display({
      id: column.id,
      header: () => column.header,
      cell: (context) => {
        const value = column.accessor(context.row.original)
        return <span className={`cell cell--${column.align ?? 'left'}`}>{String(value)}</span>
      },
    }),
  )

  return useReactTable({
    data: report.rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
}

export { flexRender }
