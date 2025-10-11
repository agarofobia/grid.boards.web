import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm opacity-80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">© {new Date().getFullYear()} GridBoards — Crafted by artists at the speed of pitch.</div>
        <div>Privacy · Terms</div>
      </div>
    </footer>
  )
}
