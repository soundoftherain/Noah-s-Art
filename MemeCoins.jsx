export default function MemeCoins() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-semibold mb-6">Meme Coins</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="bg-gray-700 h-40 rounded-lg flex items-center justify-center">
            Character {i+1}
          </div>
        ))}
      </div>
    </section>
  )
}
