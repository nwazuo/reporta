import { getXataClient } from "../../../utils/xata";

const xata = getXataClient();
export const PAGE_SIZE = 5;

export async function getData(page = 0) {
  const totalRowsQuery = await xata.db.incidents.summarize({
    summaries: {
      all: { count: "*" },
    },
  });
  const totalRows = totalRowsQuery.summaries[0].all;
  const offset = page * PAGE_SIZE;
  const pages = Math.ceil(totalRows / PAGE_SIZE);

  const data = await xata.db.incidents.getPaginated({
    pagination: { size: PAGE_SIZE, offset },
  });

  return {
    data: data.records,
    total: totalRows,
    pages,
  };
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getData();
    res.status(200).json(data);
  } else {
  }
}
