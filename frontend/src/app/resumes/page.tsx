'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, DollarSign, Briefcase, User, Calendar, Menu } from 'lucide-react';
import { Button, Card, CardContent, Badge, Input } from '@credo-s/design-system';
import { useRouter } from 'next/navigation';

interface Resume {
  id: string;
  title: string;
  areaId: number;
  areaName: string;
  experienceYears: number;
  salaryDesired: number;
  currency: string;
  updatedAt: string;
}

export default function ResumesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [area, setArea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Resume[]>([]);
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

      // For now, use mock data since backend API isn't fully implemented
      const mockResults = [
        {
          id: '12345678-1234-1234-1234-123456789abc',
          title: 'Senior Frontend Developer',
          areaId: 1,
          areaName: 'Москва',
          experienceYears: 5,
          salaryDesired: 300000,
          currency: 'RUR',
          updatedAt: '2024-11-08T10:00:00Z',
        },
        {
          id: '87654321-4321-4321-4321-cba987654321',
          title: 'Fullstack Developer',
          areaId: 2,
          areaName: 'Санкт-Петербург',
          experienceYears: 3,
          salaryDesired: 250000,
          currency: 'RUR',
          updatedAt: '2024-11-07T15:30:00Z',
        }
      ];

      // Filter mock results based on search
      const filteredResults = mockResults.filter(resume =>
        resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (area && resume.areaName.toLowerCase().includes(area.toLowerCase()))
      );

      setResults(filteredResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatSalary = (salary: number, currency: string) => {
    const formatNumber = (num: number) => num.toLocaleString('ru-RU');
    const currencySymbol = currency === 'RUR' ? '₽' : currency;

    return salary ? `${formatNumber(salary)} ${currencySymbol}` : 'Не указана';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Навигация</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Главная</span>
          </a>

          <a
            href="/vacancies"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Building className="w-5 h-5" />
            <span>Вакансии</span>
          </a>

          <a
            href="/resumes"
            className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            <User className="w-5 h-5" />
            <span>Резюме</span>
          </a>
        </nav>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  HH Parser - Резюме
                </h1>
              </div>
            </div>

            {user ? (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">
                  {user.email}
                </span>
                {user.role === 'superadmin' && (
                  <span className="px-2 py-0.5 bg-cyan-600 text-white text-xs rounded-full">
                    Admin
                  </span>
                )}
              </div>
            ) : (
              <a
                href="/login"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all"
              >
                Войти
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-800 bg-clip-text text-transparent">
            Поиск резюме
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Найдите подходящих кандидатов из базы HH Parser
          </p>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="search" className="block text-sm font-medium">
                  Ключевые слова
                </label>
                <Input
                  id="search"
                  type="text"
                  placeholder="React разработчик"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="area" className="block text-sm font-medium">
                  Город/Регион
                </label>
                <Input
                  id="area"
                  type="text"
                  placeholder="Москва"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  disabled={isLoading || !searchQuery.trim()}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Поиск...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Найти
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-cyan-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Найдено {results.length} резюме
              </h3>
            </div>

            <div className="space-y-4">
              {results.map((resume) => (
                <Card key={resume.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">
                          {resume.title}
                        </h4>
                        <div className="flex items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{resume.areaName}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{resume.experienceYears} лет опыта</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Обновлено: {formatDate(resume.updatedAt)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600 dark:text-green-400 mb-1">
                          {formatSalary(resume.salaryDesired, resume.currency)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Желаемая зарплата
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        ID: {resume.id.slice(0, 8)}...
                      </div>
                      <Button variant="ghost" size="sm">
                        Подробнее →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
