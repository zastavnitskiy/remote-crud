import { API, Employee } from "./api";

import sampleData from './sample_data.json'

const newEmployeeData = {
  name: "New Name",
  job_title: "Software Engineer",
  country_code: "us",
  salary: 60000,
  birth_date: "1988-10-10",
}

describe("api implementation", () => {
  describe(".get()", () => {
    it("returns an empty list of there is no data", async () => {
      const api = new API([]);
      const data = await api.get();

      expect(data).toEqual([]);
    });
    it("returns all entries if there is data", async () => {
      const api = new API(sampleData);
      const data = await api.get();

      expect(data.length).toEqual(3);
      expect(data).toEqual(sampleData);
    });

    it('.get({ id: "xx" }) returns an array of matching entries', async () => {
      const api = new API(sampleData);
      const data = await api.get({
        id: "1",
      });

      expect(data.length).toEqual(1);
      expect(data[0]).toEqual(sampleData[0]);
    });

    it('.get({ id: "xx" }) returns an empty array if there is no match', async () => {
      const api = new API(sampleData);
      const data = await api.get({
        id: "-1",
      });

      expect(data.length).toEqual(0);
    });

    it("returns the same array instance of no changes were made", async () => {
      const api = new API(sampleData);
      const dataOne = await api.get();
      const dataTwo = await api.get();

      expect(dataOne === dataTwo).toEqual(true);
    });
  });

  describe(".update()", () => {
    it("updates an entry and updates are persisted", async () => {
      const api = new API(sampleData);
      const id = "2";
      const [initialEntry] = await api.get({
        id,
      });

      const update = {
        id,
        job_title: "Senior Software Engineer",
        salary: 61000,
      };

      const updatedEntry = await api.update(update);
      const [newData] = await api.get({ id });

      expect(updatedEntry).toEqual(newData);

      expect(updatedEntry.id).toEqual(initialEntry.id);
      expect(updatedEntry.name).toEqual(initialEntry.name);

      expect(updatedEntry.job_title).toEqual(update.job_title);
      expect(updatedEntry.salary).toEqual(update.salary);
    });

    it("throws if there is no entry to update", async () => {
      const api = new API();

      await expect(
        api.update({
          id: "-1",
          name: "Hello, noname",
        })
      ).rejects.toThrow();
    });

    it("returns a new array instance of mutating", async () => {
      const api = new API(sampleData);
      const oldData = await api.get();
      await api.update({
        id: "1",
        name: "New Name",
      });
      const newData = await api.get();
      expect(oldData === newData).toEqual(false);
    });

    it("notifies subscribers", async () => {
      const api = new API(sampleData);
      const subsriber = jest.fn();
      const updateDiff = {
        id: "2",
        name: 'Updated Name'
      }
      api.subscribe(subsriber);
      expect(subsriber).toHaveBeenCalledTimes(1);

      await api.update(updateDiff);

      expect(subsriber).toHaveBeenCalledTimes(2);
      const [updatedEntry] = await api.get({ id: updateDiff.id });
      expect(updatedEntry.name).toEqual(updateDiff.name)

      //todo generalize validation fn
    });
  });

  describe(".create()", () => {
    it("creates a new entry", async () => {
      const api = new API();

      const newEmployeeData = {
        name: "Pavel Zastavnitskiy",
        job_title: "Software Engineer",
        birth_date: "1989-06-10",
        country_code: "us",
        salary: 60000,
      };

      const newEntry = await api.create(newEmployeeData);

      const entries = await api.get();

      expect(newEntry.id).toBeDefined();
      expect(newEntry.name).toEqual(newEntry.name);
      expect(newEntry.job_title).toEqual(newEmployeeData.job_title);

      expect(entries.length).toEqual(1);
      expect(entries[0]).toEqual(newEntry);
    });

    it("returns a new array instance of mutating", async () => {
      const api = new API(sampleData);
      const oldData = await api.get();
      await api.create({
        name: "New Name",
        job_title: "Software Engineer",
        country_code: "us",
        salary: 60000,
        birth_date: "1988-10-10",
      });
      const newData = await api.get();
      expect(oldData === newData).toEqual(false);
    });

    it("notifies subscribers", async () => {
      const api = new API([]);
      const subsriber = jest.fn();
      api.subscribe(subsriber);
      expect(subsriber).toHaveBeenCalledTimes(1);

      await api.create(newEmployeeData);

      expect(subsriber).toHaveBeenCalledTimes(2);
      const [newEntry] = subsriber.mock.calls[1][0];
      expect(newEntry.name).toEqual(newEmployeeData.name)
      expect(newEntry.salary).toEqual(newEmployeeData.salary)

      //todo generalize validation fn
    });
  });
});
