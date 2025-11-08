'use client';

import { useState } from 'react';
import { Search, Zap, TrendingUp } from 'lucide-react';

interface Vacancy {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Vacancy[]>([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      // Пока что используем заглушку, позже подключим к реальному API
      const mockResults = [
        {
          id: 1,
          title: 'Senior Frontend Developer',
          company: 'TechCorp',
          location: 'Москва',
          salary: '250 000 - 350 000 ₽',
          description: 'Ищем опытного frontend разработчика с опытом работы с React и TypeScript...',
          tags: ['React', 'TypeScript', 'Next.js']
        },
        {
          id: 2,
          title: 'Fullstack Developer',
          company: 'StartupXYZ',
          location: 'Санкт-Петербург',
          salary: '200 000 - 300 000 ₽',
          description: 'Требуется fullstack разработчик для работы над новым продуктом...',
          tags: ['Node.js', 'React', 'PostgreSQL']
        }
      ];
      setResults(mockResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  HH Parser
                </h1>
              </div>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                Powered by Credo-S
              </span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-800 bg-clip-text text-transparent">
            Найдите идеальную вакансию
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Автоматический парсер вакансий HeadHunter с использованием искусственного интеллекта
          </p>

          {/* Search Form */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Поисковый запрос
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Например: React разработчик Москва"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={isLoading || !searchQuery.trim()}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Поиск...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Найти вакансии
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-cyan-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Найдено {results.length} вакансий</h3>
            </div>

            <div className="space-y-4">
              {results.map((vacancy) => (
                <div key={vacancy.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{vacancy.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {vacancy.company} • {vacancy.location}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm font-medium rounded-full border border-cyan-200 dark:border-cyan-800">
                        {vacancy.salary}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {vacancy.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vacancy.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700 mb-4" />
                    <button className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium transition-colors">
                      Подробнее →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Умный поиск</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              AI-powered поиск вакансий с учетом ваших навыков и предпочтений
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Быстрый парсинг</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Мгновенный анализ тысяч вакансий с фильтрацией по критериям
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Аналитика рынка</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Статистика зарплат и тренды по технологиям в реальном времени
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 HH Parser. Создано с ❤️ командой Credo-S</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
