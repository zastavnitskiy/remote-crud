import React from "react";
import { Employee } from "../../api/api";
import { countries } from "../../helpers/countries";

interface Props {
  countryCode: Employee["country_code"];
  className?: string;
}

export const Country: React.SFC<Props> = ({ countryCode, className = "" }) => {
  return (
    <div className={className}>{countries[countryCode] || countryCode}</div>
  );
};
