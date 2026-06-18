export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

// ---------------------------------------------------
// Additional type definitions used throughout the app
// ---------------------------------------------------

/**
 * Minimal fields for a customer dropdown/select.
 */
export type CustomerField = {
  id: string;
  name: string;
};

/**
 * Full shape of a customer row displayed in the "Customers" table.
 */
export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

/**
 * Shape of the data returned by the `fetchInvoiceById` function.
 */
export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

/**
 * Row representation used in the invoices list UI.
 */
export type InvoicesTable = {
  id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
  name: string; // customer name
  email: string; // customer email
  image_url: string; // customer avatar
};

/**
 * Raw result from the "latest invoices" query before formatting.
 */
export type LatestInvoiceRaw = {
  id: string;
  amount: number;
  name: string;
  email: string;
  image_url: string;
};

/**
 * Monthly revenue data used for charting.
 */
export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string; // formatted currency string
  total_paid: string; // formatted currency string
};
export type Revenue = {
  month: string; // e.g., "2023-01"
  amount: number;
};

