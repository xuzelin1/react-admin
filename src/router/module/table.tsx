import { RouteObject } from 'react-router-dom';

import BaseTable from '@/views/table';
import FilterTable from '@/views/table/filter-table';

const table: RouteObject[] = [
  {
    path: "/table",
    element: <BaseTable />,
  },
  {
    path: "/filter-table",
    element: <FilterTable />,
  }
];

export default table;
