# Course Management DDD System "система управління курсами в онлайн-освіті"

Цей проект реалізовано у програмі Visual Studio Code про "система управління курсами в онлайн-освіті" з використанням принципів Domain-Driven Design (DDD).

 Піддомени
- Користувачі: Student, Instructor, Auth
- Курси: Course, Lesson, Material
- Запис на курс: Enrollment, Progress, Certificate

 Ubiquitous Language (Глосарій)
- User — особа, яка користується платформою (студент або викладач)
- Course — навчальний курс, створений викладачем
- Lesson — окремий навчальний блок у курсі
- Enrollment — запис студента на курс
- Progress — відслідковування проходження курсу
- Certificate — документ, що підтверджує завершення курсу

## Структура домену
- **User Management**: студенти, викладачі, автентифікація
- **Course Management**: курси, уроки, матеріали
- **Enrollment System**: запис на курс, прогрес, сертифікати

## Файли
 course-management-ddd/
├── docs/
│   └── domain/
│       ├── entities.md
│       ├── glossary.md
│       └── context_map.png
├── domain/
│   ├── user.ts
│   ├── course.ts
│   ├── enrollment.ts
│   └── lesson.ts
├── README.md

- `domain/` — класи моделей
- `docs/domain/` — документація, глосарій, діаграма контекстів
 