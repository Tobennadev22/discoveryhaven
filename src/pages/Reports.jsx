import { Link } from "react-router-dom";
import { FileText, Download, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { REPORTS } from "../data/content";

function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Reports() {
  const reports = [...REPORTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* HERO */}
      <section className="bg-dark overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">
            Discovery Haven · Impact Reports
          </SectionLabel>
          <h1 className="font-cherry text-h1 bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Impact, in Writing.
          </h1>
          <p className="text-gray-300 font-body text-lead">
            Every cohort ends with a comprehensive evaluation. Download our
            reports to see how scholars grow, what is working, and how our
            programmes evolve.
          </p>
        </motion.div>
      </section>

      {/* REPORT LIST */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 font-body font-bold text-sm text-aqua hover:underline mb-6"
            >
              <ArrowLeft size={16} />
              Back to Impact
            </Link>
            <SectionLabel>All reports</SectionLabel>
            <h2 className="font-cherry text-h2 text-slate-900">
              Download a Report
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {reports.map((report, i) => (
              <motion.div
                key={report.title}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-7 flex flex-col sm:flex-row gap-5 sm:items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-aqua/10 flex items-center justify-center flex-shrink-0">
                  <FileText size={28} className="text-aqua" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 font-body font-bold text-xs text-gray-500">
                      <Calendar size={14} />
                      {formatDate(report.date)}
                    </span>
                    {i === 0 && (
                      <span className="bg-yellow text-dark text-xs font-bold font-body px-3 py-1 rounded-full">
                        Latest
                      </span>
                    )}
                    <span className="bg-cream text-gray-600 text-xs font-bold font-body px-3 py-1 rounded-full">
                      PDF
                    </span>
                  </div>
                  <h3 className="font-cherry text-h3 text-slate-900 mb-1">
                    {report.title}
                  </h3>
                  {report.period && (
                    <p className="font-body font-bold text-sm text-aqua mb-2">
                      {report.period}
                    </p>
                  )}
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {report.description}
                  </p>
                </div>

                {report.file ? (
                  <a
                    href={report.file}
                    download={report.downloadName || true}
                    className="inline-flex items-center justify-center gap-2 rounded-full font-body font-bold px-6 py-3 bg-aqua text-white hover:bg-opacity-90 transition-all duration-200 flex-shrink-0"
                  >
                    <Download size={18} />
                    Download
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full font-body font-bold px-6 py-3 bg-gray-100 text-gray-400 flex-shrink-0">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-dark">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-h2 text-white mb-4">
            Need More Detail?
          </h2>
          <p className="text-gray-400 font-body text-lead mb-8">
            Funders and partners can request full programme evaluation data
            from our team.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us →
          </Button>
        </motion.div>
      </section>
    </>
  );
}
