export class Enrollment {
  constructor(
    public id: string,
    public userId: string,
    public courseId: string,
    public status: 'active' | 'completed'
  ) {}
}
