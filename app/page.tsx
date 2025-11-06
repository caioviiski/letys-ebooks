export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">
            📚 Lety's Ebooks
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ebooks infantis digitais para encantar e educar
          </p>
          <div className="inline-block bg-yellow-100 border-2 border-yellow-400 rounded-lg px-6 py-3">
            <p className="text-lg font-semibold text-yellow-800">
              🚀 Plataforma em desenvolvimento
            </p>
            <p className="text-sm text-yellow-700 mt-1">
              Em breve você poderá adquirir nossos ebooks!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-lg font-semibold mb-2">Histórias Encantadoras</h3>
            <p className="text-gray-600">Narrativas cuidadosamente criadas para crianças</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold mb-2">Ilustrações Coloridas</h3>
            <p className="text-gray-600">Imagens vibrantes que estimulam a imaginação</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-lg font-semibold mb-2">Educação e Diversão</h3>
            <p className="text-gray-600">Aprendizado através de histórias divertidas</p>
          </div>
        </div>
      </div>
    </main>
  );
}
