export function convertTimeStringToMinutes(timeString: string): number {
  let totalMinutes = 0; // Инициализация переменной для хранения общего количества минут // Регулярное выражение для поиска часов и минут
  const regex = /(\d+)(h|m)/g;
  let match: RegExpExecArray | null;

  // Поиск всех совпадений в строке
  while ((match = regex.exec(timeString)) !== null) {
    const value = parseInt(match[1], 10); // Получаем числовое значение const unit = match[2]; // Получаем единицу измерения (h или m)
    const unit = match[2]; // Получаем единицу измерения (h или m)

    // Добавляем соответствующее количество минут
    if (unit === 'h') {
      totalMinutes += value * 60; // 1 час = 60 минут } else if (unit === 'm') {
      totalMinutes += value; // минуты добавляются напрямую
    }
  }

  return totalMinutes;
}

export function convertMinutesToTimeString(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60); // Вычисляем количество часов const ; // Вычисляем оставшиеся минуты
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
}

export function convertRating(parseRating: number): string {
  const numWithDecimal = parseRating.toFixed(1);
  return numWithDecimal;
}
export function convertLevelRating(ratingValue: number): string {
  if (ratingValue === 0) {
    return 'Not rated yet';
  }
  if (ratingValue < 3) {
    return 'Bad';
  }
  if (ratingValue >= 3 && ratingValue < 5) {
    return 'Normal';
  }
  if (ratingValue >= 5 || ratingValue < 8) {
    return 'Good';
  }
  if (ratingValue >= 8 || ratingValue < 10) {
    return 'Very good';
  }
  if (ratingValue === 8) {
    return 'Awesome';
  }
  return 'Unknown';
}


export function convertStringDate(date: string): string {
  const dateString: string = date;
  const parseDate: Date = new Date(dateString);
  // Массив названий месяцев
  const months: string[] = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  // Форматируем дату
  const formattedDate = `${months[parseDate.getMonth()]} ${parseDate.getDate()}, ${parseDate.getFullYear()}`;
  return formattedDate;
}
