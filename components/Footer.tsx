export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 px-10 text-center space-y-1">
      <p className="text-gray-500 text-sm">Finley Ghosh &copy; {year}</p>
      <p className="text-gray-600 text-xs italic">
        Shamelessly built with AI. That&apos;s kind of the point.
      </p>
    </footer>
  )
}
