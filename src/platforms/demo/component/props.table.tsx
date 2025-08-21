import clsx from "clsx";
import React from "react";

export type PropRow = {
  name: string;
  type: string | string[];
  required?: boolean;
  defaultValue?: string;
  description?: string;
};

type PropsTableProps = {
  rows: PropRow[];
  maxHeight?: string;
};

export const PropsTable: React.FC<PropsTableProps> = ({
  rows,
  maxHeight = "400px",
}) => {
  const renderType = (type: string | string[]) => {
    if (Array.isArray(type)) {
      return type.map((t, i) => (
        <span key={i} className="badge badge-soft badge-primary mr-1 ">
          {t}
        </span>
      ));
    }
    return <span className="badge badge-soft badge-primary">{type}</span>;
  };

  return (
    <div
      className="overflow-x-auto rounded border border-base-200"
      style={{ maxHeight, overflowY: "auto" }}
    >
      <table className="table w-full">
        <thead className="sticky top-0 z-[1] bg-base-100">
          <tr>
            <th className="bg-base-100 w-1/3">Prop</th>
            <th className="bg-base-100 w-1/3">Type</th>
            <th className="bg-base-100 w-1/3">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              className={clsx(index % 2 === 0 ? "bg-base-100" : "bg-base-200")}
            >
              <td>
                <code>{row.name}</code>
                {row.required && <span className="text-error ml-1">*</span>}
              </td>
              <td>{renderType(row.type)}</td>
              <td>
                {row.description}
                {row.defaultValue && (
                  <div className="text-xs text-base-content/60">
                    Default: <code>{row.defaultValue}</code>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
