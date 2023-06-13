import App from '../../App';
import Table from '../../views/table';

const table: any = [
  {
    path: "/table",
    element: <App />,
    children: [
      {
        path: "team",
        element: <Table />,
      },
    ],
  },
];

export default table;
