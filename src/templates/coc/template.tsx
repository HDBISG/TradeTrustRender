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
const leftAlignTd = css`
  border: 1px solid grey; 
  border-collapse: collapse;
  text-align: left;
`;

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
<table css={tableGroup} >
    <tbody>
    <tr  >
    <td css={leftAlignTd}>
    <p><strong>&nbsp;1 Exporter (Name &amp; Address)</strong></p>
    <p> {document.eco.coExptrName}</p>
    <p> {document.eco.coExptrAddr1}</p>
    </td>
    <td  css={td} rowspan="2">
    <p><strong>REPUBLIC OF SINGAPORE</strong></p>
    <p>Trade Trust</p>
    <p><strong>CERTIFICATE OF ORIGIN</strong></p>
    <br/>
    <p><strong>No. {document.eco.coRefNo}</strong></p>
    <br/>
    <p>NO UNAUTHORISED ADDITION/ALTERATION MAY BE MADE</p>
    <p>TO THIS CERTIFICATE ONCE IT IS ISSUED</p>
    </td>
    </tr>
    <tr>
    <td  css={leftAlignTd} >
    <p><strong>&nbsp;2 Consignee (Name, Full Address &amp; Country)</strong></p>
    <p> {document.eco.coConsignName}</p>
    <p> {document.eco.coConsignAddr1} <br/>
        {document.eco.coConsignAddr2} <br/>
        {document.eco.coConsignAddr3} <br/>
        {document.eco.coConsignAddr4}</p>    
    </td>
    </tr>

    <tr>
    <td  css={leftAlignTd}   colspan="2">
    <p>&nbsp;12 CERTIFICATION BY THE COMPETENT AUTHORITY</p>
    <p>We hereby certify that evidence has been produced to satisfy us 
	that the goods specified above originate in/were processed in the
	country shown in box 7. This Certificate is therefore issued and certified to the best of our knowledge
	and belief to be correct and without any liability on our part.</p>
	<table width='100%'>
	<tr>
		<td width='30%'>
		</td>
		<td width='30%' >
            <img   width="200"
                src = "https://smarteco.vcargocloud.com/store/template/resources/stamp_SICC_T.png" >
        </img>
		</td>
		<td width='30%' >
            <img  width="120"
                src = "https://smarteco.vcargocloud.com/store/template/resources/stamp_ICC.png" >
        </img>
		</td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
  );
};