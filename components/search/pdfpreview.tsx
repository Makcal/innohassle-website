import {
  MoodleSource,
  SearchResponseSource,
} from "@/lib/search/api/__generated__";
import type { PDFDocumentProxy } from "pdfjs-dist";
import React, { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PdfPreviewBottomButton from "./PdfPreviewBottomButton";

function highlightPattern(text: string, pattern: string) {
  return text.replace(pattern, (value: any) => `<mark>${value}</mark>`);
}

export declare type PdfPreviewProps = {
  source: SearchResponseSource | null;
  searchText: string;
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfPreview({ source, searchText }: PdfPreviewProps) {
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const PAGE_MIN_HEIGHT = 400;
  const [error, setError] = useState<string | null>(null);

  let pageIndex: number = 1;
  if ((source as MoodleSource).preview_location) {
    pageIndex = (source as MoodleSource).preview_location?.page_index ?? 1;
  }
  const [currentPage, setCurrentPage] = useState(pageIndex);

  function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    setPdfDocument(pdf);
    setNumPages(pdf.numPages);
    setCurrentPage(1); // Устанавливаем текущую страницу на первую при загрузке документа
  }

  function onDocumentLoadError(error: any) {
    if (error.name === "MissingPDFException") {
      setError("PDF file is missing");
    } else {
      setError("Error while loading PDF file");
    }
  }

  const textRenderer = useCallback(
    (textItem: { str: any }) => highlightPattern(textItem.str, searchText),
    [searchText],
  );

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < numPages ? prevPage + 1 : prevPage,
    );
  };

  return (
    <div className="flex h-fit max-h-full flex-col gap-2 rounded-lg border border-default bg-sidebar p-4">
      <p className="text-2xl font-semibold text-base-content dark:text-white">
        {(source as MoodleSource).display_name}
      </p>
      <a href={(source as MoodleSource).link} className="w-fit max-w-full">
        <p className="truncate pb-3 text-xs font-normal text-breadcrumbs hover:underline">
          {(source as MoodleSource).breadcrumbs.join(" > ")}
        </p>
      </a>
      <Document
        file={(source as MoodleSource).resource_preview_url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div
            className="skeleton flex"
            style={{
              height: `${PAGE_MIN_HEIGHT}px`,
            }}
          />
        }
        error={
          <div
            className="skeleton flex items-center justify-center text-lg font-semibold text-red-500"
            style={{
              height: `${PAGE_MIN_HEIGHT}px`,
            }}
          >
            {error}
          </div>
        }
      >
        <div className="flex items-center justify-center">
          <div className="custom-preview-scrollbar overflow-auto rounded-2xl shadow-lg">
            <Page
              pageNumber={currentPage}
              customTextRenderer={textRenderer}
              renderTextLayer={true}
              renderAnnotationLayer={false}
              renderForms={false}
            />
          </div>
        </div>
      </Document>
      <div className="mb-4 mt-2 flex flex-row flex-wrap justify-center gap-4">
        <PdfPreviewBottomButton
          icon={<span className="icon-[material-symbols--download]"></span>}
          text="Download"
          href={(source as MoodleSource).resource_download_url}
        />

        <div className="flex flex-row items-center rounded-lg bg-base-100 dark:bg-primary-hover">
          <button
            className="px-4"
            onClick={goToPrevPage}
            disabled={currentPage <= 1}
          >
            &lt;
          </button>
          <span className="px-4 text-sm md:text-xs">{`${currentPage}/${numPages}`}</span>
          <button
            className="px-4"
            onClick={goToNextPage}
            disabled={currentPage >= numPages}
          >
            &gt;
          </button>
        </div>

        <PdfPreviewBottomButton
          icon={<span className="icon-[material-symbols--open-in-new]"></span>}
          text="To source"
          href={(source as MoodleSource).link}
        />
        <PdfPreviewBottomButton
          icon={<span className="icon-[material-symbols--open-in-new]"></span>}
          text="New tab"
          href={undefined}
        />
      </div>
    </div>
  );
}
