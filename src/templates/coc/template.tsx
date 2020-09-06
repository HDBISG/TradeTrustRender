import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../sample";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

const tableGroup = css`
  width: 100%; 
  border: 1px solid grey; 
  table-layout: fixed; 
  border-collapse: collapse;
`;

const td = css`
  border: 1px solid grey; 
  border-collapse: collapse;
`;

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
<table css={tableGroup} >
    <tbody>
    <tr  >
    <td css={td}>
    <p><strong>&nbsp;1 Exporter (Name &amp; Address)</strong></p>
    <p>PANASONIC LOGISTICS ASIA PACIFIC ON<br />BEHALF OF PANASONIC CORPORATION<br />1006, KADOMA, KADOMA CITY, OSAKA,<br />571-8501, JAPAN</p>
    </td>
    <td  css={td} rowspan="2">
    <p><strong>REPUBLIC OF SINGAPORE</strong></p>
    <p>Trade Trust</p>
    <p><strong>CERTIFICATE OF ORIGIN</strong></p>
    <br/>
    <p><strong>No. SICC - 88-20-002264</strong></p>
    <br/>
    <p>NO UNAUTHORISED ADDITION/ALTERATION MAY BE MADE</p>
    <p>TO THIS CERTIFICATE ONCE IT IS ISSUED</p>
    </td>
    </tr>
    <tr>
    <td >
    <p><strong>&nbsp;2 Consignee (Name, Full Address &amp; Country)</strong></p>
    <p>PANASONIC INDIA PVT.LTD.<br />6TH FLOOR SPIC BUILDING ANNEXE<br />NO.88, MOUNT ROAD, GUINDY CHENNAI<br />600032, INDIA</p>
    </td>
    </tr>

    </tbody>
    </table>
    </div>
  );
};