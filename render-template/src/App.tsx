import { useState } from 'react'

import './App.css'
import { revenueReport } from './report-template'
import { buildCsv, downloadCsv, downloadPdf, flexRender, previewPdf, useReportTable } from './renderers'
import type { RenderFormat } from './types'

const formatLabels: Record<RenderFormat, string> = {
  html: 'HTML',
  pdf: 'PDF',
  csv: 'CSV',
}

function App() {
  const [activeFormat, setActiveFormat] = useState<RenderFormat>('html')
  const table = useReportTable(revenueReport)
  const csv = buildCsv(revenueReport)

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Render Template</span>
          <h1>One template definition, three output formats.</h1>
          <p>
            This Vite + React + TypeScript example keeps the report schema in one place, then
            renders it as HTML, PDF, or CSV without duplicating field definitions.
          </p>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={() => previewPdf(revenueReport)}>
            Preview PDF
          </button>
          <button className="secondary-button" onClick={() => downloadCsv(revenueReport)}>
            Download CSV
          </button>
        </div>
      </section>

      <section className="workspace-card">
        <header className="workspace-header">
          <div>
            <p className="section-label">Shared report definition</p>
            <h2>{revenueReport.title}</h2>
            <p className="workspace-subtitle">{revenueReport.subtitle}</p>
          </div>

          <div className="format-switcher" role="tablist" aria-label="Renderer format">
            {(['html', 'pdf', 'csv'] as RenderFormat[]).map((format) => (
              <button
                key={format}
                className={format === activeFormat ? 'format-chip active' : 'format-chip'}
                onClick={() => setActiveFormat(format)}
                role="tab"
                aria-selected={format === activeFormat}
              >
                {formatLabels[format]}
              </button>
            ))}
          </div>
        </header>

        <div className="metrics-grid">
          {revenueReport.summary.map((metric) => (
            <article key={metric.label} className="metric-card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </article>
          ))}
        </div>

        {activeFormat === 'html' ? (
          <section className="renderer-panel">
            <div className="panel-heading">
              <div>
                <p className="section-label">HTML renderer</p>
                <h3>Interactive report preview</h3>
              </div>
              <p className="helper-text">Powered by React and TanStack Table.</p>
            </div>

            <div className="table-shell">
              <table>
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <footer className="footer-metrics">
              {revenueReport.footer.map((metric) => (
                <p key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </p>
              ))}
            </footer>
          </section>
        ) : null}

        {activeFormat === 'pdf' ? (
          <section className="renderer-panel renderer-panel--compact">
            <div className="panel-heading">
              <div>
                <p className="section-label">PDF renderer</p>
                <h3>Download-ready document</h3>
              </div>
              <p className="helper-text">Generates the same report content as a formatted PDF.</p>
            </div>

            <div className="format-preview">
              <p>
                The PDF exporter uses the shared columns, rows, summary metrics, and footer values
                from the same template object as the HTML view.
              </p>
              <div className="button-row">
                <button className="primary-button" onClick={() => previewPdf(revenueReport)}>
                  Open PDF preview
                </button>
                <button className="secondary-button" onClick={() => downloadPdf(revenueReport)}>
                  Save PDF
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {activeFormat === 'csv' ? (
          <section className="renderer-panel renderer-panel--compact">
            <div className="panel-heading">
              <div>
                <p className="section-label">CSV renderer</p>
                <h3>Serialized plain-text output</h3>
              </div>
              <p className="helper-text">Uses the same ordered column definitions as every format.</p>
            </div>

            <div className="format-preview">
              <pre>{csv}</pre>
              <div className="button-row">
                <button className="secondary-button" onClick={() => downloadCsv(revenueReport)}>
                  Save CSV
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </section>
    </main>
  )
}

export default App
