"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("4chan");

  return (
    <nav className="relative bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* LEFT SIDE */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            {/* Desktop Menu */}
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/chan"
                  onClick={() => setActiveTab("4chan")}
                  className={`rounded-md ${
                    activeTab === "4chan" ? "bg-gray-100" : ""
                  }px-3 py-2 text-sm font-medium text-gray-900`}
                >
                  4Chan Stats
                </Link>
                <Link
                  href="/reddit"
                  onClick={() => setActiveTab("reddit")}
                  className={`rounded-md px-3 py-2 ${
                    activeTab === "reddit" ? "bg-gray-100" : ""
                  } text-sm font-medium text-gray-700 hover:bg-gray-100`}
                >
                  Reddit Stats
                </Link>
                <Link
                  href="/comparison"
                  onClick={() => setActiveTab("comparison")}
                  className={`rounded-md px-3 py-2 ${
                    activeTab === "comparison" ? "bg-gray-100" : ""
                  } text-sm font-medium text-gray-700 hover:bg-gray-100`}
                >
                  Analysis / Comparison
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (EMPTY / CLEAN) */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-200 px-4 py-3 text-sm text-gray-500">
          <div className="flex flex-col space-y-2">
            <Link
              href="/chan"
              onClick={() => setActiveTab("4chan")}
              className={`rounded-md px-3 py-2 text-sm font-medium text-gray-900 ${
                activeTab === "4chan" ? "bg-gray-100" : ""
              }`}
            >
              4Chan Stats
            </Link>

            <Link
              href="/reddit"
              onClick={() => setActiveTab("reddit")}
              className={`rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${
                activeTab === "reddit" ? "bg-gray-100" : ""
              }`}
            >
              Reddit Stats
            </Link>

            <Link
              href="/comparison"
              onClick={() => setActiveTab("comparison")}
              className={`rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${
                activeTab === "comparison" ? "bg-gray-100" : ""
              }`}
            >
              Analysis / Comparison
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
