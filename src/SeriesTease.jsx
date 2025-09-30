export default function SeriesTease() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-semibold mb-6">The Series</h2>
      <div className="flex justify-center gap-4">
        <div className="w-48 h-48 bg-gray-700 rounded-lg"></div>
        <div className="w-48 h-48 bg-gray-700 rounded-lg"></div>
        <div className="w-48 h-48 bg-gray-700 rounded-lg"></div>
      </div>
      <button className="mt-6 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">Watch Teaser</button>
    </section>
  )
}
