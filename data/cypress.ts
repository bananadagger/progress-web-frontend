const company = {
  title: "company",
  children: [
    {
      title: "company",
      done: false,
    },
  ],
};

const purchasing = {
  title: "purchasing",
  children: [
    {
      title: "distributor",
      done: false,
    },
    {
      title: "expressPurchaseOrder",
      done: false,
    },
    {
      title: "priceList",
      done: false,
    },
    {
      title: "purchaseOrder",
      done: false,
    },
    {
      title: "purchaseOrderReason",
      done: false,
    },
    {
      title: "purchaseOrderSummary",
      done: false,
    },
    {
      title: "purchaseRequisition",
      done: false,
    },
  ],
};

const sales = {
  title: "sales",
  children: [
    {
      title: "quotation",
      done: false,
    },
  ],
};

const warehouse = {
  title: "warehouse",
  children: [
    {
      title: "warehouse",
      done: false,
    },
  ],
};

export const cypressObject = {
  title: "Cypress",
  children: [company, purchasing, sales, warehouse],
};
