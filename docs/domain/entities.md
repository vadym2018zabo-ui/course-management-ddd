# Сутності та атрибути

## Піддомени
- Користувачі: Student, Instructor, Auth
- Курси: Course, Lesson, Material
- Запис на курс: Enrollment, Progress, Certificate

## Ключові сутності

| Сутність   | Атрибути                              | Зв’язки                                      |
|------------|----------------------------------------|----------------------------------------------|
| User       | id, name, email, role                  | hasMany Enrollments                          |
| Course     | id, title, description, instructorId   | hasMany Lessons, belongsTo User              |
| Lesson     | id, title, content, courseId           | belongsTo Course                             |
| Enrollment | id, userId, courseId, status           | belongsTo User, Course                       |
