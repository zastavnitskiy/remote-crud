export interface Country {
  name: string;
  code: string;
}

export interface Employee {
  id: string;
  name: string;
  birth_date: string;
  job_title: string;
  country_code: Country["code"];
  salary: number;
}

export type NewEmployee = Omit<Employee, "id">;
export type UpdateEmployeeDiff = AlmostPartial<Employee, "id">;

/*
 * Like partial, but keeps a single property mandatory
 */
type AlmostPartial<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * For now, we only allow query by id, but in the future we can extend this,
 * to allow queries based on salary, job title and so on.
 */
interface Query {
  id?: string;
}

interface Subscriber {
  (employees: Employee[]): void;
}

interface Unsubscribe {
  (): void;
}

export const EmptyEmployee: NewEmployee = {
  name: "",
  job_title: "",
  birth_date: "",
  country_code: "",
  salary: 0,
};

export class API {
  private data: Employee[];
  private subscribers: Subscriber[];

  public constructor(sampleData: Employee[]) {
    this.data = sampleData || [];
    this.subscribers = [];
  }

  public async get(query?: Query): Promise<Employee[]> {
    if (!query) {
      return this.data;
    }

    const { id } = query;

    const results = this.data.filter((entry) => entry.id === id);

    return results;
  }

  public async create(entry: NewEmployee): Promise<Employee> {
    const id = String(Date.now());

    const newEntry = {
      id,
      ...entry,
    };

    this.data = [...this.data, newEntry];

    this.notifySubscribers();

    return newEntry;
  }

  public async update(updateDiff: UpdateEmployeeDiff): Promise<Employee> {
    const [existingEntry] = await this.get({
      id: updateDiff.id,
    });

    if (!existingEntry) {
      throw new Error(
        `Update impossible: We don't have entry with id = ${updateDiff.id}`
      );
    }

    const updatedEntry = {
      ...existingEntry,
      ...updateDiff,
    };

    this.data = this.data.map((employee) =>
      employee.id === updatedEntry.id ? updatedEntry : employee
    );

    this.notifySubscribers();

    return updatedEntry;
  }

  private notifySubscribers() {
    this.subscribers.forEach((subscriber) => subscriber(this.data));
  }

  public subscribe(fn: Subscriber): Unsubscribe {
    this.subscribers = [...this.subscribers, fn];

    fn(this.data);

    return () => {
      this.subscribers = this.subscribers.filter(
        (subscriber) => subscriber !== fn
      );
    };
  }
}
